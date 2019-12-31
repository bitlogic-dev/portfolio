import DS from 'ember-data';

// destructuring assignment
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  tags: DS.attr()
});
