import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    next: function(){
      var address = this.get('address');
      var model = this.get('model');
      Ember.set(model, 'address', address)
      console.log('captured address', model);
      this.transitionToRoute('call');
    }
  }
});
