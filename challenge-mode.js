(() => {
  const $ = (id) => document.getElementById(id);
  const mode = $('challengeMode');
  const fields = $('challengeTimeFields');
  const minutes = $('challengeMinutes');
  const seconds = $('challengeSeconds');
  const row = $('challengeStatusRow');
  const remaining = $('challengeRemaining');
  const result = $('challengeResult');
  const timeoutModal = $('timeoutModal');
  const timeoutText = $('timeoutText');
  const closeTimeout = $('closeTimeout');
  const newGame = $('newGame');
  const clear = $('clear');
  const resume = $('resume');
  const progress = $('progress');
  const language = $('lang');

  if (!mode || !fields || !minutes || !seconds || !row || !remaining || !newGame || !progress) return;

  const CONFIG_KEY = 'tip-challenge-config-v1';
  const SESSION_KEY = 'tip-challenge-session-v1';
  let interval = null;
  let active = false;
  let deadline = 0;
  let durationMs = 0;
  let expired = false;

  const translations = {
    en: {
      timedChallenge: 'Timed challenge', disabled: 'Off', enabled: 'On', timeLimit: 'Time limit', minutes: 'Minutes', seconds: 'Seconds',
      remaining: 'Remaining', timeoutTitle: 'Time is up', timeoutBody: 'The time limit expired before the puzzle was completed.', close: 'Close',
      challengeSuccess: 'Challenge cleared with {time} remaining.'
    },
    zh: {
      timedChallenge: '限時挑戰', disabled: '關閉', enabled: '開啟', timeLimit: '限制時間', minutes: '分鐘', seconds: '秒',
      remaining: '剩餘時間', timeoutTitle: '時間到', timeoutBody: '未能在限制時間內完成拼圖。', close: '關閉',
      challengeSuccess: '限時挑戰完成，剩餘 {time}。'
    },
    ja: {
      timedChallenge: 'タイムチャレンジ', disabled: 'オフ', enabled: 'オン', timeLimit: '制限時間', minutes: '分', seconds: '秒',
      remaining: '残り時間', timeoutTitle: '時間切れ', timeoutBody: '制限時間内にパズルを完成できませんでした。', close: '閉じる',
      challengeSuccess: '残り {time} でチャレンジ達成。'
    }
  };

  function lang() {
    return translations[language?.value] ? language.value : 'en';
  }

  function tr(key, vars = {}) {
    return translations[lang()][key].replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
  }

  function format(ms) {
    ms = Math.max(0, Math.ceil(ms / 1000) * 1000);
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function applyTexts() {
    document.querySelectorAll('[data-challenge-i18n]').forEach((node) => {
      const key = node.dataset.challengeI18n;
      if (translations[lang()][key]) node.textContent = tr(key);
    });
    mode.options[0].textContent = tr('disabled');
    mode.options[1].textContent = tr('enabled');
    if (expired && timeoutText) timeoutText.textContent = tr('timeoutBody');
  }

  function updateFieldVisibility() {
    fields.classList.toggle('hidden', mode.value !== 'on');
  }

  function readDuration() {
    const min = Math.max(0, Math.min(180, Number(minutes.value) || 0));
    const sec = Math.max(0, Math.min(59, Number(seconds.value) || 0));
    const value = (min * 60 + sec) * 1000;
    return value >= 10000 ? value : 10000;
  }

  function saveConfig() {
    localStorage.setItem(CONFIG_KEY, JSON.stringify({
      mode: mode.value === 'on' ? 'on' : 'off',
      minutes: Number(minutes.value) || 0,
      seconds: Number(seconds.value) || 0
    }));
  }

  function loadConfig() {
    try {
      const config = JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}');
      mode.value = config.mode === 'on' ? 'on' : 'off';
      minutes.value = String(Number.isFinite(config.minutes) ? config.minutes : 10);
      seconds.value = String(Number.isFinite(config.seconds) ? config.seconds : 0);
    } catch {
      mode.value = 'off';
      minutes.value = '10';
      seconds.value = '0';
    }
    updateFieldVisibility();
  }

  function saveSession() {
    if (!active) {
      localStorage.removeItem(SESSION_KEY);
      return;
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify({ active, deadline, durationMs }));
  }

  function stopInterval() {
    if (interval) clearInterval(interval);
    interval = null;
  }

  function resetChallenge(removeSession = true) {
    stopInterval();
    active = false;
    expired = false;
    deadline = 0;
    durationMs = 0;
    document.body.classList.remove('challenge-active', 'challenge-expired', 'challenge-success');
    row.classList.add('hidden');
    result.textContent = '';
    remaining.textContent = '00:00';
    timeoutModal?.classList.add('hidden');
    if (removeSession) localStorage.removeItem(SESSION_KEY);
  }

  function completeChallenge() {
    if (!active) return;
    const left = Math.max(0, deadline - Date.now());
    stopInterval();
    active = false;
    document.body.classList.remove('challenge-active');
    document.body.classList.add('challenge-success');
    remaining.textContent = format(left);
    result.textContent = tr('challengeSuccess', { time: format(left) });
    localStorage.removeItem(SESSION_KEY);
  }

  function expireChallenge() {
    if (!active) return;
    stopInterval();
    active = false;
    expired = true;
    remaining.textContent = '00:00';
    document.body.classList.remove('challenge-active');
    document.body.classList.add('challenge-expired');
    timeoutText.textContent = tr('timeoutBody');
    timeoutModal.classList.remove('hidden');
    localStorage.removeItem(SESSION_KEY);
  }

  function parseProgress() {
    const match = String(progress.textContent || '').match(/(\d+)\s*\/\s*(\d+)/);
    if (!match) return { placed: 0, total: 0 };
    return { placed: Number(match[1]), total: Number(match[2]) };
  }

  function tick() {
    if (!active) return;
    const puzzle = parseProgress();
    if (puzzle.total > 0 && puzzle.placed >= puzzle.total) {
      completeChallenge();
      return;
    }
    const left = deadline - Date.now();
    remaining.textContent = format(left);
    if (left <= 0) expireChallenge();
    else saveSession();
  }

  function startChallenge() {
    resetChallenge();
    saveConfig();
    if (mode.value !== 'on') return;
    const puzzle = parseProgress();
    if (puzzle.total <= 0) return;
    durationMs = readDuration();
    deadline = Date.now() + durationMs;
    active = true;
    row.classList.remove('hidden');
    document.body.classList.add('challenge-active');
    remaining.textContent = format(durationMs);
    interval = setInterval(tick, 100);
    tick();
  }

  function restoreSession() {
    if (active) return;
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY) || '{}');
      if (!session.active || !Number.isFinite(session.deadline)) return;
      if (session.deadline <= Date.now()) {
        localStorage.removeItem(SESSION_KEY);
        return;
      }
      active = true;
      deadline = session.deadline;
      durationMs = Number(session.durationMs) || deadline - Date.now();
      row.classList.remove('hidden');
      document.body.classList.add('challenge-active');
      interval = setInterval(tick, 100);
      tick();
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
  }

  mode.addEventListener('change', () => {
    updateFieldVisibility();
    saveConfig();
  });
  minutes.addEventListener('change', saveConfig);
  seconds.addEventListener('change', saveConfig);
  language?.addEventListener('change', applyTexts);
  newGame.addEventListener('click', () => setTimeout(startChallenge, 0));
  resume?.addEventListener('click', () => setTimeout(restoreSession, 300));
  clear?.addEventListener('click', () => resetChallenge());
  closeTimeout?.addEventListener('click', () => {
    timeoutModal.classList.add('hidden');
    clear?.click();
    resetChallenge();
  });

  new MutationObserver(tick).observe(progress, { childList: true, characterData: true, subtree: true });

  loadConfig();
  applyTexts();
  setTimeout(restoreSession, 600);
})();
