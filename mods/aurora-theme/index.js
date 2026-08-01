api.register({
  theme: {
    id: 'aurora',
    label: 'Aurora',
    vars: {
      'bg-a': '#081a1f',
      'bg-b': '#08120f',
      'bg-c': '#05080a',
      panel: 'rgba(8, 28, 31, .92)',
      line: 'rgba(98, 255, 214, .12)',
      text: '#eafffb',
      muted: '#a7cbbb',
      accent: '#58f0c5',
      'accent-2': '#80f7ff',
      'primary-text': '#05110d',
      shadow: '0 16px 48px rgba(0,0,0,.42)'
    }
  },
  hooks: {
    onBoot(game) {
      game.log('Aurora theme mod loaded');
    },
    onPuzzleCreated(game) {
      game.log(`Created puzzle: ${game.imageName}`);
    },
    onComplete(game, payload) {
      game.log(`Completed in ${payload.elapsed} ms`);
    }
  }
});
