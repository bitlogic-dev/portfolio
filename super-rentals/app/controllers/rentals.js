import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      // apply the param as a filter if one is provided, else return all
      if (param !== '') {
        // since the query is async, return the param input as part of the response
        // so that it can be compared by the list-filter component and ensure it is the same
        return this.store.query('rental', { city: param }).then((results) => {
          return { query: param, results: results };
        });
      }
      else {
        return this.store.findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
