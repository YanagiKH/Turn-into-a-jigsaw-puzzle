const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const fs = require('fs/promises');
const path = require('path');

const MOD_DIRS = {
  bundled: () => path.join(__dirname, 'mods'),
  user: () => path.join(app.getPath('userData'), 'mods')
};

function createWindow() {
  const win = new BrowserWindow({
    width: 1480,
    height: 940,
    minWidth: 1180,
    minHeight: 760,
    backgroundColor: '#12151c',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.removeMenu();
  win.loadFile('index.html');
}

async function ensureUserModDir() {
  await fs.mkdir(MOD_DIRS.user(), { recursive: true });
}

async function walkMods(rootDir, list = []) {
  let entries = [];
  try {
    entries = await fs.readdir(rootDir, { withFileTypes: true });
  } catch {
    return list;
  }

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      const manifestPath = path.join(fullPath, 'mod.json');
      try {
        const manifestRaw = await fs.readFile(manifestPath, 'utf8');
        const manifest = JSON.parse(manifestRaw);
        const id = manifest.id || path.basename(fullPath);
        const name = manifest.name || id;
        const language = manifest.language || 'javascript';
        const type = manifest.type || (language === 'javascript' ? 'runtime' : 'source');
        const entryFile = manifest.entry || (language === 'javascript' ? 'index.js' : null);
        list.push({
          id,
          name,
          description: manifest.description || '',
          language,
          type,
          entry: entryFile ? path.join(fullPath, entryFile) : null,
          manifestPath,
          rootPath: fullPath,
          source: rootDir === MOD_DIRS.user() ? 'user' : 'bundled'
        });
      } catch {
        await walkMods(fullPath, list);
      }
    }
  }

  return list;
}

function normalizeForRead(filePath) {
  const absolute = path.resolve(filePath);
  const allowedRoots = [MOD_DIRS.bundled(), MOD_DIRS.user()];
  if (allowedRoots.some((root) => absolute.startsWith(path.resolve(root)))) {
    return absolute;
  }
  throw new Error('Path is outside mod directories');
}

app.whenReady().then(async () => {
  await ensureUserModDir();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('puzzle:save-project', async (_event, { suggestedName, content }) => {
  const result = await dialog.showSaveDialog({
    title: 'Save Puzzle Project',
    defaultPath: suggestedName || 'puzzle-project.json',
    filters: [
      { name: 'Puzzle Project', extensions: ['json', 'jigsaw'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || !result.filePath) {
    return { canceled: true };
  }

  await fs.writeFile(result.filePath, content, 'utf8');
  return { canceled: false, filePath: result.filePath };
});

ipcMain.handle('puzzle:load-project', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Open Puzzle Project',
    properties: ['openFile'],
    filters: [
      { name: 'Puzzle Project', extensions: ['json', 'jigsaw'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return { canceled: true };
  }

  const filePath = result.filePaths[0];
  const content = await fs.readFile(filePath, 'utf8');
  return { canceled: false, filePath, content };
});

ipcMain.handle('puzzle:list-mods', async () => {
  await ensureUserModDir();
  const bundled = await walkMods(MOD_DIRS.bundled(), []);
  const user = await walkMods(MOD_DIRS.user(), []);
  const byId = new Map();
  for (const mod of [...bundled, ...user]) {
    byId.set(`${mod.id}:${mod.source}`, mod);
  }
  return [...byId.values()];
});

ipcMain.handle('puzzle:read-mod-file', async (_event, { filePath }) => {
  const absolute = normalizeForRead(filePath);
  return fs.readFile(absolute, 'utf8');
});

ipcMain.handle('puzzle:get-mod-roots', async () => {
  await ensureUserModDir();
  return { bundled: MOD_DIRS.bundled(), user: MOD_DIRS.user() };
});
