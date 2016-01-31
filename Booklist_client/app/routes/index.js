import Ember from 'ember';
import Book from '../models/book';

export default Ember.Route.extend({
	queryParams: {
    sort: {
      refreshModel: true
    },
    order: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    },
    filterValue: {
      refreshModel: true
    }
  },

  model(params) {
  	return Ember.$.ajax({
  		url: '/api/books',
  		method: 'GET',
  		data: params ? params : null
  	}).then(function(result) {
  		var books = [];
  		if(result){
  			for(var i = 0; i < result.length; ++i){
  				var book = result[i];
  				books.push(Book.create(book));
  			}
  		}
  		return books;
    });
  }

});

