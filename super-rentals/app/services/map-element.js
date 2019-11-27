import { camelize } from '@ember/string';
import Service from '@ember/service';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Service.extend({

  geocode: service(),
  map: service(),

  init() {
    // initialize cachedMaps with an empty object if it doesn't already exist
    if (!this.cachedMaps) {
      set(this, 'cachedMaps', {});
    }
    this._super(...arguments);
  },

  // return a cached element for the given location or create new element if not cached.
  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.cachedMaps[camelizedLocation];

    if (!element) {
      element = this._createMapElement();
      let geocodedLocation = await this.geocode.fetchCoordinates(location);

      this.map.createMap(element, geocodedLocation);
      this.cachedMaps[camelizedLocation] = element;

    }

    return element;
  },

  // add a div with class map to the document
  _createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
});
