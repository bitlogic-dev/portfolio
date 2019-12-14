import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: 'Simon',
      category: 'game',
      image: '/portfolio/assets/images/simon.png',
      url: 'https://bitlogic-dev.github.io/FCC-Simon/',
      description: 'Memory game.'
    },
    {
      title: 'Tic Tac Toe',
      category: 'game',
      image: '/portfolio/assets/images/tic-tac-toe.png',
      url: 'https://bitlogic-dev.github.io/FCC-Tic-Tac-Toe/',
      description: 'Play against the negamax algorithm.'
    }];
  }
});
