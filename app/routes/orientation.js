import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {id: 1, prettyDate: 'Tue, Feb 17 @ 7pm PST'},
      {id: 2, prettyDate: 'Wed, Feb 18 @ 7pm PST'},
      {id: 3, prettyDate: 'Thu, Feb 19 @ 7pm PST'},
      {id: 4, prettyDate: 'Fri, Feb 20 @ 7pm PST'},
      {id: 5, prettyDate: 'Sat, Feb 21 @ 7pm PST'},
      {id: 6, prettyDate: 'Sun, Feb 22 @ 7pm PST'}
    ]
  }
});
