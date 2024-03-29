export default function() {
  // the namespace property lets Mirage know to only provide data for url request that start with api
  this.namespace = '/api';

  let skills = [
  {
    type: 'skill',
    id: '1',
    attributes: {
      name: 'Javascript',
      tags: ['frontend', 'language']
    }
  },
  {
    type: 'skill',
    id: '2',
    attributes: {
      name: 'C#',
      tags: ['backend', 'language']
    }
  },
  {
    type: 'skill',
    id: '3',
    attributes: {
      name: 'HTML5',
      tags: ['frontend', 'markup', 'web']
    }
  },
  {
    type: 'skill',
    id: '4',
    attributes: {
      name: 'CSS3',
      tags: ['frontend', 'style', 'web']
    }
  },
  {
    type: 'skill',
    id: '5',
    attributes: {
      name: 'Jade/Pug',
      tags: ['frontend', 'markup', 'web']
    }
  },
  {
    type: 'skill',
    id: '6',
    attributes: {
      name: 'AngularJS',
      tags: ['frontend', 'framework', 'web']
    }
  },
  {
    type: 'skill',
    id: '7',
    attributes: {
      name: 'jQuery',
      tags: ['frontend', 'framework', 'web']
    }
  },
  {
    type: 'skill',
    id: '8',
    attributes: {
      name: 'Ninject',
      tags: ['dependency injection', 'library']
    }
  },
  {
    type: 'skill',
    id: '9',
    attributes: {
      name: 'SASS',
      tags: ['frontend', 'style', 'web']
    }
  },
  {
    type: 'skill',
    id: '10',
    attributes: {
      name: 'Nunit',
      tags: ['qa', 'testing']
    }
  },
  {
    type: 'skill',
    id: '11',
    attributes: {
      name: 'RabbitMQ',
      tags: ['queue', 'messaging']
    }
  },
  {
    type: 'skill',
    id: '12',
    attributes: {
      name: 'Git',
      tags: ['source control', 'version control']
    }
  },
  {
    type: 'skill',
    id: '13',
    attributes: {
      name: 'GitHub',
      tags: ['source control', 'version control']
    }
  },
  {
    type: 'skill',
    id: '14',
    attributes: {
      name: 'Typescript',
      tags: ['frontend', 'language', 'web']
    }
  },
  {
    type: 'skill',
    id: '15',
    attributes: {
      name: 'ASP .NET',
      tags: ['backend', 'framework']
    }
  },
  {
    type: 'skill',
    id: '16',
    attributes: {
      name: 'JWT Auth',
      tags: ['security', 'encryption']
    }
  },
  {
    type: 'skill',
    id: '17',
    attributes: {
      name: 'OO Design',
      tags: ['object oriented', 'design pattern']
    }
  },
  {
    type: 'skill',
    id: '18',
    attributes: {
      name: 'ElasticSearch',
      tags: ['cache', 'search']
    }
  },
  {
    type: 'skill',
    id: '19',
    attributes: {
      name: 'Kafka',
      tags: ['messaging', 'queue']
    }
  },
  {
    type: 'skill',
    id: '20',
    attributes: {
      name: 'Bamboo',
      tags: ['deployment', 'build', 'pipeline']
    }
  },
  {
    type: 'skill',
    id: '21',
    attributes: {
      name: 'Ember.js',
      tags: ['frontend', 'framework', 'web']
    }
  },
  {
    type: 'skill',
    id: '22',
    attributes: {
      name: 'Unity',
      tags: ['game', 'engine', 'framework']
    }
  },
  {
    type: 'skill',
    id: '23',
    attributes: {
      name: 'PostgreSQL',
      tags: ['database', 'sql']
    }
  },
  {
    type: 'skill',
    id: '24',
    attributes: {
      name: 'MongoDB',
      tags: ['database', 'nosql']
    }
  },
  {
    type: 'skill',
    id: '24',
    attributes: {
      name: 'T-SQL',
      tags: ['database', 'sql']
    }
  }];

  let games = [
    {
      type: 'project',
      id: 'games-01',
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
      type: 'project',
      id: 'games-02',
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
      type: 'project',
      id: 'games-03',
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
      type: 'project',
      id: 'games-04',
      attributes: {
        title: 'RPG Card Builder',
        category: 'app',
        image: '/portfolio/assets/images/rpg-cards.png',
        url: 'https://rpg-cards.onrender.com/index.html',
        description: 'A utility to create custom printable RPG cards',
        skills: ['Javascript', 'HTML5', 'CSS3']
      }
    }];

  let work = [
    {
      type: 'experience',
      id: 'deluxe-01',
      attributes: {
        title: 'Studio Portal',
        category: 'web',
        image: '/portfolio/assets/images/deluxe-logo.png',
        url: '',
        description:
          'Web application providing confirmation of KDM (key) creation and sending them it to a list of specific email addresses.',
        achievements: ['Enhanced and maintained existing pages built with Telerik components.', 'Converted key creation rules page to AngularJS and built new rules component for Netflix.'],
        skills: ['Javascript', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'C#', 'OO Design', 'ASP.NET', 'T-SQL', 'Telerik']
      }
    },
    {
      type: 'experience',
      id: 'deluxe-02',
      attributes: {
        title: 'Reeltime',
        category: 'web',
        image: '/portfolio/assets/images/teaching.png',
        url: '',
        description:
          'Web application providing global online key and content ordering for Deluxe Technicolor Digital Cinema account teams managing domestic and international releases.',
        achievements: ['Enhanced and maintained existing pages built with Telerik and AngularJS components.','Built a framework that spawned modular widgets that could be loaded with any of the utilities used sitewide, like search forms.'],
        skills: ['Javascript', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'C#', 'OO Design', '.NET', 'T-SQL', 'Telerik']
      }
    },
    {
      type: 'experience',
      id: 'deluxe-03',
      attributes: {
        title: 'Kraken',
        category: 'web',
        image: '/portfolio/assets/images/teaching.png',
        url: '',
        description:
          'Web application providing workflow management tools and infrastructure used by Deluxe Digital Cinema Mastering and Distribution teams.',
          achievements: ['Built and enhanced multiple integrations between Kraken and other Deluxe microservices.','Enhanced and maintained existing features, as well as the companion desktop application providing packaging and labeling tools that integrate with inventory tracking and management set up on Kraken web application.'],
          skills: ['Javascript', 'HTML5', 'CSS3', 'Jade/Pug', 'Typescript', 'AngularJS', 'C#', 'OO Design', '.NET', 'T-SQL']
      }
    },
    {
      type: 'experience',
      id: 'deluxe-04',
      attributes: {
        title: 'One DCP Manifest',
        category: 'cloud',
        image: '/portfolio/assets/images/teaching.png',
        url: '',
        description:
          'Cloud microservice that dynamically builds DCP Manifests for Assetmap xml files that are uploaded into AWS s3 buckets.',
        achievements: ['Built microservice from ground up as a new project.', 'Extended Kraken service API to make metadata required as part of the manifest accessible.'],
        skills: ['C#', 'OO Design', '.NET', 'T-SQL', 'AWS']
      }
    },
    {
      type: 'experience',
      id: 'deluxe-05',
      attributes: {
        title: 'Atlas',
        category: 'cloud',
        image: '/portfolio/assets/images/teaching.png',
        url: '',
        description:
          'Cloud microservice that manages cinematic and episodic titles and versions.',
        achievements: ['Implemented feature enhancements and maintained legacy code.'],
        skills: ['C#', 'OO Design', '.NET', 'PostgreSQL', 'AWS']
      }
    },
    {
      type: 'experience',
      id: 'deluxe-06',
      attributes: {
        title: 'One DCP Manifest',
        category: 'cloud',
        image: '/portfolio/assets/images/teaching.png',
        url: '',
        description:
          'Cloud microservice that dynamically builds DCP Manifests for Assetmap xml files that are uploaded into AWS s3 buckets.',
        achievements: ['Built microservice from ground up as a new project.', 'Extended Kraken service API to make metadata required as part of the manifest accessible.'],
        skills: ['C#', 'OO Design', '.NET', 'T-SQL', 'AWS']
      }
    }];


  this.get('/skills', function () {
    return { data: skills };
  });


  this.get('/experiences', function() {
      return { data: work };
  });

  this.get('/projects', function() {
    return { data: games };
  });


  this.passthrough('/portfolio');
}
