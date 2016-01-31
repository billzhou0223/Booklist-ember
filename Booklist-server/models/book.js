var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  pubYear: Date,
  purchaseDate: Date,
  note: String,
  rating: Number,
  isbn: String,
  wasRead: Boolean,
});

module.exports = mongoose.model('Book', BookSchema);