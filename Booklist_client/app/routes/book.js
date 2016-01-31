import Ember from 'ember';
import Book from '../models/book';

export default Ember.Route.extend({
	model(params) {
		return Ember.$.ajax({
			url: '/api/books/' + params.book_id,
			method: 'GET'
		}).then(function(result) {
			return Book.create(result);
		});
	},

	setupController(controller, model) {
		controller.set('model', model)
							.set('isNotEditing', true);
	},

	actions: {
		save() {
			var book = this.get('controller.model'),
					self = this;

			if(book.get('_isDirty')) {
				Ember.$.ajax({
					url: '/api/books/' + book.get('id'),
					method: 'PUT',
					data: JSON.stringify(book),
					dataType: 'json',
					contentType: 'application/json; charset=UTF-8'
				}).then(function() {
					self.transitionTo('book', book.get('id'));
				});
			}else {
				self.transitionTo('book');
			}
		},

		delete() {
			var book = this.get('controller.model'),
					self = this;

			if(confirm('Are you sure you want to delete this book?')) {
				Ember.$.ajax({
					url: '/api/books/' + book.get('id'),
					method: 'DELETE',
					dataType: 'json'
				}).then(function() {
					self.transitionTo('index');
				});
			}
		}
	}
});