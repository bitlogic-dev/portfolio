import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click, // pretends to be a user clicking on a specific part of the screen
  currentURL, // returns the URL of the page we are currently on
  visit, // loads a given URL
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers';

let StubMapsService = Service.extend({
  getMapElement() {
    return Promise.resolve(document.createElement('div'));
  }
});

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:map-element', StubMapsService);
  });

  // start by entering application goals as tests and build code to make them succeed
  test('should show rentals as the home page', async function(assert) {
    await visit('/');
    // assert.equal compares the first two args and displays the third arg as an optional error message
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about me', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals', async function(assert) {
    await visit('/');
    // querySelectorAll method returns the elements that match the given CSS selector.
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should filter the list of rentals by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);

    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');

  });

  test('should show details for a selected rental', async function(assert) {
    await visit('/rentals');
    await click(".grand-old-mansion");

    assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes('Grand Old Mansion'), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
   });

});
