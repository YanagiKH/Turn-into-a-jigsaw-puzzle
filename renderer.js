const $ = (id) => document.getElementById(id);
const E = {
  lang: $('lang'), settingsBtn: $('settingsBtn'), debugBtn: $('debugBtn'),
  saveProject: $('saveProject'), loadProject: $('loadProject'),
  pickImage: $('pickImage'), clear: $('clear'), imageInput: $('imageInput'), projectInput: $('projectInput'),
  previewImg: $('previewImg'), previewHint: $('previewHint'), fileName: $('fileName'), fileDim: $('fileDim'),
  style: $('style'), size: $('size'), newGame: $('newGame'), resume: $('resume'), fit: $('fit'), reset: $('reset'),
  zoomOut: $('zoomOut'), zoomIn: $('zoomIn'), time: $('time'), progress: $('progress'), best: $('best'), status: $('status'),
  viewport: $('viewport'), stage: $('stage'), slots: $('slots'), placed: $('placed'), tray: $('tray'), records: $('records'),
  modal: $('modal'), finishText: $('finishText'), closeModal: $('closeModal'), settingsModal: $('settingsModal'),
  settingsSave: $('settingsSave'), settingsCancel: $('settingsCancel'), gifFps: $('gifFps'), snapDistance: $('snapDistance'), maxZoom: $('maxZoom'),
  debugMode: $('debugMode'), debugVerbose: $('debugVerbose'), repairMode: $('repairMode'), debugPanel: $('debugPanel'),
  debugOutput: $('debugOutput'), copyLogs: $('copyLogs'), clearLogs: $('clearLogs'), closeDebug: $('closeDebug')
};

const I18N = {
  en:{appTitle:'Turn into a Jigsaw Puzzle',appSubtitle:'Load any image, split it, and play instantly.',language:'Language',advancedSettings:'Settings',debugLog:'Debug Log',saveProject:'Save Project',loadProject:'Load Project',source:'Source',loadImage:'Load Image',clear:'Clear',noImage:'No image loaded yet.',file:'File',dimensions:'Dimensions',setup:'Setup',style:'Puzzle style',styleJigsaw:'Classic jigsaw',styleSquare:'Square tiles',piecesPerSide:'Pieces per side',newGame:'Create Puzzle',resume:'Resume',status:'Status',timer:'Time',progress:'Progress',best:'Best',idleState:'Load an image to start.',boardHint:'Drag pieces from the right tray. Pan the board by dragging empty space. Zoom with buttons or mouse wheel.',fit:'Fit View',resetView:'Reset View',tray:'Piece tray',records:'Records',completeTitle:'Puzzle completed',continue:'Continue',completed:'Completed in {time}.',newRecord:'New record!',noRecord:'No record yet.',currentBest:'Current best: {time}',saveSuccess:'Project saved.',loadSuccess:'Project loaded.',loadImageFirst:'Load an image first.',puzzleReady:'Puzzle created. Start dragging pieces from the tray.',puzzleResumed:'Puzzle resumed.',clearDone:'Puzzle cleared.',saveHint:'Save a project file to continue later.',recordsForCurrent:'Best time for this puzzle',gifFps:'GIF refresh rate',snapDistance:'Snap distance',maxZoom:'Max zoom',debugMode:'Debug mode',debugVerbose:'Verbose logs',repairMode:'Repair project files',save:'Save',cancel:'Cancel',copy:'Copy',clearLogs:'Clear',close:'Close',repairPrompt:'The file could not be parsed. Try automatic repair?',repairFailed:'Repair failed.',repairSuccess:'Repair succeeded.',debugOn:'Debug mode enabled.',debugOff:'Debug mode disabled.'},
  zh:{appTitle:'圖片變拼圖',appSubtitle:'載入任意圖片，切成拼圖並直接遊玩。',language:'語言',advancedSettings:'設定',debugLog:'偵錯日誌',saveProject:'儲存拼圖檔',loadProject:'載入拼圖檔',source:'來源',loadImage:'載入圖片',clear:'清除',noImage:'尚未載入圖片。',file:'檔案',dimensions:'尺寸',setup:'設定',style:'拼圖樣式',styleJigsaw:'經典拼圖',styleSquare:'方塊拼圖',piecesPerSide:'每邊碎片數',newGame:'建立拼圖',resume:'繼續遊玩',status:'狀態',timer:'時間',progress:'進度',best:'最佳紀錄',idleState:'先載入圖片即可開始。',boardHint:'從右側拼圖槽拖曳碎片到棋盤。拖曳空白處可平移畫面，使用按鈕或滑鼠滾輪可縮放。',fit:'適合視窗',resetView:'重置視角',tray:'拼圖槽',records:'紀錄',completeTitle:'拼圖完成',continue:'繼續',completed:'完成時間：{time}。',newRecord:'新的紀錄！',noRecord:'尚無紀錄。',currentBest:'目前最佳：{time}',saveSuccess:'拼圖檔已儲存。',loadSuccess:'拼圖檔已載入。',loadImageFirst:'請先載入圖片。',puzzleReady:'拼圖已建立，從右側開始拖曳碎片。',puzzleResumed:'已繼續上次進度。',clearDone:'已清除目前拼圖。',saveHint:'可儲存拼圖檔以便之後繼續。',recordsForCurrent:'此拼圖的最佳時間',gifFps:'GIF 更新率',snapDistance:'吸附距離',maxZoom:'最大縮放',debugMode:'偵錯模式',debugVerbose:'詳細日誌',repairMode:'修復拼圖存檔',save:'儲存',cancel:'取消',copy:'複製',clearLogs:'清除',close:'關閉',repairPrompt:'檔案無法直接解析，是否嘗試自動修復？',repairFailed:'修復失敗。',repairSuccess:'修復成功。',debugOn:'已開啟偵錯模式。',debugOff:'已關閉偵錯模式。'},
  ja:{appTitle:'画像をジグソーパズルに変換',appSubtitle:'任意の画像を読み込み、分割してそのまま遊べます。',language:'言語',advancedSettings:'設定',debugLog:'デバッグログ',saveProject:'パズルを保存',loadProject:'パズルを読み込む',source:'画像',loadImage:'画像を読み込む',clear:'クリア',noImage:'まだ画像が読み込まれていません。',file:'ファイル',dimensions:'サイズ',setup:'設定',style:'パズルの種類',styleJigsaw:'通常のジグソー',styleSquare:'四角パズル',piecesPerSide:'1辺の分割数',newGame:'パズルを作成',resume:'続きから',status:'状態',timer:'時間',progress:'進捗',best:'ベスト',idleState:'画像を読み込むと開始できます。',boardHint:'右側のトレイからピースをドラッグします。空白部分をドラッグすると盤面を移動、ボタンやマウスホイールで拡大縮小できます。',fit:'全体表示',resetView:'表示を戻す',tray:'ピーストレイ',records:'記録',completeTitle:'完成しました',continue:'続ける',completed:'完成時間: {time}。',newRecord:'新記録です！',noRecord:'記録なし',currentBest:'現在の最短: {time}',saveSuccess:'保存しました。',loadSuccess:'読み込みました。',loadImageFirst:'先に画像を読み込んでください。',puzzleReady:'パズルを作成しました。右側のピースをドラッグしてください。',puzzleResumed:'前回の続きから再開しました。',clearDone:'現在のパズルをクリアしました。',saveHint:'あとで続けられるように保存できます。',recordsForCurrent:'このパズルの最短記録',gifFps:'GIF更新率',snapDistance:'吸着距離',maxZoom:'最大ズーム',debugMode:'デバッグモード',debugVerbose:'詳細ログ',repairMode:'パズル保存の修復',save:'保存',cancel:'キャンセル',copy:'コピー',clearLogs:'消去',close:'閉じる',repairPrompt:'ファイルを解析できません。自動修復を試しますか？',repairFailed:'修復に失敗しました。',repairSuccess:'修復に成功しました。',debugOn:'デバッグモードを有効にしました。',debugOff:'デバッグモードを無効にしました。'}
};

const LS = {lang:'tip-lang-v2',settings:'tip-settings-v2',last:'tip-last-v2',records:'tip-records-v2',logs:'tip-logs-v2'};
const IS_ELECTRON = !!(window.puzzleApi && window.puzzleApi.saveProject);
const CFG = {traySlots:5, pad:30, cell:108, minZoom:0.25};
const S = {
  lang:'en', settings:{gifFps:10,snapDistance:0.65,maxZoom:3.5,debug:false,verbose:false,repair:true},
  imageName:'', imageData:'', imageType:'image', imageHash:'', imageW:0, imageH:0, sourceImg:null, boardCanvas:null, boardCtx:null,
  frameCanvas:null, frameCtx:null, boardW:0, boardH:0, style:'jigsaw', size:4, seed:1, pieces:[], map:new Map(), pool:[], tray:new Array(CFG.traySlots).fill(null),
  placed:0, running:false, completed:false, elapsed:0, startAt:0, transform:{x:0,y:0,s:1}, drag:null, pan:null, records:{}, logs:[]
};

const t = (k,o={}) => (I18N[S.lang]||I18N.en)[k] ? (I18N[S.lang]||I18N.en)[k].replace(/\{(\w+)\}/g, (_,x)=>o[x] ?? '') : k;
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const fmt = (ms) => { ms = Math.max(0, Math.floor(ms)); const m = Math.floor(ms/60000), s = Math.floor((ms%60000)/1000), x = ms%1000; return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(x).padStart(3,'0')}`; };
const hashStr = (s) => { let h = 2166136261; for (let i=0;i<s.length;i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h>>>0).toString(16); };
const randFactory = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const shuffle = (arr, rnd) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const loadHtmlImage = (src) => new Promise((resolve, reject) => { const img = new Image(); img.decoding = 'async'; img.onload = () => resolve(img); img.onerror = reject; img.src = src; });
const fileToDataURL = (file) => new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = reject; r.readAsDataURL(file); });
const downloadText = (name, text) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], {type:'application/json'})); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
const saveLS = (key, value) => localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
const readLS = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
const el = (tag, cls='') => { const n = document.createElement(tag); if (cls) n.className = cls; return n; };

function log(message, level='info') {
  const line = `${new Date().toISOString()} [${level}] ${message}`;
  S.logs.push(line); if (S.logs.length > 400) S.logs.shift();
  if (S.settings.debug) saveLS(LS.logs, S.logs);
  if (S.settings.debug && S.settings.verbose) console[level === 'error' ? 'error' : 'log'](line);
  renderDebug();
}

function applyTexts() {
  document.querySelectorAll('[data-i18n]').forEach(node => { const key = node.dataset.i18n; node.textContent = t(key); });
  document.documentElement.lang = S.lang;
  E.style.querySelector('[value="jigsaw"]').textContent = t('styleJigsaw');
  E.style.querySelector('[value="square"]').textContent = t('styleSquare');
  E.debugMode.value = S.settings.debug ? 'on' : 'off';
  E.debugVerbose.value = S.settings.verbose ? 'on' : 'off';
  E.repairMode.value = S.settings.repair ? 'on' : 'off';
}

function initSettingsForm() {
  E.gifFps.value = String(S.settings.gifFps);
  E.snapDistance.value = String(S.settings.snapDistance);
  E.maxZoom.value = String(S.settings.maxZoom);
}

function saveSettings() {
  S.settings.gifFps = clamp(+E.gifFps.value || 10, 2, 30);
  S.settings.snapDistance = clamp(+E.snapDistance.value || 0.65, 0.35, 1);
  S.settings.maxZoom = clamp(+E.maxZoom.value || 3.5, 1.5, 5);
  S.settings.debug = E.debugMode.value === 'on';
  S.settings.verbose = E.debugVerbose.value === 'on';
  S.settings.repair = E.repairMode.value === 'on';
  saveLS(LS.settings, S.settings);
  if (S.settings.debug && !S.logs.length) S.logs = readLS(LS.logs, []);
  if (!S.settings.debug) saveLS(LS.logs, S.logs);
  setStatus(S.settings.debug ? 'debugOn' : 'debugOff');
  renderDebug();
}

function openSettings() { initSettingsForm(); E.settingsModal.classList.remove('hidden'); }
function closeSettings() { E.settingsModal.classList.add('hidden'); }
function openDebug() { renderDebug(); E.debugPanel.classList.remove('hidden'); }
function closeDebug() { E.debugPanel.classList.add('hidden'); }
function renderDebug() { E.debugOutput.textContent = S.logs.slice(-250).join('\n'); }

function setStatus(key, vars={}) { E.status.textContent = t(key, vars); }
function currentMs() { return S.running ? S.elapsed + (performance.now() - S.startAt) : S.elapsed; }
function keyForRecords() { return S.imageHash ? `${S.imageHash}:${S.size}:${S.style}` : ''; }
function updateHud() {
  E.time.textContent = fmt(currentMs());
  E.progress.textContent = `${S.placed} / ${S.pieces.length}`;
  const rec = S.records[keyForRecords()];
  E.best.textContent = rec?.bestMs != null ? fmt(rec.bestMs) : t('noRecord');
  updateRecords();
}

function setTransform(x, y, s) { S.transform = {x, y, s}; E.stage.style.transform = `translate(${x}px,${y}px) scale(${s})`; }
function boardPoint(cx, cy) { const r = E.viewport.getBoundingClientRect(); return { x:(cx - r.left - S.transform.x) / S.transform.s, y:(cy - r.top - S.transform.y) / S.transform.s }; }
function fitView() { if (!S.boardW) return; const r = E.viewport.getBoundingClientRect(); const s = clamp(Math.min((r.width - 40) / S.boardW, (r.height - 40) / S.boardH), 0.35, S.settings.maxZoom); setTransform((r.width - S.boardW * s) / 2, (r.height - S.boardH * s) / 2, s); }
function zoomBy(factor, cx = null, cy = null) { if (!S.boardW) return; const r = E.viewport.getBoundingClientRect(); const s = clamp(S.transform.s * factor, CFG.minZoom, S.settings.maxZoom); const ax = cx == null ? r.width/2 : cx - r.left; const ay = cy == null ? r.height/2 : cy - r.top; const wx = (ax - S.transform.x) / S.transform.s; const wy = (ay - S.transform.y) / S.transform.s; setTransform(ax - wx * s, ay - wy * s, s); }

function clearBoard() {
  E.slots.innerHTML = '';
  E.placed.innerHTML = '';
  E.tray.innerHTML = '';
  S.tray = new Array(CFG.traySlots).fill(null);
  for (let i = 0; i < CFG.traySlots; i++) {
    const slot = el('div', 'tray-slot'); slot.dataset.i = i;
    const idx = el('div', 'index'); idx.textContent = String(i + 1);
    slot.appendChild(idx); E.tray.appendChild(slot);
  }
}

function drawGrid() {
  E.slots.innerHTML = '';
  for (let r = 0; r < S.size; r++) {
    for (let c = 0; c < S.size; c++) {
      const d = el('div', 'slot'); d.dataset.r = r; d.dataset.c = c;
      d.style.left = `${CFG.pad + c * CFG.cell}px`;
      d.style.top = `${CFG.pad + r * CFG.cell}px`;
      d.style.width = `${CFG.cell}px`; d.style.height = `${CFG.cell}px`;
      E.slots.appendChild(d);
    }
  }
}

function edgeGrid(n, rnd) {
  const g = Array.from({length:n}, () => Array.from({length:n}, () => ({t:0,r:0,b:0,l:0})));
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (c < n - 1) { const v = rnd() < 0.5 ? 1 : -1; g[r][c].r = v; g[r][c+1].l = -v; }
    if (r < n - 1) { const v = rnd() < 0.5 ? 1 : -1; g[r][c].b = v; g[r+1][c].t = -v; }
  }
  return g;
}

function drawPath(ctx, p) {
  const {w,h,t,e} = p, L = t, T0 = t, R = w - t, B = h - t, qx = (R - L) / 4, qy = (B - T0) / 4, midX = (L + R) / 2, midY = (T0 + B) / 2;
  ctx.beginPath(); ctx.moveTo(L, T0);
  if (e.t) { ctx.lineTo(L + qx, T0); ctx.quadraticCurveTo(midX, T0 - t * e.t, R - qx, T0); ctx.lineTo(R, T0); } else ctx.lineTo(R, T0);
  if (e.r) { ctx.lineTo(R, T0 + qy); ctx.quadraticCurveTo(R + t * e.r, midY, R, B - qy); ctx.lineTo(R, B); } else ctx.lineTo(R, B);
  if (e.b) { ctx.lineTo(R - qx, B); ctx.quadraticCurveTo(midX, B + t * e.b, L + qx, B); ctx.lineTo(L, B); } else ctx.lineTo(L, B);
  if (e.l) { ctx.lineTo(L, B - qy); ctx.quadraticCurveTo(L - t * e.l, midY, L, T0 + qy); ctx.lineTo(L, T0); } else ctx.lineTo(L, T0);
  ctx.closePath();
}

function paintPiece(p, sourceCanvas) {
  const ctx = p.canvas.getContext('2d');
  ctx.clearRect(0, 0, p.w, p.h);
  ctx.save();
  if (S.style === 'jigsaw') { drawPath(ctx, p); ctx.clip(); }
  ctx.drawImage(sourceCanvas, -p.drawX, -p.drawY);
  ctx.restore();
  if (S.style === 'jigsaw') { ctx.save(); drawPath(ctx, p); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.stroke(); ctx.restore(); }
}

function createPieceNode(p) {
  const wrap = el('div', 'piece');
  const canvas = document.createElement('canvas'); canvas.width = p.w; canvas.height = p.h;
  wrap.appendChild(canvas); p.canvas = canvas; p.el = wrap; p.el.dataset.id = p.id;
  wrap.addEventListener('pointerdown', onPiecePointerDown);
  return wrap;
}

function appendPieceToTray(p, slotIndex) {
  const slot = E.tray.querySelector(`.tray-slot[data-i="${slotIndex}"]`);
  if (!slot) return;
  slot.querySelectorAll('.piece,.tray-piece,.drag-piece').forEach(n => n.remove());
  p.state = 'tray'; p.slot = slotIndex;
  const wrap = p.el; wrap.className = 'tray-piece';
  wrap.style.position = 'absolute';
  wrap.style.left = '0'; wrap.style.top = '28px';
  wrap.style.width = `${Math.min(100, p.w)}px`; wrap.style.height = `${Math.min(100, p.h)}px`;
  wrap.style.cursor = 'grab';
  slot.appendChild(wrap);
}

function appendPieceToBoard(p) {
  const wrap = p.el; wrap.className = 'piece';
  wrap.style.position = 'absolute';
  wrap.style.left = `${p.drawX}px`; wrap.style.top = `${p.drawY}px`;
  wrap.style.width = `${p.w}px`; wrap.style.height = `${p.h}px`;
  wrap.style.cursor = 'default';
  E.placed.appendChild(wrap);
  const slot = E.slots.querySelector(`.slot[data-r="${p.r}"][data-c="${p.c}"]`); if (slot) slot.classList.add('done');
}

function fillTraySlot(i) {
  if (S.tray[i]) return;
  const id = S.pool.shift(); if (!id) return;
  const p = S.map.get(id); if (!p) return;
  S.tray[i] = p; appendPieceToTray(p, i);
}

function refillTray() { for (let i = 0; i < CFG.traySlots; i++) fillTraySlot(i); }

function redrawBoardFrame() {
  if (!S.sourceImg || !S.boardCanvas) return;
  S.boardCtx.clearRect(0, 0, S.boardW, S.boardH);
  S.boardCtx.drawImage(S.sourceImg, 0, 0, S.boardW, S.boardH);
}

function redrawActivePieces() {
  const source = S.boardCanvas;
  if (!source) return;
  for (const p of S.pieces) {
    if (p.state !== 'pool') paintPiece(p, source);
  }
}

function startGifLoop() {
  stopGifLoop();
  if (!S.sourceImg || S.imageType !== 'gif') return;
  const fps = clamp(+S.settings.gifFps || 10, 2, 30);
  const tick = () => {
    if (!S.running && !S.completed && document.visibilityState === 'hidden') return;
    redrawBoardFrame(); redrawActivePieces();
  };
  tick();
  gifTimer = setInterval(tick, Math.max(33, Math.round(1000 / fps)));
}

function stopGifLoop() { if (gifTimer) { clearInterval(gifTimer); gifTimer = null; } }

function createPuzzle() {
  if (!S.sourceImg) { alert(t('loadImageFirst')); return; }
  stopGifLoop();
  S.style = E.style.value; S.size = clamp(+E.size.value || 4, 3, 12); S.seed = (Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0;
  S.imageHash = hashStr(S.imageData);
  S.boardW = S.size * CFG.cell + CFG.pad * 2; S.boardH = S.size * CFG.cell + CFG.pad * 2;
  S.boardCanvas = document.createElement('canvas'); S.boardCanvas.width = S.boardW; S.boardCanvas.height = S.boardH; S.boardCtx = S.boardCanvas.getContext('2d');
  S.frameCanvas = S.boardCanvas; S.frameCtx = S.boardCtx;
  drawGrid(); clearBoard(); S.pieces = []; S.map = new Map(); S.pool = [];
  const rnd = randFactory(S.seed); const edges = edgeGrid(S.size, rnd); const base = S.style === 'square' ? 0 : Math.max(12, Math.round(CFG.cell * 0.22));
  redrawBoardFrame();
  for (let r = 0; r < S.size; r++) for (let c = 0; c < S.size; c++) {
    const t = base;
    const p = { id:`${r}-${c}`, r, c, t, e:edges[r][c], drawX: CFG.pad + c * CFG.cell - t, drawY: CFG.pad + r * CFG.cell - t, w: CFG.cell + t * 2, h: CFG.cell + t * 2, state:'pool', slot:-1, canvas:null, el:null };
    createPieceNode(p); paintPiece(p, S.boardCanvas); S.pieces.push(p); S.map.set(p.id, p);
  }
  S.pool = shuffle(S.pieces.map(p => p.id), rnd);
  E.stage.style.width = `${S.boardW}px`; E.stage.style.height = `${S.boardH}px`;
  clearBoard(); refillTray(); S.placed = 0; S.completed = false; S.running = true; S.elapsed = 0; S.startAt = performance.now();
  setStatus('puzzleReady'); fitView(); updateHud(); saveSnapshot(); if (S.imageType === 'gif') startGifLoop();
  log(`Puzzle created: ${S.imageName} ${S.style} ${S.size}x${S.size}`);
}

function placePiece(p) {
  p.state = 'placed'; p.slot = -1; appendPieceToBoard(p); S.placed += 1; updateHud(); maybeComplete(); }
function returnToTray(p, slotIndex) {
  const target = slotIndex >= 0 ? slotIndex : S.tray.findIndex(Boolean);
  if (target < 0) { p.state = 'pool'; S.pool.unshift(p.id); return; }
  const existing = S.tray[target];
  if (existing && existing !== p) { existing.state = 'pool'; existing.slot = -1; S.pool.unshift(existing.id); if (existing.el.parentElement) existing.el.remove(); }
  S.tray[target] = p; appendPieceToTray(p, target);
}

function onPiecePointerDown(ev) {
  const piece = [...S.map.values()].find(x => x.el === ev.currentTarget);
  const active = piece && piece.state === 'tray' ? piece : null;
  if (!active) return;
  ev.preventDefault();
  const rect = active.el.getBoundingClientRect(); const ox = ev.clientX - rect.left; const oy = ev.clientY - rect.top; const slot = active.slot;
  const move = (e) => { active.el.style.left = `${e.clientX - ox}px`; active.el.style.top = `${e.clientY - oy}px`; };
  const up = (e) => { window.removeEventListener('pointermove', move); if (S.drag === active) S.drag = null; const bp = boardPoint(e.clientX, e.clientY); const inside = bp.x >= 0 && bp.y >= 0 && bp.x <= S.boardW && bp.y <= S.boardH; const tx = CFG.pad + active.c * CFG.cell + CFG.cell / 2; const ty = CFG.pad + active.r * CFG.cell + CFG.cell / 2; const ok = inside && Math.hypot(bp.x - tx, bp.y - ty) <= CFG.cell * S.settings.snapDistance; if (ok) placePiece(active); else returnToTray(active, slot); S.tray[slot] = null; fillTraySlot(slot); updateHud(); saveSnapshot(); log(`Move piece ${active.id} -> ${ok ? 'board' : 'tray'}`); };
  S.drag = active; window.addEventListener('pointermove', move); window.addEventListener('pointerup', up, {once:true});
}

function maybeComplete() {
  if (S.placed !== S.pieces.length) return;
  S.running = false; S.completed = true; S.elapsed = currentMs(); stopGifLoop();
  const k = keyForRecords(); const prev = S.records[k]?.bestMs;
  S.records[k] = { bestMs: prev == null ? S.elapsed : Math.min(prev, S.elapsed), lastMs: S.elapsed, runs: (S.records[k]?.runs || 0) + 1, updatedAt: new Date().toISOString(), imageName: S.imageName, size: S.size, style: S.style };
  saveLS(LS.records, S.records); E.modal.classList.remove('hidden'); E.finishText.textContent = prev == null || S.elapsed < prev ? `${t('completed',{time:fmt(S.elapsed)})} ${t('newRecord')}` : t('completed',{time:fmt(S.elapsed)}); updateHud(); saveSnapshot(); log(`Completed in ${fmt(S.elapsed)}`);
}

function updateRecords() {
  const k = keyForRecords(); const rec = S.records[k];
  E.records.innerHTML = '';
  const card = el('div', 'record');
  card.innerHTML = `<div><strong>${t('recordsForCurrent')}</strong></div><div>${t('file')}: <strong>${S.imageName || '-'}</strong></div><div>${t('style')}: <strong>${S.style === 'jigsaw' ? t('styleJigsaw') : t('styleSquare')}</strong></div><div>${t('piecesPerSide')}: <strong>${S.size} × ${S.size}</strong></div><div>${t('best')}: <strong>${rec ? fmt(rec.bestMs) : t('noRecord')}</strong></div>`;
  E.records.appendChild(card);
}

function buildProject() {
  return {version:2,lang:S.lang,settings:S.settings,imageName:S.imageName,imageData:S.imageData,imageType:S.imageType,imageHash:S.imageHash,imageW:S.imageW,imageH:S.imageH,style:S.style,size:S.size,seed:S.seed,elapsed:currentMs(),running:S.running,completed:S.completed,transform:S.transform,tray:S.tray.map(p=>p&&p.id),placed:S.pieces.filter(p=>p.state==='placed').map(p=>p.id),pool:S.pool.slice()};
}

function saveSnapshot() { if (!S.imageData) return; saveLS(LS.last, buildProject()); }

function repairProjectText(raw) {
  let txt = String(raw || '').replace(/^\uFEFF/, '').trim();
  const first = txt.indexOf('{'), last = txt.lastIndexOf('}');
  if (first >= 0 && last > first) txt = txt.slice(first, last + 1);
  txt = txt.replace(/,\s*([}\]])/g, '$1');
  return JSON.parse(txt);
}

async function restoreProject(obj) {
  if (!obj || !obj.imageData) throw new Error('Invalid project');
  resetAll();
  S.lang = I18N[obj.lang] ? obj.lang : 'en'; E.lang.value = S.lang; applyTexts();
  S.settings = {...S.settings, ...(obj.settings || {})}; saveLS(LS.settings, S.settings); initSettingsForm();
  S.imageName = obj.imageName || 'image'; S.imageData = obj.imageData; S.imageType = obj.imageType || (/\.gif($|\?)/i.test(S.imageName) ? 'gif' : 'image'); S.imageHash = obj.imageHash || hashStr(obj.imageData); S.imageW = +obj.imageW || 0; S.imageH = +obj.imageH || 0; S.style = obj.style === 'square' ? 'square' : 'jigsaw'; S.size = clamp(+obj.size || 4, 3, 12); S.seed = +obj.seed || ((Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0);
  E.style.value = S.style; E.size.value = String(S.size);
  S.sourceImg = await loadHtmlImage(S.imageData); E.previewImg.src = S.imageData; E.previewImg.style.display = 'block'; E.previewHint.style.display = 'none'; E.fileName.textContent = S.imageName; E.fileDim.textContent = `${S.sourceImg.naturalWidth} × ${S.sourceImg.naturalHeight}`;
  S.imageW = S.sourceImg.naturalWidth; S.imageH = S.sourceImg.naturalHeight;
  S.boardW = S.size * CFG.cell + CFG.pad * 2; S.boardH = S.size * CFG.cell + CFG.pad * 2;
  S.boardCanvas = document.createElement('canvas'); S.boardCanvas.width = S.boardW; S.boardCanvas.height = S.boardH; S.boardCtx = S.boardCanvas.getContext('2d');
  drawGrid(); clearBoard(); S.pieces = []; S.map = new Map(); S.pool = [];
  const rnd = randFactory(S.seed); const edges = edgeGrid(S.size, rnd); const base = S.style === 'square' ? 0 : Math.max(12, Math.round(CFG.cell * 0.22));
  redrawBoardFrame();
  for (let r = 0; r < S.size; r++) for (let c = 0; c < S.size; c++) {
    const t = base;
    const p = { id:`${r}-${c}`, r, c, t, e:edges[r][c], drawX: CFG.pad + c * CFG.cell - t, drawY: CFG.pad + r * CFG.cell - t, w: CFG.cell + t * 2, h: CFG.cell + t * 2, state:'pool', slot:-1, canvas:null, el:null };
    createPieceNode(p); paintPiece(p, S.boardCanvas); S.pieces.push(p); S.map.set(p.id, p);
  }
  S.pool = shuffle(S.pieces.map(p => p.id), rnd);
  E.stage.style.width = `${S.boardW}px`; E.stage.style.height = `${S.boardH}px`;
  const placed = new Set(obj.placed || []), tray = obj.tray || [], pool = obj.pool || [];
  S.pool = pool.filter(id => S.map.has(id));
  S.placed = 0;
  for (const p of S.pieces) { if (placed.has(p.id)) { p.state = 'placed'; appendPieceToBoard(p); S.placed++; } else { p.state = 'pool'; } }
  tray.forEach((id, i) => { if (id && S.map.has(id)) { const p = S.map.get(id); S.tray[i] = p; appendPieceToTray(p, i); } });
  refillTray(); S.transform = obj.transform || {x:0,y:0,s:1}; setTransform(S.transform.x || 0, S.transform.y || 0, S.transform.s || 1);
  S.elapsed = +obj.elapsed || 0; S.completed = !!obj.completed; S.running = !!obj.running && !S.completed; if (S.running) S.startAt = performance.now();
  updateHud(); fitView(); if (S.completed) { E.modal.classList.remove('hidden'); E.finishText.textContent = t('completed', {time:fmt(S.elapsed)}); }
  saveSnapshot(); if (S.imageType === 'gif' && S.running) startGifLoop();
  log(`Project loaded: ${S.imageName}`);
}

function resetAll() {
  stopGifLoop();
  S.pieces = []; S.map = new Map(); S.pool = []; S.tray = new Array(CFG.traySlots).fill(null); S.placed = 0; S.running = false; S.completed = false; S.elapsed = 0; S.startAt = 0; S.drag = null; S.pan = null;
  S.boardCanvas = null; S.boardCtx = null; S.frameCanvas = null; S.frameCtx = null;
  E.slots.innerHTML = ''; E.placed.innerHTML = ''; E.tray.innerHTML = ''; E.previewImg.style.display = 'none'; E.previewHint.style.display = 'grid'; E.fileName.textContent = '-'; E.fileDim.textContent = '-'; E.time.textContent = '00:00.000'; E.progress.textContent = '0 / 0'; E.best.textContent = '-'; E.modal.classList.add('hidden'); setTransform(0,0,1);
}

async function loadImageFile(file) {
  try {
    const data = await fileToDataURL(file); const img = await loadHtmlImage(data);
    S.imageName = file.name; S.imageData = data; S.imageType = file.type === 'image/gif' || /\.gif$/i.test(file.name) ? 'gif' : 'image'; S.sourceImg = img; S.imageHash = hashStr(data);
    S.imageW = img.naturalWidth; S.imageH = img.naturalHeight;
    E.previewImg.src = data; E.previewImg.style.display = 'block'; E.previewHint.style.display = 'none'; E.fileName.textContent = S.imageName; E.fileDim.textContent = `${S.imageW} × ${S.imageH}`;
    setStatus('saveHint'); saveSnapshot(); log(`Image loaded: ${S.imageName}`);
  } catch (err) { console.error(err); log(`Image load failed: ${err.message}`, 'error'); }
}

async function doSaveProject() {
  if (!S.imageData) { alert(t('loadImageFirst')); return; }
  const json = JSON.stringify(buildProject(), null, 2);
  if (IS_ELECTRON) { await window.puzzleApi.saveProject(`${(S.imageName || 'puzzle').replace(/\.[^.]+$/,'').replace(/[^\w\-]+/g,'_').slice(0,40) || 'puzzle'}_${S.size}x${S.size}_${S.style}.json`, json); setStatus('saveSuccess'); }
  else { downloadText(`${(S.imageName || 'puzzle').replace(/\.[^.]+$/,'').replace(/[^\w\-]+/g,'_').slice(0,40) || 'puzzle'}_${S.size}x${S.size}_${S.style}.json`, json); setStatus('saveSuccess'); }
}

async function doLoadProjectFromText(text) {
  try { return await restoreProject(JSON.parse(text)); }
  catch (err) {
    log(`Project parse failed: ${err.message}`, 'error');
    if (!S.settings.repair) throw err;
    if (!confirm(t('repairPrompt'))) throw err;
    try { const repaired = repairProjectText(text); await restoreProject(repaired); setStatus('repairSuccess'); log('Project repair succeeded'); }
    catch (e) { alert(t('repairFailed')); log(`Repair failed: ${e.message}`, 'error'); throw e; }
  }
}

async function doLoadProject() {
  if (IS_ELECTRON) {
    const res = await window.puzzleApi.loadProject(); if (res?.canceled || !res?.content) return; await doLoadProjectFromText(res.content); setStatus('loadSuccess'); return;
  }
  E.projectInput.value = ''; E.projectInput.click();
}

function downloadLog() { downloadText('jigsaw-debug-log.txt', S.logs.join('\n')); }

function bindEvents() {
  E.lang.addEventListener('change', () => { S.lang = E.lang.value; saveLS(LS.lang, S.lang); applyTexts(); updateHud(); });
  E.settingsBtn.addEventListener('click', openSettings);
  E.debugBtn.addEventListener('click', openDebug);
  E.saveProject.addEventListener('click', doSaveProject);
  E.loadProject.addEventListener('click', doLoadProject);
  E.pickImage.addEventListener('click', () => E.imageInput.click());
  E.imageInput.addEventListener('change', async () => { const f = E.imageInput.files?.[0]; if (f) await loadImageFile(f); });
  E.projectInput.addEventListener('change', async () => { const f = E.projectInput.files?.[0]; if (!f) return; const text = await f.text(); await doLoadProjectFromText(text); setStatus('loadSuccess'); });
  E.newGame.addEventListener('click', createPuzzle);
  E.resume.addEventListener('click', () => { const raw = localStorage.getItem(LS.last); if (raw) doLoadProjectFromText(raw); });
  E.clear.addEventListener('click', () => { resetAll(); localStorage.removeItem(LS.last); setStatus('clearDone'); log('Game cleared'); });
  E.fit.addEventListener('click', fitView); E.reset.addEventListener('click', fitView); E.zoomOut.addEventListener('click', () => zoomBy(0.86)); E.zoomIn.addEventListener('click', () => zoomBy(1.16));
  E.closeModal.addEventListener('click', () => E.modal.classList.add('hidden'));
  E.settingsSave.addEventListener('click', () => { saveSettings(); closeSettings(); if (S.imageType === 'gif' && S.running) startGifLoop(); });
  E.settingsCancel.addEventListener('click', closeSettings);
  E.closeDebug.addEventListener('click', closeDebug);
  E.copyLogs.addEventListener('click', async () => { await navigator.clipboard.writeText(S.logs.join('\n')); });
  E.clearLogs.addEventListener('click', () => { S.logs = []; saveLS(LS.logs, S.logs); renderDebug(); });
  E.debugMode.addEventListener('change', saveSettings); E.debugVerbose.addEventListener('change', saveSettings); E.repairMode.addEventListener('change', saveSettings);
  E.snapDistance.addEventListener('input', () => saveSettings()); E.maxZoom.addEventListener('input', () => saveSettings()); E.gifFps.addEventListener('input', () => saveSettings());
  E.viewport.addEventListener('pointerdown', (e) => { if (e.target.closest('.piece,.tray-piece,.drag-piece')) return; const start = {x:e.clientX, y:e.clientY, t:{...S.transform}}; const move = (v) => setTransform(start.t.x + (v.clientX - start.x), start.t.y + (v.clientY - start.y), start.t.s); const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); }; window.addEventListener('pointermove', move); window.addEventListener('pointerup', up, {once:true}); });
  E.viewport.addEventListener('wheel', (e) => { e.preventDefault(); zoomBy(e.deltaY < 0 ? 1.08 : 0.92, e.clientX, e.clientY); }, {passive:false});
  window.addEventListener('resize', () => { if (S.boardW) fitView(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { E.modal.classList.add('hidden'); closeSettings(); closeDebug(); } });
  document.addEventListener('visibilitychange', () => { if (S.imageType === 'gif' && S.running) startGifLoop(); });
}

function init() {
  S.lang = readLS(LS.lang, 'en'); S.settings = {...S.settings, ...(readLS(LS.settings, {}))}; S.records = readLS(LS.records, {}); S.logs = readLS(LS.logs, []);
  E.lang.value = S.lang; applyTexts(); initSettingsForm(); bindEvents(); renderDebug(); updateHud(); fitView();
  const last = localStorage.getItem(LS.last); if (last) { try { doLoadProjectFromText(last); } catch {} }
  setStatus('idleState');
}

init();
