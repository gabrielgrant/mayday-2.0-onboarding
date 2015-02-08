import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    next: function(){
      console.log('save address');
      this.transitionToRoute('call');
    }
  }
});
