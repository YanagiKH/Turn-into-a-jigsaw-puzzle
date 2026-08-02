(() => {
  if (!window.AndroidBridge || window.puzzleApi) return;

  let sequence = 0;
  const pending = new Map();

  function request(method, ...args) {
    return new Promise((resolve, reject) => {
      const id = `android-${Date.now()}-${++sequence}`;
      pending.set(id, { resolve, reject });
      try {
        window.AndroidBridge[method](id, ...args);
      } catch (error) {
        pending.delete(id);
        reject(error);
      }
    });
  }

  window.__androidBridgeComplete = (id, serializedResult) => {
    const entry = pending.get(id);
    if (!entry) return;
    pending.delete(id);
    try {
      const result = JSON.parse(serializedResult);
      if (result.error) entry.reject(new Error(result.error));
      else entry.resolve(result);
    } catch (error) {
      entry.reject(error);
    }
  };

  async function readModIndex() {
    const response = await fetch('./mods/index.json', { cache: 'no-store' });
    if (!response.ok) return [];
    return response.json();
  }

  window.puzzleApi = {
    saveProject: (suggestedName, content) => request('saveProject', suggestedName, content),
    loadProject: () => request('loadProject'),
    listMods: readModIndex,
    readModFile: async (filePath) => {
      const response = await fetch(`./${String(filePath).replace(/^\.\//, '')}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Unable to read mod file: ${filePath}`);
      return response.text();
    },
    getModRoots: async () => ({ bundled: 'mods', user: null })
  };
})();
