export default function() {
  // the namespace property lets Mirage know to only provide data for url request that start with api
  this.namespace = '/api';

  let projects = [{
    type: 'projects',
    id: 'simon',
    attributes: {
      title: 'Simon',
      category: 'game',
      image: '/portfolio/assets/images/Simon.png',
      url: 'https://bitlogic-dev.github.io/FCC-Simon/',
      description: 'Memory game.'
    }
  },
  {
    type: 'projects',
    id: 'tic-tac-toe',
    attributes: {
      title: 'Tic Tac Toe',
      category: 'game',
      image: '/portfolio/assets/images/Tic-Tac-Toe.png',
      url: 'https://bitlogic-dev.github.io/FCC-Tic-Tac-Toe/',
      description: 'Play against the negamax algorithm.'
    }
  }];

  this.get('/projects', function() {
    return { data: projects };
  });
}
