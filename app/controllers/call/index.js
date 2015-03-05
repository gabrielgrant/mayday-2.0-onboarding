import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application', 'call'],
  actions: {
    next: function(){
      var appModel = this.get('controllers.application.model');
      Ember.set(appModel, 'phone', this.get('phone'));
      this.get('controllers.call').send('connect');
      this.transitionToRoute('call.script');
    }
  }
});
