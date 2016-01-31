var express = require('express');
var router = express.Router();
var books = require('./api/books');

router.route('/books')
		.get(function(req, res) {
			books.getAllBooks(req, res, req.query);
		})
		.post(function(req, res) {
			books.addBook(req, res);
		});

router.route('/books/:book_id')
		.get(function(req, res) {
			books.getBook(req, res, req.params.book_id);
		})
		.put(function(req, res) {
			books.updateBook(req, res, req.params.book_id);
		})
		.delete(function(req, res){
			books.deleteBook(req, res, req.params.book_id);
		});

module.exports = router;