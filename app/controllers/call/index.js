import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    next: function(){
      console.log('init call model', this.get('model'));
      var url = 'https://mayone-staging.herokuapp.com/calls';
      var data = {
        email: this.get('controllers.application.model.email'),
        phone: this.get('phone')
      };
      Ember.$.post(url, data);
      this.transitionToRoute('call.script');
    }
  }
});
