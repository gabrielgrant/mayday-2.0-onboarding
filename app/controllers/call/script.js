import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['call'],
  actions: {
    reconnect: function(){
      this.get('controllers.call').send('connect');
    },
    next: function(){
      console.log('save call info');
      this.transitionToRoute('call.thanks');
    }
  }
});
