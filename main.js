const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const fs = require('fs/promises');
const path = require('path');

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

app.whenReady().then(() => {
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
