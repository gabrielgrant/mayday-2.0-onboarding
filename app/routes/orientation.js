import Ember from 'ember';
import { moment } from 'ember-moment/computed';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://mayone-staging.herokuapp.com/events';
    return Ember.$.getJSON(url).then(function(data){
      var Model = Ember.Object.extend({
        startDateTime: moment('starts_at', 'dddd MMMM Do, h:mmA'),
        endTime: moment('ends_at', 'h:mmA'),
        prettyDate: function(){
          return [this.get('startDateTime'), this.get('endTime')].join(' - ');
        }.property('startDateTime', 'endTime')
      });
      return data.events.map(function(d){
        return Model.create(d);
      });
    });
  }
});
