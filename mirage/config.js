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
      description: 'Memory game.',
      skills: ['Javascript', 'HTML5', 'CSS3', 'jQuery']
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
      description: 'Play against the negamax algorithm.',
      skills: ['Javascript', 'HTML5', 'CSS3', 'jQuery']
    }
  },
  {
    type: 'projects',
    id: 'ember-portfolio',
    attributes: {
      title: 'Portfolio',
      category: 'app',
      image: '/portfolio/assets/images/ember-portfolio.png',
      url: '',
      description: 'A web application built with EmberJS.',
      skills: ['Ember.js', 'HTML5', 'CSS3', 'GitHub']
    }
  },
  {
    type: 'projects',
    id: 'absolute-zero',
    attributes: {
      title: 'Absolute Zero',
      category: 'game',
      image: '/portfolio/assets/images/absolute-zero.png',
      url: '',
      description: '2D platformer game built with Unity.',
      skills: ['C#', 'OO Design', 'Unity']
    }
  }];

  let skills = [{
    type: 'skills',
    id: '1',
    attributes: {
      name: 'Javascript',
      tags: ['frontend', 'language']
    }
  },
  {
    type: 'skills',
    id: '2',
    attributes: {
      name: 'C#',
      tags: ['backend', 'language']
    }
  },
  {
    type: 'skills',
    id: '3',
    attributes: {
      name: 'HTML5',
      tags: ['frontend', 'markup', 'web']
    }
  },
  {
    type: 'skills',
    id: '4',
    attributes: {
      name: 'CSS3',
      tags: ['frontend', 'style', 'web']
    }
  },
  {
    type: 'skills',
    id: '5',
    attributes: {
      name: 'Jade/Pug',
      tags: ['frontend', 'markup', 'web']
    }
  },
  {
    type: 'skills',
    id: '6',
    attributes: {
      name: 'AngularJS',
      tags: ['frontend', 'framework', 'web']
    }
  },
  {
    type: 'skills',
    id: '7',
    attributes: {
      name: 'jQuery',
      tags: ['frontend', 'framework', 'web']
    }
  },
  {
    type: 'skills',
    id: '8',
    attributes: {
      name: 'Ninject',
      tags: ['dependency injection', 'library']
    }
  },
  {
    type: 'skills',
    id: '9',
    attributes: {
      name: 'SASS',
      tags: ['frontend', 'style', 'web']
    }
  },
  {
    type: 'skills',
    id: '10',
    attributes: {
      name: 'Nunit',
      tags: ['qa', 'testing']
    }
  },
  {
    type: 'skills',
    id: '11',
    attributes: {
      name: 'RabbitMQ',
      tags: ['queue', 'messaging']
    }
  },
  {
    type: 'skills',
    id: '12',
    attributes: {
      name: 'Git',
      tags: ['source control', 'version control']
    }
  },
  {
    type: 'skills',
    id: '13',
    attributes: {
      name: 'GitHub',
      tags: ['source control', 'version control']
    }
  },
  {
    type: 'skills',
    id: '14',
    attributes: {
      name: 'Typescript',
      tags: ['frontend', 'language', 'web']
    }
  },
  {
    type: 'skills',
    id: '15',
    attributes: {
      name: 'ASP .NET',
      tags: ['backend', 'framework']
    }
  },
  {
    type: 'skills',
    id: '16',
    attributes: {
      name: 'JWT Auth',
      tags: ['security', 'encryption']
    }
  },
  {
    type: 'skills',
    id: '17',
    attributes: {
      name: 'OO Design',
      tags: ['object oriented', 'design pattern']
    }
  },
  {
    type: 'skills',
    id: '18',
    attributes: {
      name: 'ElasticSearch',
      tags: ['cache', 'search']
    }
  },
  {
    type: 'skills',
    id: '19',
    attributes: {
      name: 'Kafka',
      tags: ['messaging', 'queue']
    }
  },
  {
    type: 'skills',
    id: '20',
    attributes: {
      name: 'Bamboo',
      tags: ['deployment', 'build', 'pipeline']
    }
  },
  {
    type: 'skills',
    id: '21',
    attributes: {
      name: 'Ember.js',
      tags: ['frontend', 'framework', 'web']
    }
  },
  {
    type: 'skills',
    id: '22',
    attributes: {
      name: 'Unity',
      tags: ['game', 'engine', 'framework']
    }
  }];

  this.get('/projects', function() {
    return { data: projects };
  });

  this.get('/skills', function() {
    return { data: skills };
  });

  this.passthrough('/portfolio');
}
