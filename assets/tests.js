'use strict';

define("portfolio/tests/acceptance/list-rentals-test", ["qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "@ember/test-helpers"], function (_qunit, _emberQunit, _setupMirage, _testHelpers) {
  "use strict";

  let StubMapsService = Ember.Service.extend({
    getMapElement() {
      return Promise.resolve(document.createElement('div'));
    }

  });
  (0, _qunit.module)('Acceptance | list rentals', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    hooks.beforeEach(function () {
      this.owner.register('service:map-element', StubMapsService);
    }); // start by entering application goals as tests and build code to make them succeed

    (0, _qunit.test)('should show rentals as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/'); // assert.equal compares the first two args and displays the third arg as an optional error message

      assert.equal((0, _testHelpers.currentURL)(), '/rentals', 'should redirect automatically');
    });
    (0, _qunit.test)('should link to information about me', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-about");
      assert.equal((0, _testHelpers.currentURL)(), '/about', 'should navigate to about');
    });
    (0, _qunit.test)('should link to contact information', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), '/contact', 'should navigate to contact');
    });
    (0, _qunit.test)('should list available rentals', async function (assert) {
      await (0, _testHelpers.visit)('/'); // querySelectorAll method returns the elements that match the given CSS selector.

      assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
    });
    (0, _qunit.test)('should filter the list of rentals by city', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.fillIn)('.list-filter input', 'seattle');
      await (0, _testHelpers.triggerKeyEvent)('.list-filter input', 'keyup', 69);
      assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
      assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
    });
    (0, _qunit.test)('should show details for a selected rental', async function (assert) {
      await (0, _testHelpers.visit)('/rentals');
      await (0, _testHelpers.click)(".grand-old-mansion");
      assert.equal((0, _testHelpers.currentURL)(), '/rentals/grand-old-mansion', 'should navigate to show route');
      assert.ok(this.element.querySelector('.show-listing h2').textContent.includes('Grand Old Mansion'), 'should list rental title');
      assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
    });
  });
});
define("portfolio/tests/acceptance/portfolio-projects-test", ["qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "@ember/test-helpers"], function (_qunit, _emberQunit, _setupMirage, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Acceptance | portfolio projects', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('should show projects as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/projects', 'should redirect automatically');
    });
    (0, _qunit.test)('should link to about me page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-about");
      assert.equal((0, _testHelpers.currentURL)(), '/about', 'should navigate to about');
    });
    (0, _qunit.test)('should link to my contact page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), '/contact', 'should navigate to contact');
    });
    (0, _qunit.test)('should list my completed projects', async function (assert) {
      await (0, _testHelpers.visit)('/'); // querySelectorAll method returns the elements that match the given CSS selector.

      assert.equal(this.element.querySelectorAll('.listing').length, 2, 'should display 2 listings');
    });
    (0, _qunit.test)('should filter projects by keyword', async function (assert) {});
  });
});
define("portfolio/tests/integration/components/list-filter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  const ITEMS = [{
    city: 'San Francisco'
  }, {
    city: 'Portland'
  }, {
    city: 'Seattle'
  }];
  const FILTERED_ITEMS = [{
    city: 'San Francisco'
  }];
  (0, _qunit.module)('Integration | Component | list-filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('should initially load all listings', async function (assert) {
      // we want our actions to return promises, since they are potentially
      // fetching data asynchronously.
      this.set('filterByCity', () => Promise.resolve({
        results: ITEMS
      })); // with an integration test, you can set up and use your component in the
      // same way your application will use it.

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ListFilter @filter={{action filterByCity}} as |results|>
              <ul>
              {{#each results as |item|}}
                <li class="city">
                  {{item.city}}
                </li>
              {{/each}}
              </ul>
            </ListFilter>
          
      */
      {
        id: "P9miy1YR",
        block: "{\"symbols\":[\"results\",\"item\"],\"statements\":[[0,\"\\n      \"],[5,\"list-filter\",[],[[\"@filter\"],[[28,\"action\",[[23,0,[]],[24,[\"filterByCity\"]]],null]]],{\"statements\":[[0,\"\\n        \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"          \"],[7,\"li\",true],[10,\"class\",\"city\"],[8],[0,\"\\n            \"],[1,[23,2,[\"city\"]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      await (0, _testHelpers.settled)();
      assert.equal(this.element.querySelectorAll('.city').length, 3);
      assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
    });
    (0, _qunit.test)('should update with matching listings', async function (assert) {
      this.set('filterByCity', val => {
        if (val === '') {
          return Promise.resolve({
            query: val,
            results: ITEMS
          });
        } else {
          return Promise.resolve({
            query: val,
            results: FILTERED_ITEMS
          });
        }
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ListFilter @filter={{action filterByCity}} as |results|>
              <ul>
              {{#each results as |item|}}
                <li class="city">
                  {{item.city}}
                </li>
              {{/each}}
              </ul>
            </ListFilter>
          
      */
      {
        id: "P9miy1YR",
        block: "{\"symbols\":[\"results\",\"item\"],\"statements\":[[0,\"\\n      \"],[5,\"list-filter\",[],[[\"@filter\"],[[28,\"action\",[[23,0,[]],[24,[\"filterByCity\"]]],null]]],{\"statements\":[[0,\"\\n        \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"          \"],[7,\"li\",true],[10,\"class\",\"city\"],[8],[0,\"\\n            \"],[1,[23,2,[\"city\"]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n      \"]],\"parameters\":[1]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      })); // fill in the input field with 's'

      await (0, _testHelpers.fillIn)(this.element.querySelector('.list-filter input'), 's'); // keyup event to invoke an action that will cause the list to be filtered

      await (0, _testHelpers.triggerKeyEvent)(this.element.querySelector('.list-filter input'), "keyup", 83);
      await (0, _testHelpers.settled)();
      assert.equal(this.element.querySelectorAll('.city').length, 1, 'One result returned');
      assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
    });
  });
});
define("portfolio/tests/integration/components/project-item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | project-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // create a test object with the expected properties of a rental

    hooks.beforeEach(function () {
      this.project = Ember.Object.create({
        title: 'test-title',
        category: 'test-category',
        image: 'test-image',
        url: 'test-url',
        description: 'test-description'
      });
    });
    (0, _qunit.test)('should display project details', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProjectItem @project={{this.project}} />
      */
      {
        id: "7B1aCRpz",
        block: "{\"symbols\":[],\"statements\":[[5,\"project-item\",[],[[\"@project\"],[[23,0,[\"project\"]]]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'test-title');
    });
  });
});
define("portfolio/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/list-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint\n\n');
  });
  QUnit.test('components/project-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-item.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/projects.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/projects/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/projects/index.js should pass ESLint\n\n');
  });
  QUnit.test('models/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass ESLint\n\n');
  });
  QUnit.test('routes/projects/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects/index.js should pass ESLint\n\n');
  });
});
define("portfolio/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('portfolio/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('portfolio/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('portfolio/templates/components/list-filter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/components/list-filter.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('portfolio/templates/components/project-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'portfolio/templates/components/project-item.hbs should pass TemplateLint.\n\nportfolio/templates/components/project-item.hbs\n  5:45  error  elements cannot have inline styles  no-inline-styles\n');
  });
  QUnit.test('portfolio/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('portfolio/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('portfolio/templates/projects.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/projects.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('portfolio/templates/projects/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'portfolio/templates/projects/index.hbs should pass TemplateLint.\n\n');
  });
});
define("portfolio/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/list-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/portfolio-projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/portfolio-projects-test.js should pass ESLint\n\n39:60 - \'assert\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('integration/components/list-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/project-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/project-item-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/projects-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/projects/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/projects/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/project-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/projects/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects/index-test.js should pass ESLint\n\n');
  });
});
define("portfolio/tests/test-helper", ["portfolio/app", "portfolio/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("portfolio/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("portfolio/tests/unit/controllers/projects-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | projects', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:projects');
      assert.ok(controller);
    });
  });
});
define("portfolio/tests/unit/controllers/projects/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | projects/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:projects/index');
      assert.ok(controller);
    });
  });
});
define("portfolio/tests/unit/models/project-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | project', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('project', {});
      assert.ok(model);
    });
  });
});
define("portfolio/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/projects-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | projects', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:projects');
      assert.ok(route);
    });
  });
});
define("portfolio/tests/unit/routes/projects/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | projects/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:projects/index');
      assert.ok(route);
    });
  });
});
define('portfolio/config/environment', [], function() {
  var prefix = 'portfolio';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('portfolio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
