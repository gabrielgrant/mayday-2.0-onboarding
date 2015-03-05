import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    next: function(){
      var data = {
        person: {
          email: this.get('controllers.application.model.email'),
          postal_code: this.get('controllers.application.model.zip'),
          first_name: this.get('firstName'),
          last_name: this.get('lastName')
        },
        event_id: this.get('selectedOrientation.id')
      };
      console.log('saving orientation choice', data);
      var url = 'https://mayone-staging.herokuapp.com/events/create_rsvp.json';
      var self = this;
      self.transitionToRoute('loading');
      Ember.$.post(url, data).then(function(data){
        console.log('Orientation choice saved', data);
        self.transitionToRoute('call');
      });
    }
  }
});
