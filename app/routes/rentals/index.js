import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // calls the Ember Data Store service for the given model class
    // findAll will attempt to fetch rentals from the /api/rentals endpoint
    return this.store.findAll('rental');
  }
});
