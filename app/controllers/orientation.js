import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    next: function(){
      console.log('save orientation choice');
      this.transitionToRoute('address');
    }
  }
});
