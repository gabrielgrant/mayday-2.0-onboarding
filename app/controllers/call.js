import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    connect: function(){
      console.log('connecting call');
      var url = 'https://mayone-staging.herokuapp.com/calls';
      var data = {
        email: this.get('controllers.application.model.email'),
        phone: this.get('controllers.application.model.phone')
      };
      Ember.$.post(url, data).fail(function(){
        console.log('Connecting call failed', arguments);
        self.transitionToRoute('error');
      });
    }
  }
});
