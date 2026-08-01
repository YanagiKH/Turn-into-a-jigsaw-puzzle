# Turn into a Jigsaw Puzzle

Image-to-jigsaw puzzle game for desktop, web, and Android browsers.

## What is included

- Double-click launcher for desktop use
- Electron packaging config for a one-click installer
- PWA manifest and service worker for installable web / Android use
- Responsive mobile-first layout
- English / Traditional Chinese / Japanese UI
- Image loading, project save/load, tray refill, zoom, pan, timer, and best records

## Run locally

```bash
npm install
npm start
```

## Web preview

```bash
npm run web
```

Then open the address shown in the terminal.

## Desktop build

```bash
npm run dist
```

That produces an installer in `dist/`.

## Android / web deployment

The app is now a PWA. Host the repository files on any static web host, open the site on Android, and use the browser install option to add it to the home screen.

## Project files

Use **Save Project** to export the current image, settings, elapsed time, tray order, and board progress into a `.json` puzzle file.

Use **Load Project** to continue from a previously saved file.

## Records

Records are stored locally in browser storage and keyed by image + size + style.
