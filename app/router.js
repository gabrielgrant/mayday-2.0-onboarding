import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("address");

  this.route("call", function() {
    this.route("phone");
    this.route("script");
    this.route("thanks");
  });

  this.route("orientation");
  this.route("social");
  this.route("error");
});

export default Router;
