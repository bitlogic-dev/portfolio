import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about'); // run app/routes/about.js when user navigates to /about
  this.route('contact');
  // TODO: Remove the rentals route and related components and have index load the projects page instead
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id'});
  });
  this.route('projects', function() {});
});
