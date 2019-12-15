import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // call the Ember Data Store service and fetch all records for the project model class at the /api/projects endpoint
    return this.store.findAll('project');
  }
});
