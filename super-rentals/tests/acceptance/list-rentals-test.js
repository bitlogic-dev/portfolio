import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click, // pretends to be a user clicking on a specific part of the screen
  currentURL, // returns the URL of the page we are currently on
  visit // loads a given URL
} from '@ember/test-helpers';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  // basic test to check that application is running by verifying the root url is reachable
  // test('visiting /', async function(assert) {
  //   await visit('/');
  //
  //   assert.equal(currentURL(), '/');
  // });

  // start by entering application goals as tests and build code to make them succeed
  test('should show rentals as the home page', async function(assert) {
    await visit('/');
    // assert.equal compares the first two args and displays the third arg as an optional error message
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals', async function(assert) { });

  test('should filter the list of rentals by city', async function(assert) { });

  test('should show details for a selected rental', async function(assert) { });

});
