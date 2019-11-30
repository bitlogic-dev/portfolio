import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  // use the init hook to seed initial listings by filtering with an empty value
  init() {
    this._super(...arguments);
    this.filter('').then((response) => {
      this.set('results', response.results);
    });
  },

  actions: {
    // Closure Action: an action which calls a function that is passed in by the calling object
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter; // this is the filter function the handleFilterEntry action is going to call below

      filterAction(filterInputValue).then((response) => {
        if (response.query === this.value) {
          this.set('results', response.results); // only use results if the response is for the same query we have in the input value
        }
      });
    }
  }
});
