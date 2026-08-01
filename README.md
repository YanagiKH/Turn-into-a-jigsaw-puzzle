# Turn into a Jigsaw Puzzle

Electron desktop game that converts any image into a playable puzzle.

## Features

- Load any image and convert it into a puzzle
- Load and save project files
- Classic jigsaw pieces or square tiles
- Puzzle size from 3×3 to 12×12
- Right-side tray with five random pieces and automatic refill
- Board panning and zooming
- English / Traditional Chinese / Japanese UI
- Saved completion records and best times

## Run

```bash
npm install
npm start
```

## Project files

Use **Save Project** to export the current image, settings, elapsed time, tray order, and board progress into a `.json` puzzle file.

Use **Load Project** to continue from a previously saved file.

## Records

Records are stored locally in browser storage and keyed by image + size + style.
