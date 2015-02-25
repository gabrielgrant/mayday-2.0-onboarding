import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    next: function(){
      if (this.get('name')){
        this.set('controllers.application.name', this.get('name'));
      }
      if (this.get('email')){
        this.set('controllers.application.email', this.get('email'));
      }
      if (this.get('zip')){
        this.set('controllers.application.zip', this.get('zip'));
      }
      var url = 'https://congress.api.sunlightfoundation.com/districts/locate';
      var data = {
        apikey: '65b4c5e0e363435790291c0c76067cce',
        zip: this.get('controllers.application.zip')
      };
      var self = this;
      Ember.$.getJSON(url, data).then(function(data){
        // if no 
        //if (data.length == 1
        console.log(data);
        self.transitionToRoute('address');
        //self.transitionToRoute('call');
      });
      
    }
  }
});
