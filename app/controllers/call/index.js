import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    next: function(){
      console.log('init call');
      this.transitionToRoute('call.script');
    }
  }
});
