import Ember from 'ember';

export default Ember.Object.extend({
	id: null,
	title: '',
	author: '',
	pubYear: new Date().getFullYear(),
	purchaseDate: new Date().toISOString().substring(0, 10),
	note: '',
	rating: 0,
	isbn: '',
	wasRead: false,

	_isDirty: false,
	_ratingMax: 5,
	_ratingMin: 1,

	// purchaseDateFormat: Ember.computed('purchaseDate', {
	// 	get(key) {
	// 		return this.get('purchaseDate').substring(0, 10);
	// 	}
	// }),

	// pubYearFormat: Ember.computed('pubYear', function() {
	// 	var pubYear = this.get('pubYear');
	// 	return new Date(pubYear).getUTCFullYear();
	// }),

	isEmpty: Ember.computed('title', function() {
		return this.get('title') ? false : true;
	}),

	propertiesDidChange: Ember.observer('title', 'pubYear', 'author', 'purchaseDate', 'note', 'rating', 'isbn', 'wasRead', function() {
		this.set('_isDirty', true);
	}),

	// serialize() {
	// 	return {
 //      _id: this.get('id'),
 //      title: this.get('title'),
 //      author: this.get('author'),
 //      pubYear: this.get('pubYear'),
 //      purchaseDate: this.get('purchaseDate'),
 //      note: this.get('note'),
 //      rating: this.get('rating'),
 //      isbn: this.get('isbn'),
 //      wasRead: this.get('wasRead')
 //    };
	// },

	init() {
		this._super();
		this.set('id', this.get('_id'));
		this.set('purchaseDate', this.get('purchaseDate').substring(0, 10));
	}

});