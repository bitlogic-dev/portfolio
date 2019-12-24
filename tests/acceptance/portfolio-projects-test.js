import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click, // pretends to be a user clicking on a specific part of the screen
  currentURL, // returns the URL of the page we are currently on
  visit // loads a given URL
} from '@ember/test-helpers';

module('Acceptance | portfolio projects', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show projects as the home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/projects', 'should redirect automatically');

  });

  test('should link to about me page', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to my contact page', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list my completed projects', async function(assert) {
    await visit('/');
    // querySelectorAll method returns the elements that match the given CSS selector.
    assert.equal(this.element.querySelectorAll('.listing').length, 2, 'should display 2 listings');
  });

  test('should filter projects by keyword', async function(assert) {});

});
