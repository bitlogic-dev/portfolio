import Route from '@ember/routing/route';

export default Route.extend({
  // use a route lifecycle hook called redirect to load /projects when a user visits /
  // route lifecycle hooks are automatically called when a route renders or when data changes
  redirect() {
    this.transitionTo('projects');
  }
});
