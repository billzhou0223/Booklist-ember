import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('book', {path: '/book/:book_id'}, function(){
		this.route('edit');
	});

	this.route('new', {path: '/book/new'});
});

export default Router;
