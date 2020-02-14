import DS from 'ember-data';

// destructuring assignment
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  url: DS.attr(),
  description: DS.attr(),
  skills: DS.attr()
});
