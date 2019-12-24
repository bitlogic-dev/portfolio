import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | project-item', function(hooks) {
  setupRenderingTest(hooks);

  // create a test object with the expected properties of a rental
  hooks.beforeEach(function() {
    this.project = EmberObject.create({
      title: 'test-title',
      category: 'test-category',
      image: 'test-image',
      url: 'test-url',
      description: 'test-description'
    });
  });

  test('should display project details', async function(assert) {
    await render(hbs`<ProjectItem @project={{this.project}} />`);
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'test-title');
  });
});
