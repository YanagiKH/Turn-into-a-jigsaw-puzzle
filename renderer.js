const $ = (id) => document.getElementById(id);
const E = {
  lang: $('lang'), settingsBtn: $('settingsBtn'), debugBtn: $('debugBtn'), refreshMods: $('refreshMods'),
  saveProject: $('saveProject'), loadProject: $('loadProject'), pickImage: $('pickImage'), clear: $('clear'),
  imageInput: $('imageInput'), projectInput: $('projectInput'), previewImg: $('previewImg'), previewHint: $('previewHint'),
  fileName: $('fileName'), fileDim: $('fileDim'), style: $('style'), size: $('size'), newGame: $('newGame'), resume: $('resume'),
  fit: $('fit'), reset: $('reset'), zoomOut: $('zoomOut'), zoomIn: $('zoomIn'), time: $('time'), progress: $('progress'), best: $('best'),
  status: $('status'), viewport: $('viewport'), stage: $('stage'), slots: $('slots'), placed: $('placed'), tray: $('tray'), records: $('records'), modList: $('modList'),
  modal: $('modal'), finishText: $('finishText'), closeModal: $('closeModal'), settingsModal: $('settingsModal'), settingsSave: $('settingsSave'), settingsCancel: $('settingsCancel'),
  themeMode: $('themeMode'), gifFps: $('gifFps'), snapDistance: $('snapDistance'), maxZoom: $('maxZoom'), debugMode: $('debugMode'), debugVerbose: $('debugVerbose'), repairMode: $('repairMode'),
  debugPanel: $('debugPanel'), debugOutput: $('debugOutput'), copyLogs: $('copyLogs'), clearLogs: $('clearLogs'), closeDebug: $('closeDebug')
};

const I18N = {
  en: {
    appTitle: 'Turn into a Jigsaw Puzzle', appSubtitle: 'Load any image, split it, and play instantly.', language: 'Language', advancedSettings: 'Settings', debugLog: 'Debug Log',
    saveProject: 'Save Project', loadProject: 'Load Project', source: 'Source', loadImage: 'Load Image', clear: 'Clear', noImage: 'No image loaded yet.', file: 'File', dimensions: 'Dimensions',
    setup: 'Setup', style: 'Puzzle style', styleJigsaw: 'Classic jigsaw', styleSquare: 'Square tiles', piecesPerSide: 'Pieces per side', newGame: 'Create Puzzle', resume: 'Resume',
    status: 'Status', timer: 'Time', progress: 'Progress', best: 'Best', idleState: 'Load an image to start.', boardHint: 'Drag pieces from the right tray. Pan the board by dragging empty space. Zoom with buttons or mouse wheel.',
    fit: 'Fit View', resetView: 'Reset View', tray: 'Piece tray', records: 'Records', mods: 'Mods', refreshMods: 'Refresh', completeTitle: 'Puzzle completed', continue: 'Continue',
    completed: 'Completed in {time}.', newRecord: 'New record!', noRecord: 'No record yet.', currentBest: 'Current best: {time}', saveSuccess: 'Project saved.', loadSuccess: 'Project loaded.',
    loadImageFirst: 'Load an image first.', puzzleReady: 'Puzzle created. Start dragging pieces from the tray.', puzzleResumed: 'Puzzle resumed.', clearDone: 'Puzzle cleared.', saveHint: 'Save a project file to continue later.',
    recordsForCurrent: 'Best time for this puzzle', gifFps: 'GIF refresh rate', snapDistance: 'Snap distance', maxZoom: 'Max zoom', debugMode: 'Debug mode', debugVerbose: 'Verbose logs', repairMode: 'Repair project files',
    themeMode: 'Interface theme', save: 'Save', cancel: 'Cancel', copy: 'Copy', clearLogs: 'Clear', close: 'Close', repairPrompt: 'The file could not be parsed. Try automatic repair?',
    repairFailed: 'Repair failed.', repairSuccess: 'Repair succeeded.', debugOn: 'Debug mode enabled.', debugOff: 'Debug mode disabled.'
  },
  zh: {
    appTitle: '圖片變拼圖', appSubtitle: '載入任意圖片，切成拼圖並直接遊玩。', language: '語言', advancedSettings: '設定', debugLog: '偵錯日誌', saveProject: '儲存拼圖檔', loadProject: '載入拼圖檔',
    source: '來源', loadImage: '載入圖片', clear: '清除', noImage: '尚未載入圖片。', file: '檔案', dimensions: '尺寸', setup: '設定', style: '拼圖樣式', styleJigsaw: '經典拼圖', styleSquare: '方塊拼圖',
    piecesPerSide: '每邊碎片數', newGame: '建立拼圖', resume: '繼續遊玩', status: '狀態', timer: '時間', progress: '進度', best: '最佳紀錄', idleState: '先載入圖片即可開始。',
    boardHint: '從右側拼圖槽拖曳碎片到棋盤。拖曳空白處可平移畫面，使用按鈕或滑鼠滾輪可縮放。', fit: '適合視窗', resetView: '重置視角', tray: '拼圖槽', records: '紀錄', mods: '模組', refreshMods: '重新載入',
    completeTitle: '拼圖完成', continue: '繼續', completed: '完成時間：{time}。', newRecord: '新的紀錄！', noRecord: '尚無紀錄。', currentBest: '目前最佳：{time}', saveSuccess: '拼圖檔已儲存。', loadSuccess: '拼圖檔已載入。',
    loadImageFirst: '請先載入圖片。', puzzleReady: '拼圖已建立，從右側開始拖曳碎片。', puzzleResumed: '已繼續上次進度。', clearDone: '已清除目前拼圖。', saveHint: '可儲存拼圖檔以便之後繼續。',
    recordsForCurrent: '此拼圖的最佳時間', gifFps: 'GIF 更新率', snapDistance: '吸附距離', maxZoom: '最大縮放', debugMode: '偵錯模式', debugVerbose: '詳細日誌', repairMode: '修復拼圖存檔',
    themeMode: '介面主題', save: '儲存', cancel: '取消', copy: '複製', clearLogs: '清除', close: '關閉', repairPrompt: '檔案無法直接解析，是否嘗試自動修復？',
    repairFailed: '修復失敗。', repairSuccess: '修復成功。', debugOn: '已開啟偵錯模式。', debugOff: '已關閉偵錯模式。'
  },
  ja: {
    appTitle: '画像をジグソーパズルに変換', appSubtitle: '任意の画像を読み込み、分割してそのまま遊べます。', language: '言語', advancedSettings: '設定', debugLog: 'デバッグログ',
    saveProject: 'パズルを保存', loadProject: 'パズルを読み込む', source: '画像', loadImage: '画像を読み込む', clear: 'クリア', noImage: 'まだ画像が読み込まれていません。', file: 'ファイル', dimensions: 'サイズ',
    setup: '設定', style: 'パズルの種類', styleJigsaw: '通常のジグソー', styleSquare: '四角パズル', piecesPerSide: '1辺の分割数', newGame: 'パズルを作成', resume: '続きから',
    status: '状態', timer: '時間', progress: '進捗', best: 'ベスト', idleState: '画像を読み込むと開始できます。', boardHint: '右側のトレイからピースをドラッグします。空白部分をドラッグすると盤面を移動、ボタンやマウスホイールで拡大縮小できます。',
    fit: '全体表示', resetView: '表示を戻す', tray: 'ピーストレイ', records: '記録', mods: 'モジュール', refreshMods: '再読み込み', completeTitle: '完成しました', continue: '続ける',
    completed: '完成時間: {time}。', newRecord: '新記録です！', noRecord: '記録なし', currentBest: '現在の最短: {time}', saveSuccess: '保存しました。', loadSuccess: '読み込みました。',
    loadImageFirst: '先に画像を読み込んでください。', puzzleReady: 'パズルを作成しました。右側のピースをドラッグしてください。', puzzleResumed: '前回の続きから再開しました。', clearDone: '現在のパズルをクリアしました。', saveHint: 'あとで続けられるように保存できます。',
    recordsForCurrent: 'このパズルの最短記録', gifFps: 'GIF更新率', snapDistance: '吸着距離', maxZoom: '最大ズーム', debugMode: 'デバッグモード', debugVerbose: '詳細ログ', repairMode: 'パズル保存の修復',
    themeMode: 'インターフェーステーマ', save: '保存', cancel: 'キャンセル', copy: 'コピー', clearLogs: '消去', close: '閉じる', repairPrompt: 'ファイルを解析できません。自動修復を試しますか？',
    repairFailed: '修復に失敗しました。', repairSuccess: '修復に成功しました。', debugOn: 'デバッグモードを有効にしました。', debugOff: 'デバッグモードを無効にしました。'
  }
};

const LS = { lang: 'tip-lang-v4', settings: 'tip-settings-v4', last: 'tip-last-v4', records: 'tip-records-v4', logs: 'tip-logs-v4' };
const isElectron = !!window.puzzleApi?.saveProject;
const TRAY_SLOTS = 5;
const PAD = 30;
const CELL = 108;
let gifTimer = null;

const state = {
  lang: 'en',
  settings: { theme: 'black', gifFps: 10, snapDistance: 0.65, maxZoom: 3.5, debug: false, verbose: false, repair: true },
  themeMap: new Map(),
  mods: [],
  modHooks: { boot: [], puzzleCreated: [], piecePlaced: [], complete: [] },
  imageName: '', imageData: '', imageType: 'image', imageHash: '', imageW: 0, imageH: 0, sourceImg: null,
  boardCanvas: null, boardCtx: null, boardW: 0, boardH: 0,
  style: 'jigsaw', size: 4, seed: 0,
  pieces: [], map: new Map(), pool: [], tray: new Array(TRAY_SLOTS).fill(null), placed: 0,
  running: false, completed: false, elapsed: 0, startAt: 0,
  transform: { x: 0, y: 0, s: 1 }, drag: null, pan: null,
  records: {}, logs: []
};

function addTheme(id, label, vars, origin = 'builtin') {
  state.themeMap.set(id, { id, label, vars, origin });
}

const BUILTIN_THEME_DEFS = {
  black: { label: 'Black', vars: { 'bg-a': '#172034', 'bg-b': '#0d1117', 'bg-c': '#090b10', panel: 'rgba(21,26,35,.92)', line: 'rgba(255,255,255,.06)', text: '#e8edf7', muted: '#9aa6bd', accent: '#6ea8ff', 'accent-2': '#8bd3ff', 'primary-text': '#09111c', shadow: '0 16px 48px rgba(0,0,0,.35)' } },
  white: { label: 'White', vars: { 'bg-a': '#fbfcff', 'bg-b': '#eef3fa', 'bg-c': '#d9e2ef', panel: 'rgba(255,255,255,.86)', line: 'rgba(18,24,38,.10)', text: '#111827', muted: '#4b5563', accent: '#2f6fe4', 'accent-2': '#6f9ff0', 'primary-text': '#ffffff', shadow: '0 16px 48px rgba(9,15,28,.12)' } },
  blue: { label: 'Blue', vars: { 'bg-a': '#111b33', 'bg-b': '#0b1120', 'bg-c': '#080d18', panel: 'rgba(15,22,39,.94)', line: 'rgba(120,157,255,.12)', text: '#e8f1ff', muted: '#a2b5de', accent: '#6ea8ff', 'accent-2': '#8fd3ff', 'primary-text': '#08101c', shadow: '0 16px 48px rgba(0,0,0,.42)' } },
  purple: { label: 'Purple', vars: { 'bg-a': '#21122d', 'bg-b': '#120b19', 'bg-c': '#09060d', panel: 'rgba(29,18,39,.94)', line: 'rgba(219,157,255,.12)', text: '#f2e8ff', muted: '#c6a8de', accent: '#b274ff', 'accent-2': '#e0a1ff', 'primary-text': '#120819', shadow: '0 16px 48px rgba(0,0,0,.45)' } },
  green: { label: 'Green', vars: { 'bg-a': '#10261d', 'bg-b': '#0b1410', 'bg-c': '#060a08', panel: 'rgba(15,30,22,.94)', line: 'rgba(136,255,199,.12)', text: '#e9fff3', muted: '#a7c6b4', accent: '#59d98e', 'accent-2': '#94efbc', 'primary-text': '#08140d', shadow: '0 16px 48px rgba(0,0,0,.42)' } }
};
Object.entries(BUILTIN_THEME_DEFS).forEach(([id, def]) => addTheme(id, def.label, def.vars, 'builtin'));

const t = (key, vars = {}) => (I18N[state.lang] || I18N.en)[key]?.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') || key;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hashStr = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16); };
const randFactory = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const shuffle = (arr, rnd) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = (ms) => { ms = Math.max(0, Math.floor(ms)); const m = Math.floor(ms / 60000), s = Math.floor((ms % 60000) / 1000), x = ms % 1000; return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(x).padStart(3, '0')}`; };
const loadHtmlImage = (src) => new Promise((resolve, reject) => { const img = new Image(); img.decoding = 'async'; img.onload = () => resolve(img); img.onerror = reject; img.src = src; });
const fileToDataURL = (file) => new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = reject; r.readAsDataURL(file); });
const downloadText = (name, text) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
const saveLS = (key, value) => localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
const readLS = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
const el = (tag, cls = '') => { const n = document.createElement(tag); if (cls) n.className = cls; return n; };

function log(message, level = 'info') {
  const line = `${new Date().toISOString()} [${level}] ${message}`;
  state.logs.push(line);
  if (state.logs.length > 500) state.logs.shift();
  if (state.settings.debug) saveLS(LS.logs, state.logs);
  if (state.settings.debug && state.settings.verbose) (level === 'error' ? console.error : console.log)(line);
  renderDebug();
}

function applyTheme(themeId, persist = false) {
  const theme = state.themeMap.get(themeId) || state.themeMap.get('black');
  if (!theme) return;
  state.settings.theme = theme.id;
  document.body.dataset.theme = theme.id;
  for (const [key, value] of Object.entries(theme.vars)) {
    document.body.style.setProperty(`--${key}`, value);
  }
  if (persist) storeSettings();
}

function refreshThemeOptions() {
  const current = state.themeMap.has(state.settings.theme) ? state.settings.theme : 'black';
  const themes = [...state.themeMap.values()].sort((a, b) => (a.origin === b.origin ? a.label.localeCompare(b.label) : (a.origin === 'builtin' ? -1 : 1)));
  E.themeMode.innerHTML = '';
  for (const theme of themes) {
    const option = document.createElement('option');
    option.value = theme.id;
    option.textContent = theme.origin === 'builtin' ? theme.label : `${theme.label} (mod)`;
    E.themeMode.appendChild(option);
  }
  E.themeMode.value = current;
}

function storeSettings() {
  saveLS(LS.settings, state.settings);
}

function setStatus(key, vars = {}) {
  E.status.textContent = t(key, vars);
}

function currentMs() {
  return state.running ? state.elapsed + (performance.now() - state.startAt) : state.elapsed;
}

function keyForRecords() {
  return state.imageHash ? `${state.imageHash}:${state.size}:${state.style}` : '';
}

function updateHud() {
  E.time.textContent = fmt(currentMs());
  E.progress.textContent = `${state.placed} / ${state.pieces.length}`;
  const rec = state.records[keyForRecords()];
  E.best.textContent = rec?.bestMs != null ? fmt(rec.bestMs) : t('noRecord');
  renderRecords();
}

function setTransform(x, y, s) {
  state.transform = { x, y, s };
  E.stage.style.transform = `translate(${x}px,${y}px) scale(${s})`;
}

function boardPoint(cx, cy) {
  const r = E.viewport.getBoundingClientRect();
  return { x: (cx - r.left - state.transform.x) / state.transform.s, y: (cy - r.top - state.transform.y) / state.transform.s };
}

function fitView() {
  if (!state.boardW) return;
  const r = E.viewport.getBoundingClientRect();
  const s = clamp(Math.min((r.width - 40) / state.boardW, (r.height - 40) / state.boardH), 0.35, state.settings.maxZoom);
  setTransform((r.width - state.boardW * s) / 2, (r.height - state.boardH * s) / 2, s);
}

function zoomBy(factor, cx = null, cy = null) {
  if (!state.boardW) return;
  const r = E.viewport.getBoundingClientRect();
  const s = clamp(state.transform.s * factor, 0.25, state.settings.maxZoom);
  const ax = cx == null ? r.width / 2 : cx - r.left;
  const ay = cy == null ? r.height / 2 : cy - r.top;
  const wx = (ax - state.transform.x) / state.transform.s;
  const wy = (ay - state.transform.y) / state.transform.s;
  setTransform(ax - wx * s, ay - wy * s, s);
}

function traySlots() {
  E.tray.innerHTML = '';
  for (let i = 0; i < TRAY_SLOTS; i++) {
    const slot = el('div', 'tray-slot');
    slot.dataset.i = i;
    const idx = el('div', 'index');
    idx.textContent = String(i + 1);
    slot.appendChild(idx);
    E.tray.appendChild(slot);
  }
}

function clearBoard() {
  E.slots.innerHTML = '';
  E.placed.innerHTML = '';
  traySlots();
  state.tray = new Array(TRAY_SLOTS).fill(null);
}

function drawGrid() {
  E.slots.innerHTML = '';
  for (let r = 0; r < state.size; r++) {
    for (let c = 0; c < state.size; c++) {
      const d = el('div', 'slot');
      d.dataset.r = r;
      d.dataset.c = c;
      d.style.left = `${PAD + c * CELL}px`;
      d.style.top = `${PAD + r * CELL}px`;
      d.style.width = `${CELL}px`;
      d.style.height = `${CELL}px`;
      E.slots.appendChild(d);
    }
  }
}

function edgeGrid(n, rnd) {
  const g = Array.from({ length: n }, () => Array.from({ length: n }, () => ({ t: 0, r: 0, b: 0, l: 0 })));
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (c < n - 1) { const v = rnd() < 0.5 ? 1 : -1; g[r][c].r = v; g[r][c + 1].l = -v; }
      if (r < n - 1) { const v = rnd() < 0.5 ? 1 : -1; g[r][c].b = v; g[r + 1][c].t = -v; }
    }
  }
  return g;
}

function drawPath(ctx, p) {
  const { w, h, t, e } = p;
  const L = t, T0 = t, R = w - t, B = h - t;
  const qx = (R - L) / 4, qy = (B - T0) / 4, midX = (L + R) / 2, midY = (T0 + B) / 2;
  ctx.beginPath();
  ctx.moveTo(L, T0);
  if (e.t) { ctx.lineTo(L + qx, T0); ctx.quadraticCurveTo(midX, T0 - t * e.t, R - qx, T0); ctx.lineTo(R, T0); } else ctx.lineTo(R, T0);
  if (e.r) { ctx.lineTo(R, T0 + qy); ctx.quadraticCurveTo(R + t * e.r, midY, R, B - qy); ctx.lineTo(R, B); } else ctx.lineTo(R, B);
  if (e.b) { ctx.lineTo(R - qx, B); ctx.quadraticCurveTo(midX, B + t * e.b, L + qx, B); ctx.lineTo(L, B); } else ctx.lineTo(L, B);
  if (e.l) { ctx.lineTo(L, B - qy); ctx.quadraticCurveTo(L - t * e.l, midY, L, T0 + qy); ctx.lineTo(L, T0); } else ctx.lineTo(L, T0);
  ctx.closePath();
}

function renderPiece(p, sourceCanvas) {
  const ctx = p.canvas.getContext('2d');
  ctx.clearRect(0, 0, p.w, p.h);
  ctx.save();
  if (state.style === 'jigsaw') { drawPath(ctx, p); ctx.clip(); }
  ctx.drawImage(sourceCanvas, -p.drawX, -p.drawY);
  ctx.restore();
  if (state.style === 'jigsaw') {
    ctx.save(); drawPath(ctx, p); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.stroke(); ctx.restore();
  }
}

function renderAllPieces() {
  const source = state.boardCanvas;
  if (!source) return;
  for (const p of state.pieces) renderPiece(p, source);
}

function appendPieceToTray(p, slotIndex) {
  const slot = E.tray.querySelector(`.tray-slot[data-i="${slotIndex}"]`);
  if (!slot) return;
  slot.querySelectorAll('.tray-piece,.piece,.drag-piece').forEach((n) => n.remove());
  p.state = 'tray';
  p.slot = slotIndex;
  const wrap = p.el;
  wrap.className = 'tray-piece';
  wrap.style.position = 'absolute';
  wrap.style.left = '0';
  wrap.style.top = '28px';
  wrap.style.width = `${Math.min(100, p.w)}px`;
  wrap.style.height = `${Math.min(100, p.h)}px`;
  wrap.style.cursor = 'grab';
  slot.appendChild(wrap);
}

function appendPieceToBoard(p) {
  const wrap = p.el;
  wrap.className = 'piece';
  wrap.style.position = 'absolute';
  wrap.style.left = `${p.drawX}px`;
  wrap.style.top = `${p.drawY}px`;
  wrap.style.width = `${p.w}px`;
  wrap.style.height = `${p.h}px`;
  wrap.style.cursor = 'default';
  E.placed.appendChild(wrap);
  const slot = E.slots.querySelector(`.slot[data-r="${p.r}"][data-c="${p.c}"]`);
  if (slot) slot.classList.add('done');
}

function refillTraySlot(i) {
  if (state.tray[i]) return;
  const id = state.pool.shift();
  if (!id) return;
  const p = state.map.get(id);
  if (!p) return;
  state.tray[i] = p;
  appendPieceToTray(p, i);
}

function refillTray() {
  for (let i = 0; i < TRAY_SLOTS; i++) refillTraySlot(i);
}

function updateBoardFromSource() {
  if (!state.sourceImg || !state.boardCanvas) return;
  state.boardCtx.clearRect(0, 0, state.boardW, state.boardH);
  state.boardCtx.drawImage(state.sourceImg, 0, 0, state.boardW, state.boardH);
  renderAllPieces();
}

function startGifLoop() {
  stopGifLoop();
  if (!state.sourceImg || state.imageType !== 'gif') return;
  const fps = clamp(+state.settings.gifFps || 10, 2, 30);
  const tick = () => {
    if (!state.running && !state.completed && document.visibilityState === 'hidden') return;
    updateBoardFromSource();
  };
  tick();
  gifTimer = setInterval(tick, Math.max(33, Math.round(1000 / fps)));
}

function stopGifLoop() {
  if (gifTimer) {
    clearInterval(gifTimer);
    gifTimer = null;
  }
}

function buildPieces() {
  const rnd = randFactory(state.seed);
  const edges = edgeGrid(state.size, rnd);
  const base = state.style === 'square' ? 0 : Math.max(12, Math.round(CELL * 0.22));
  state.boardW = state.size * CELL + PAD * 2;
  state.boardH = state.size * CELL + PAD * 2;
  state.boardCanvas = document.createElement('canvas');
  state.boardCanvas.width = state.boardW;
  state.boardCanvas.height = state.boardH;
  state.boardCtx = state.boardCanvas.getContext('2d');
  E.stage.style.width = `${state.boardW}px`;
  E.stage.style.height = `${state.boardH}px`;
  state.pieces = [];
  state.map = new Map();
  state.pool = [];
  drawGrid();
  updateBoardFromSource();
  for (let r = 0; r < state.size; r++) {
    for (let c = 0; c < state.size; c++) {
      const t = base;
      const p = {
        id: `${r}-${c}`, r, c, t, e: edges[r][c],
        drawX: PAD + c * CELL - t, drawY: PAD + r * CELL - t,
        w: CELL + t * 2, h: CELL + t * 2, state: 'pool', slot: -1,
        canvas: document.createElement('canvas'), el: null
      };
      p.canvas.width = p.w;
      p.canvas.height = p.h;
      p.el = el('div', 'piece');
      p.el.dataset.id = p.id;
      p.el.appendChild(p.canvas);
      p.el.addEventListener('pointerdown', onPiecePointerDown);
      renderPiece(p, state.boardCanvas);
      state.pieces.push(p);
      state.map.set(p.id, p);
    }
  }
  state.pool = shuffle(state.pieces.map((p) => p.id), rnd);
  clearBoard();
  refillTray();
}

function createGameApi() {
  return {
    log: (...args) => log(args.join(' ')),
    setStatus: (key, vars = {}) => setStatus(key, vars),
    addTheme: ({ id, label, vars }) => {
      if (!id || !label || !vars) return;
      addTheme(id, label, vars, 'mod');
      refreshThemeOptions();
    },
    setTheme: (id) => {
      if (!state.themeMap.has(id)) return;
      applyTheme(id, true);
      refreshThemeOptions();
      storeSettings();
    },
    get state() { return state; },
    get settings() { return { ...state.settings }; },
    get imageName() { return state.imageName; },
    get imageType() { return state.imageType; },
    get size() { return state.size; },
    get style() { return state.style; },
    get theme() { return state.settings.theme; }
  };
}

function registerHook(name, fn, modId = 'mod') {
  if (typeof fn !== 'function') return;
  if (!state.modHooks[name]) return;
  state.modHooks[name].push((game, payload) => {
    try { return fn(game, payload); }
    catch (err) { log(`[${modId}] hook ${name} failed: ${err.message}`, 'error'); }
  });
}

function createModApi(modMeta) {
  return {
    register: (def = {}) => {
      if (def.theme && def.theme.id) {
        addTheme(def.theme.id, def.theme.label || def.theme.id, def.theme.vars || {}, 'mod');
      }
      if (Array.isArray(def.themes)) {
        for (const theme of def.themes) {
          if (theme && theme.id) addTheme(theme.id, theme.label || theme.id, theme.vars || {}, 'mod');
        }
      }
      if (def.hooks && typeof def.hooks === 'object') {
        for (const [name, fn] of Object.entries(def.hooks)) registerHook(name, fn, modMeta.id);
      }
      for (const name of ['boot', 'puzzleCreated', 'piecePlaced', 'complete']) {
        if (typeof def[name] === 'function') registerHook(name, def[name], modMeta.id);
      }
      log(`Mod registered: ${modMeta.name}`);
    },
    addTheme: (theme) => {
      if (theme && theme.id) {
        addTheme(theme.id, theme.label || theme.id, theme.vars || {}, 'mod');
        refreshThemeOptions();
      }
    },
    onBoot: (fn) => registerHook('boot', fn, modMeta.id),
    onPuzzleCreated: (fn) => registerHook('puzzleCreated', fn, modMeta.id),
    onPiecePlaced: (fn) => registerHook('piecePlaced', fn, modMeta.id),
    onComplete: (fn) => registerHook('complete', fn, modMeta.id),
    log: (...args) => log(`[mod:${modMeta.id}] ${args.join(' ')}`),
    game: createGameApi()
  };
}

function runHooks(name, payload = {}) {
  const game = createGameApi();
  for (const hook of state.modHooks[name] || []) {
    try { hook(game, payload); }
    catch (err) { log(`Hook ${name} failed: ${err.message}`, 'error'); }
  }
}

function renderMods() {
  E.modList.innerHTML = '';
  if (!isElectron) {
    const card = el('div', 'mod-card');
    card.innerHTML = `<div><strong>${t('mods')}</strong></div><div class="meta-line">Desktop mod loading is available in the Electron build.</div>`;
    E.modList.appendChild(card);
    return;
  }
  if (!state.mods.length) {
    const card = el('div', 'mod-card');
    card.innerHTML = `<div><strong>${t('mods')}</strong></div><div class="meta-line">No mod packs found.</div>`;
    E.modList.appendChild(card);
    return;
  }
  for (const mod of state.mods) {
    const card = el('div', 'mod-card');
    const statusText = mod.loaded ? 'Loaded' : (mod.kind === 'source' ? 'Source pack' : 'Disabled');
    card.innerHTML = `<div class="row" style="justify-content:space-between"><strong>${mod.name}</strong><span class="status-pill">${statusText}</span></div>
      <div class="meta-line">${mod.language || 'javascript'} · ${mod.source || 'bundled'}</div>
      <div class="meta-line">${mod.description || ''}</div>${mod.error ? `<div class="meta-line">${mod.error}</div>` : ''}`;
    E.modList.appendChild(card);
  }
}

async function loadMods() {
  state.mods = [];
  state.modHooks = { boot: [], puzzleCreated: [], piecePlaced: [], complete: [] };
  refreshThemeOptions();
  renderMods();
  if (!isElectron || !window.puzzleApi?.listMods) {
    renderMods();
    return;
  }
  try {
    const mods = await window.puzzleApi.listMods();
    for (const mod of mods) {
      const entry = { ...mod, loaded: false, kind: mod.language === 'javascript' ? 'runtime' : 'source' };
      if ((mod.language === 'javascript' || mod.type === 'runtime') && mod.entry) {
        try {
          const code = await window.puzzleApi.readModFile(mod.entry);
          const api = createModApi(mod);
          const runner = new Function('api', 'game', 'console', code);
          runner(api, api.game, console);
          entry.loaded = true;
          entry.kind = 'runtime';
        } catch (err) {
          entry.error = err.message;
          log(`Mod load failed: ${mod.name} - ${err.message}`, 'error');
        }
      } else {
        entry.kind = 'source';
      }
      state.mods.push(entry);
    }
    refreshThemeOptions();
    renderMods();
    runHooks('boot', { mods: state.mods.slice() });
  } catch (err) {
    log(`Mod scan failed: ${err.message}`, 'error');
    renderMods();
  }
}

function renderRecords() {
  const rec = state.records[keyForRecords()];
  E.records.innerHTML = '';
  const card = el('div', 'record');
  card.innerHTML = `<div><strong>${t('recordsForCurrent')}</strong></div><div>${t('file')}: <strong>${state.imageName || '-'}</strong></div><div>${t('style')}: <strong>${state.style === 'jigsaw' ? t('styleJigsaw') : t('styleSquare')}</strong></div><div>${t('piecesPerSide')}: <strong>${state.size} × ${state.size}</strong></div><div>${t('best')}: <strong>${rec ? fmt(rec.bestMs) : t('noRecord')}</strong></div>`;
  E.records.appendChild(card);
}

function updateStatusThemeControls() {
  E.themeMode.value = state.settings.theme;
}

function saveSnapshot() {
  if (!state.imageData) return;
  saveLS(LS.last, buildProject());
}

function buildProject() {
  return {
    version: 3,
    lang: state.lang,
    settings: state.settings,
    imageName: state.imageName,
    imageData: state.imageData,
    imageType: state.imageType,
    imageHash: state.imageHash,
    imageW: state.imageW,
    imageH: state.imageH,
    style: state.style,
    size: state.size,
    seed: state.seed,
    elapsed: currentMs(),
    running: state.running,
    completed: state.completed,
    transform: state.transform,
    tray: state.tray.map((p) => p && p.id),
    placed: state.pieces.filter((p) => p.state === 'placed').map((p) => p.id),
    pool: state.pool.slice()
  };
}

function repairProjectText(raw) {
  let txt = String(raw || '').replace(/^\uFEFF/, '').trim();
  const first = txt.indexOf('{');
  const last = txt.lastIndexOf('}');
  if (first >= 0 && last > first) txt = txt.slice(first, last + 1);
  txt = txt.replace(/,\s*([}\]])/g, '$1');
  return JSON.parse(txt);
}

function resetGameState() {
  stopGifLoop();
  state.pieces = [];
  state.map = new Map();
  state.pool = [];
  state.tray = new Array(TRAY_SLOTS).fill(null);
  state.placed = 0;
  state.running = false;
  state.completed = false;
  state.elapsed = 0;
  state.startAt = 0;
  state.drag = null;
  state.pan = null;
  state.boardCanvas = null;
  state.boardCtx = null;
  E.slots.innerHTML = '';
  E.placed.innerHTML = '';
  traySlots();
  E.previewImg.style.display = 'none';
  E.previewHint.style.display = 'grid';
  E.fileName.textContent = '-';
  E.fileDim.textContent = '-';
  E.time.textContent = '00:00.000';
  E.progress.textContent = '0 / 0';
  E.best.textContent = '-';
  E.modal.classList.add('hidden');
  setTransform(0, 0, 1);
}

function placePiece(p) {
  p.state = 'placed';
  p.slot = -1;
  appendPieceToBoard(p);
  state.placed += 1;
  runHooks('piecePlaced', { pieceId: p.id, placed: state.placed, total: state.pieces.length });
  updateHud();
  maybeComplete();
}

function returnToTray(p, slotIndex) {
  const target = slotIndex >= 0 ? slotIndex : state.tray.findIndex(Boolean);
  if (target < 0) {
    p.state = 'pool';
    state.pool.unshift(p.id);
    return;
  }
  const existing = state.tray[target];
  if (existing && existing !== p) {
    existing.state = 'pool';
    existing.slot = -1;
    state.pool.unshift(existing.id);
    if (existing.el.parentElement) existing.el.remove();
  }
  state.tray[target] = p;
  appendPieceToTray(p, target);
}

function onPiecePointerDown(ev) {
  const piece = state.map.get(ev.currentTarget.dataset.id);
  if (!piece || piece.state !== 'tray') return;
  ev.preventDefault();
  const rect = piece.el.getBoundingClientRect();
  const ox = ev.clientX - rect.left;
  const oy = ev.clientY - rect.top;
  const slot = piece.slot;
  const move = (e) => {
    piece.el.style.left = `${e.clientX - ox}px`;
    piece.el.style.top = `${e.clientY - oy}px`;
  };
  const up = (e) => {
    window.removeEventListener('pointermove', move);
    const bp = boardPoint(e.clientX, e.clientY);
    const inside = bp.x >= 0 && bp.y >= 0 && bp.x <= state.boardW && bp.y <= state.boardH;
    const tx = PAD + piece.c * CELL + CELL / 2;
    const ty = PAD + piece.r * CELL + CELL / 2;
    const ok = inside && Math.hypot(bp.x - tx, bp.y - ty) <= CELL * state.settings.snapDistance;
    if (ok) placePiece(piece); else returnToTray(piece, slot);
    state.tray[slot] = null;
    refillTraySlot(slot);
    updateHud();
    saveSnapshot();
  };
  state.drag = piece;
  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up, { once: true });
}

function maybeComplete() {
  if (state.placed !== state.pieces.length) return;
  state.running = false;
  state.completed = true;
  state.elapsed = currentMs();
  stopGifLoop();
  const k = keyForRecords();
  const prev = state.records[k]?.bestMs;
  state.records[k] = { bestMs: prev == null ? state.elapsed : Math.min(prev, state.elapsed), lastMs: state.elapsed, runs: (state.records[k]?.runs || 0) + 1, updatedAt: new Date().toISOString(), imageName: state.imageName, size: state.size, style: state.style };
  saveLS(LS.records, state.records);
  E.modal.classList.remove('hidden');
  E.finishText.textContent = prev == null || state.elapsed < prev ? `${t('completed', { time: fmt(state.elapsed) })} ${t('newRecord')}` : t('completed', { time: fmt(state.elapsed) });
  updateHud();
  saveSnapshot();
  runHooks('complete', { elapsed: state.elapsed, imageName: state.imageName });
}

async function loadImageFile(file) {
  try {
    const data = await fileToDataURL(file);
    const img = await loadHtmlImage(data);
    state.imageName = file.name;
    state.imageData = data;
    state.imageType = file.type === 'image/gif' || /\.gif$/i.test(file.name) ? 'gif' : 'image';
    state.sourceImg = img;
    state.imageHash = hashStr(data);
    state.imageW = img.naturalWidth;
    state.imageH = img.naturalHeight;
    E.previewImg.src = data;
    E.previewImg.style.display = 'block';
    E.previewHint.style.display = 'none';
    E.fileName.textContent = state.imageName;
    E.fileDim.textContent = `${state.imageW} × ${state.imageH}`;
    setStatus('saveHint');
    saveSnapshot();
    log(`Image loaded: ${state.imageName}`);
  } catch (err) {
    log(`Image load failed: ${err.message}`, 'error');
  }
}

function createPuzzle() {
  if (!state.sourceImg) { alert(t('loadImageFirst')); return; }
  stopGifLoop();
  state.style = E.style.value;
  state.size = clamp(+E.size.value || 4, 3, 12);
  state.seed = (Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0;
  state.imageHash = hashStr(state.imageData);
  buildPieces();
  state.placed = 0;
  state.completed = false;
  state.running = true;
  state.elapsed = 0;
  state.startAt = performance.now();
  setStatus('puzzleReady');
  fitView();
  updateHud();
  saveSnapshot();
  runHooks('puzzleCreated', { imageName: state.imageName, size: state.size, style: state.style });
  if (state.imageType === 'gif') startGifLoop();
}

function saveProject() {
  if (!state.imageData) { alert(t('loadImageFirst')); return; }
  const json = JSON.stringify(buildProject(), null, 2);
  const suggestedName = `${(state.imageName || 'puzzle').replace(/\.[^.]+$/, '').replace(/[^\w\-]+/g, '_').slice(0, 40) || 'puzzle'}_${state.size}x${state.size}_${state.style}.json`;
  if (isElectron && window.puzzleApi?.saveProject) {
    window.puzzleApi.saveProject(suggestedName, json).then((res) => { if (!res?.canceled) setStatus('saveSuccess'); }).catch((err) => log(`Save failed: ${err.message}`, 'error'));
    return;
  }
  downloadText(suggestedName, json);
  setStatus('saveSuccess');
}

async function loadProjectText(text) {
  try {
    const data = JSON.parse(text);
    await restoreProject(data);
    setStatus('loadSuccess');
  } catch (err) {
    log(`Project parse failed: ${err.message}`, 'error');
    if (!state.settings.repair) throw err;
    if (!confirm(t('repairPrompt'))) throw err;
    try {
      const repaired = repairProjectText(text);
      await restoreProject(repaired);
      setStatus('repairSuccess');
      log('Project repair succeeded');
    } catch (repairErr) {
      alert(t('repairFailed'));
      log(`Repair failed: ${repairErr.message}`, 'error');
      throw repairErr;
    }
  }
}

async function loadProject() {
  if (isElectron && window.puzzleApi?.loadProject) {
    const res = await window.puzzleApi.loadProject();
    if (res?.canceled || !res?.content) return;
    await loadProjectText(res.content);
    return;
  }
  E.projectInput.value = '';
  E.projectInput.click();
}

async function restoreProject(data) {
  if (!data || !data.imageData) throw new Error('Invalid project');
  resetGameState();
  state.lang = I18N[data.lang] ? data.lang : 'en';
  E.lang.value = state.lang;
  state.settings = { ...state.settings, ...(data.settings || {}) };
  state.settings.theme = state.themeMap.has(state.settings.theme) ? state.settings.theme : 'black';
  state.imageName = data.imageName || 'image';
  state.imageData = data.imageData;
  state.imageType = data.imageType || (/\.gif($|\?)/i.test(state.imageName) ? 'gif' : 'image');
  state.imageHash = data.imageHash || hashStr(data.imageData);
  state.imageW = +data.imageW || 0;
  state.imageH = +data.imageH || 0;
  state.style = data.style === 'square' ? 'square' : 'jigsaw';
  state.size = clamp(+data.size || 4, 3, 12);
  state.seed = +data.seed || ((Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0);
  E.style.value = state.style;
  E.size.value = String(state.size);
  applyTheme(state.settings.theme);
  updateStatusThemeControls();
  applyTexts();
  state.sourceImg = await loadHtmlImage(state.imageData);
  state.imageW = state.sourceImg.naturalWidth;
  state.imageH = state.sourceImg.naturalHeight;
  E.previewImg.src = state.imageData;
  E.previewImg.style.display = 'block';
  E.previewHint.style.display = 'none';
  E.fileName.textContent = state.imageName;
  E.fileDim.textContent = `${state.imageW} × ${state.imageH}`;
  buildPieces();
  const placed = new Set(data.placed || []);
  const tray = data.tray || [];
  const pool = data.pool || [];
  state.pool = pool.filter((id) => state.map.has(id));
  state.placed = 0;
  for (const p of state.pieces) {
    if (placed.has(p.id)) {
      p.state = 'placed';
      appendPieceToBoard(p);
      state.placed++;
    } else {
      p.state = 'pool';
    }
  }
  tray.forEach((id, i) => {
    if (id && state.map.has(id)) {
      const p = state.map.get(id);
      state.tray[i] = p;
      appendPieceToTray(p, i);
    }
  });
  refillTray();
  state.transform = data.transform || { x: 0, y: 0, s: 1 };
  setTransform(state.transform.x || 0, state.transform.y || 0, state.transform.s || 1);
  state.elapsed = +data.elapsed || 0;
  state.completed = !!data.completed;
  state.running = !!data.running && !state.completed;
  if (state.running) state.startAt = performance.now();
  updateHud();
  fitView();
  if (state.completed) {
    E.modal.classList.remove('hidden');
    E.finishText.textContent = t('completed', { time: fmt(state.elapsed) });
  }
  saveSnapshot();
  if (state.imageType === 'gif' && state.running) startGifLoop();
  log(`Project loaded: ${state.imageName}`);
  runHooks('boot', { restored: true });
}

function setupEventHandlers() {
  E.lang.addEventListener('change', () => { state.lang = E.lang.value; saveLS(LS.lang, state.lang); applyTexts(); updateHud(); });
  E.themeMode.addEventListener('change', () => { applyTheme(E.themeMode.value, true); refreshThemeOptions(); updateStatusThemeControls(); });
  E.settingsBtn.addEventListener('click', () => { E.settingsModal.classList.remove('hidden'); });
  E.debugBtn.addEventListener('click', () => { renderDebug(); E.debugPanel.classList.remove('hidden'); });
  E.refreshMods.addEventListener('click', () => loadMods().catch((err) => log(`Reload mods failed: ${err.message}`, 'error')));
  E.saveProject.addEventListener('click', saveProject);
  E.loadProject.addEventListener('click', loadProject);
  E.pickImage.addEventListener('click', () => E.imageInput.click());
  E.imageInput.addEventListener('change', async () => { const f = E.imageInput.files?.[0]; if (f) await loadImageFile(f); });
  E.projectInput.addEventListener('change', async () => { const f = E.projectInput.files?.[0]; if (!f) return; const text = await f.text(); await loadProjectText(text); });
  E.newGame.addEventListener('click', createPuzzle);
  E.resume.addEventListener('click', () => { const raw = localStorage.getItem(LS.last); if (raw) loadProjectText(raw); });
  E.clear.addEventListener('click', () => { resetGameState(); localStorage.removeItem(LS.last); setStatus('clearDone'); log('Game cleared'); });
  E.fit.addEventListener('click', fitView);
  E.reset.addEventListener('click', fitView);
  E.zoomOut.addEventListener('click', () => zoomBy(0.86));
  E.zoomIn.addEventListener('click', () => zoomBy(1.16));
  E.closeModal.addEventListener('click', () => E.modal.classList.add('hidden'));
  E.settingsSave.addEventListener('click', () => {
    state.settings.gifFps = clamp(+E.gifFps.value || 10, 2, 30);
    state.settings.snapDistance = clamp(+E.snapDistance.value || 0.65, 0.35, 1);
    state.settings.maxZoom = clamp(+E.maxZoom.value || 3.5, 1.5, 5);
    state.settings.debug = E.debugMode.value === 'on';
    state.settings.verbose = E.debugVerbose.value === 'on';
    state.settings.repair = E.repairMode.value === 'on';
    state.settings.theme = E.themeMode.value;
    storeSettings();
    applyTheme(state.settings.theme);
    refreshThemeOptions();
    updateStatusThemeControls();
    setStatus(state.settings.debug ? 'debugOn' : 'debugOff');
    E.settingsModal.classList.add('hidden');
    if (state.imageType === 'gif' && state.running) startGifLoop();
  });
  E.settingsCancel.addEventListener('click', () => E.settingsModal.classList.add('hidden'));
  E.closeDebug.addEventListener('click', () => E.debugPanel.classList.add('hidden'));
  E.copyLogs.addEventListener('click', async () => { await navigator.clipboard.writeText(state.logs.join('\n')); });
  E.clearLogs.addEventListener('click', () => { state.logs = []; saveLS(LS.logs, state.logs); renderDebug(); });
  E.debugMode.addEventListener('change', () => { state.settings.debug = E.debugMode.value === 'on'; storeSettings(); setStatus(state.settings.debug ? 'debugOn' : 'debugOff'); });
  E.debugVerbose.addEventListener('change', () => { state.settings.verbose = E.debugVerbose.value === 'on'; storeSettings(); });
  E.repairMode.addEventListener('change', () => { state.settings.repair = E.repairMode.value === 'on'; storeSettings(); });
  E.gifFps.addEventListener('input', () => { state.settings.gifFps = clamp(+E.gifFps.value || 10, 2, 30); storeSettings(); if (state.imageType === 'gif' && state.running) startGifLoop(); });
  E.snapDistance.addEventListener('input', () => { state.settings.snapDistance = clamp(+E.snapDistance.value || 0.65, 0.35, 1); storeSettings(); });
  E.maxZoom.addEventListener('input', () => { state.settings.maxZoom = clamp(+E.maxZoom.value || 3.5, 1.5, 5); storeSettings(); });
  E.viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.piece,.tray-piece,.drag-piece')) return;
    const start = { x: e.clientX, y: e.clientY, t: { ...state.transform } };
    const move = (v) => setTransform(start.t.x + (v.clientX - start.x), start.t.y + (v.clientY - start.y), start.t.s);
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up, { once: true });
  });
  E.viewport.addEventListener('wheel', (e) => { e.preventDefault(); zoomBy(e.deltaY < 0 ? 1.08 : 0.92, e.clientX, e.clientY); }, { passive: false });
  window.addEventListener('resize', () => { if (state.boardW) fitView(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { E.modal.classList.add('hidden'); E.settingsModal.classList.add('hidden'); E.debugPanel.classList.add('hidden'); } });
  document.addEventListener('visibilitychange', () => { if (state.imageType === 'gif' && state.running) startGifLoop(); });
  window.addEventListener('beforeunload', saveSnapshot);
}

function initLanguage() {
  state.lang = readLS(LS.lang, 'en');
  E.lang.value = state.lang;
  applyTexts();
}

function initSettings() {
  state.settings = { ...state.settings, ...(readLS(LS.settings, {})) };
  state.settings.theme = state.themeMap.has(state.settings.theme) ? state.settings.theme : 'black';
  E.gifFps.value = String(state.settings.gifFps);
  E.snapDistance.value = String(state.settings.snapDistance);
  E.maxZoom.value = String(state.settings.maxZoom);
  E.debugMode.value = state.settings.debug ? 'on' : 'off';
  E.debugVerbose.value = state.settings.verbose ? 'on' : 'off';
  E.repairMode.value = state.settings.repair ? 'on' : 'off';
  applyTheme(state.settings.theme);
  refreshThemeOptions();
  updateStatusThemeControls();
}

function renderDebug() {
  E.debugOutput.textContent = state.logs.slice(-250).join('\n');
}

async function initMods() {
  state.mods = [];
  state.modHooks = { boot: [], puzzleCreated: [], piecePlaced: [], complete: [] };
  renderMods();
  refreshThemeOptions();
  if (!isElectron || !window.puzzleApi?.listMods) {
    renderMods();
    return;
  }
  try {
    const mods = await window.puzzleApi.listMods();
    for (const mod of mods) {
      const entry = { ...mod, loaded: false, kind: mod.language === 'javascript' ? 'runtime' : 'source' };
      if ((mod.language === 'javascript' || mod.type === 'runtime') && mod.entry) {
        try {
          const code = await window.puzzleApi.readModFile(mod.entry);
          const api = createModApi(mod);
          const runner = new Function('api', 'game', 'console', code);
          runner(api, api.game, console);
          entry.loaded = true;
          entry.kind = 'runtime';
        } catch (err) {
          entry.error = err.message;
          log(`Mod load failed: ${mod.name} - ${err.message}`, 'error');
        }
      } else {
        entry.kind = 'source';
      }
      state.mods.push(entry);
    }
    refreshThemeOptions();
    renderMods();
    runHooks('boot', { mods: state.mods.slice() });
  } catch (err) {
    log(`Mod scan failed: ${err.message}`, 'error');
    renderMods();
  }
}

function renderMods() {
  E.modList.innerHTML = '';
  if (!isElectron) {
    const card = el('div', 'mod-card');
    card.innerHTML = `<div><strong>${t('mods')}</strong></div><div class="meta-line">Desktop mod loading is available in the Electron build.</div>`;
    E.modList.appendChild(card);
    return;
  }
  if (!state.mods.length) {
    const card = el('div', 'mod-card');
    card.innerHTML = `<div><strong>${t('mods')}</strong></div><div class="meta-line">No mod packs found.</div>`;
    E.modList.appendChild(card);
    return;
  }
  for (const mod of state.mods) {
    const card = el('div', 'mod-card');
    const statusText = mod.loaded ? 'Loaded' : (mod.kind === 'source' ? 'Source pack' : 'Disabled');
    card.innerHTML = `<div class="row" style="justify-content:space-between"><strong>${mod.name}</strong><span class="status-pill">${statusText}</span></div>
      <div class="meta-line">${mod.language || 'javascript'} · ${mod.source || 'bundled'}</div>
      <div class="meta-line">${mod.description || ''}</div>${mod.error ? `<div class="meta-line">${mod.error}</div>` : ''}`;
    E.modList.appendChild(card);
  }
}

async function restoreLastProject() {
  const raw = localStorage.getItem(LS.last);
  if (!raw) return;
  try { await loadProjectText(raw); }
  catch { /* ignored */ }
}

async function init() {
  initLanguage();
  initSettings();
  setupEventHandlers();
  traySlots();
  refreshThemeOptions();
  renderDebug();
  updateHud();
  fitView();
  await initMods();
  await restoreLastProject();
  setInterval(() => { if (state.running) { updateHud(); saveSnapshot(); if (state.imageType === 'gif') updateBoardFromSource(); } }, 250);
  setStatus('idleState');
}

init();
