import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this.transitionTo('orientation', {queryParams: transition.queryParams});
  }
});
