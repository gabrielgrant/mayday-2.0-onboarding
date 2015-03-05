import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://mayone-staging.herokuapp.com/people/targets';
    var data = {
      email: Ember.get(this.modelFor('application'), 'email'),
      address: Ember.get(this.modelFor('application'), 'address'),
      zip: Ember.get(this.modelFor('application'), 'zip'),
    }
    return Ember.$.getJSON(url, data);
  },
  afterModel: function(model){
    console.log(model);
    if (model.address_required){
      this.transitionTo('address');
    }
  }
});
