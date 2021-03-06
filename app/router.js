import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('state');
  this.route('national');
  this.route('ngo');
  this.route('multinational');
});

export default Router;
