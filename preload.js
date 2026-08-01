const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('puzzleApi', {
  saveProject: (suggestedName, content) => ipcRenderer.invoke('puzzle:save-project', { suggestedName, content }),
  loadProject: () => ipcRenderer.invoke('puzzle:load-project'),
  listMods: () => ipcRenderer.invoke('puzzle:list-mods'),
  readModFile: (filePath) => ipcRenderer.invoke('puzzle:read-mod-file', { filePath }),
  getModRoots: () => ipcRenderer.invoke('puzzle:get-mod-roots')
});
