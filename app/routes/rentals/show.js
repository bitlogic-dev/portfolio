import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    // display only the matching record on this nested route
    return this.store.findRecord('rental', params.rental_id);
  }
});
