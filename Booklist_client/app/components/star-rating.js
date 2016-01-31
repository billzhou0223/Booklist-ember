import Ember from 'ember';

export default Ember.Component.extend({
	maxStars: 0,
	rating: 0,
	stars: [],
	tagName: 'span',

	actions: {
		click(star) {
			if(!this.get('isNotEditing')) {
				this.set('rating', star.index);
			}
		}
	},

	setRating: Ember.on('init', Ember.observer('rating', function() {
		var stars = [],
				rating = this.get('rating'),
				maxStars = this.get('maxStars');

		for(var i = 0; i < maxStars; ++i) {
			var star = Ember.Object.create({
				isEmpty: i >= rating,
				index: i + 1
			});
			stars.pushObject(star);
		}
		this.set('stars', stars);
	})),
});