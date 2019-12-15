import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByProjectName(param) {
      return this.store.findAll('project');
    }
  }
});
