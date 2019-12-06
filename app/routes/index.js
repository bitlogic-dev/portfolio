import Route from '@ember/routing/route';

export default Route.extend({
  // use a route lifecycle hook called redirect to load /projects when a user visits /
  redirect() {
    this.transitionTo('projects');
  }
});
