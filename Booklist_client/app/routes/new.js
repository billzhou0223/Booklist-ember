import Ember from 'ember';
import Book from '../models/book';

export default Ember.Route.extend({
	model() {
		return Book.create({});
	},

	setupController(controller, model) {
		controller.set('model', model)
							.set('isNotEditing', false)
							.set('isNewBook', true);
	},

	renderTemplate(controller, model) {
		this.render('book', {
			model: model,
			controller: controller
		});
	},

	actions: {
		save() {
			var book = this.get('controller.model'),
					self = this;

			if(book.get('isEmpty')) {
				alert('You cannot save an a book without a title');
			}else {
				Ember.$.ajax({
					url: '/api/books/',
					method: 'POST',
					data: JSON.stringify(book),
					dataType: 'json',
					contentType: 'application/json; charset=UTF-8'
				}).then(function(result) {
					self.transitionTo('book', result._id);
				});
			}
		},

		willTransition(transition) {
			if(this.controller.get('model').get('_isDirty')
							&& transition.targetName === 'index'
							&& !confirm('Are you sure you want discard your new book?')) {
				transition.abort();
			}else {
				return true;
			}
		}
	}
});