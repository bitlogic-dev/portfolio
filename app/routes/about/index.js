import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class AboutRoute extends Route{
  model() {
    // Multiple models can be returned through an RSVP.hash. The RSVP.hash method
    // takes an object containing multiple promises.
    // If all of the promises resolve, the returned promise will resolve to an
    // object that contains the results of each request.
    return RSVP.hash({
      skills: this.store.findAll('skill'),
      projects: this.store.findAll('project'),
      experiences: this.store.findAll('experience')
    });
  }
}
