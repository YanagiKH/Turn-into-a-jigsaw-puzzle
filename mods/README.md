# Mods

Place custom extensions in this folder.

## Runtime mods

JavaScript mods are loaded automatically in the Electron desktop build.
Create a folder with a `mod.json` manifest and an entry script such as `index.js`.

Example:

```json
{
  "id": "my-mod",
  "name": "My Mod",
  "language": "javascript",
  "type": "runtime",
  "entry": "index.js",
  "description": "Example runtime extension"
}
```

Your script can call the API passed into it:

```js
api.register({
  theme: {
    id: 'my-theme',
    label: 'My Theme',
    vars: { 'bg-a': '#111', 'bg-b': '#222', 'bg-c': '#000', panel: 'rgba(0,0,0,.7)', line: 'rgba(255,255,255,.08)', text: '#fff', muted: '#bbb', accent: '#6ea8ff', 'accent-2': '#8bd3ff', 'primary-text': '#09111c', shadow: '0 16px 48px rgba(0,0,0,.35)' }
  }
});
```

## Source packs

Java and Kotlin packs are recognized as source packs. Their files are listed in the mod panel so you can keep language-specific extension source together in the `mods/` tree.

The app does not compile Java/Kotlin source inside the browser renderer. Keep those packs as manifests and source files in the mod directory for external toolchains or future extension builds.
