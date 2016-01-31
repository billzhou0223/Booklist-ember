var mongoose = require('mongoose');
var Book = require('../../models/book');

module.exports.getAllBooks = function(req, res, params) {
	var sort 						= params.sort,
			order 					= params.order,
			filter 					= params.filter,
			filterValue 		= params.filterValue;

	var query = Book.find();

	if(filter) {
		if(filter === 'wasRead') {
			if(filterValue === 'true') {
				query = query.where('wasRead').equals(true);
			}else {
				query = query.where('wasRead').ne(true);
			}
		}else {
			if(filterValue) {
				query = query.where(filter).equals(filterValue);
			}
		}
	}

	if(sort){
		var sortParam = {};
		if(order === 'DESC') {
			sortParam[sort] = -1;
		}else {
			sortParam[sort] = 1;
		}
		query = query.sort(sortParam);
	}

	query.exec(function(err, books) {
		if(err) {
			return res.send(err);
		}
		res.json(books);
	});
};

module.exports.addBook = function(req, res) {
	var book = new Book(req.body);

	book.save(function(err) {
		if(err) {
			return res.send(err);
		}
		res.json(book);
	});
};

module.exports.getBook = function(req, res, id) {
	Book.findById(id, function(err, book) {
		if(err) {
			return res.send(err);
		}
		res.json(book);
	});
};

module.exports.updateBook = function(req, res, id) {
	Book.findByIdAndUpdate(id, {$set: req.body}, function(err, book) {
		if(err){
			return res.send(err);
		}
		res.json(book);
	});
};

module.exports.deleteBook = function(req, res, id) {
	Book.findByIdAndRemove(id, function(err, book) {
		if(err) {
			return res.send(err);
		}
		res.json(book);
	});
};