import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://mayone-staging.herokuapp.com/people/targets';
    var data = {
      email: Ember.get(this.modelFor('application'), 'email'),
      address: Ember.get(this.modelFor('application'), 'address'),
      zip: Ember.get(this.modelFor('application'), 'zip'),
    };
    var Legislator = Ember.Object.extend({
      displayLine: function(){
        var title;
        if (this.get('chamber') === 'house'){
          title = 'Rep.';
        } else {
          title = 'Sen.';
        }
        var suffix = [this.get('party'), this.get('state_abbrev')].join(' - ');
        if (this.get('district_code')){
          suffix = [suffix, 'District', this.get('district_code')].join(' ');
        }
        return [title, this.get('name'), '(' + suffix + ')'].join(' ');
      }.property('name', 'state_abbrev', 'chamber', 'party', 'district_code')
    });
    return Ember.$.getJSON(url, data).then(function(data){
      console.log(data);
      data.target_legislators = data.target_legislators.map(function(d){
        return Legislator.create(d);
      });
      return data;
    });
  },
  afterModel: function(model){
    if (model.address_required){
      this.transitionTo('address');
    }
  }
});
