const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('puzzleApi', {
  saveProject: (suggestedName, content) => ipcRenderer.invoke('puzzle:save-project', { suggestedName, content }),
  loadProject: () => ipcRenderer.invoke('puzzle:load-project')
});
