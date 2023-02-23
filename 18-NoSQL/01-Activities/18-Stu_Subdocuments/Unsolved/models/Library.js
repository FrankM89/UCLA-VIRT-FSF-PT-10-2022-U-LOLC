const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true},
  price: Number,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { title: 'Book Title', price: 15},
  { title: 'Book Title 2', price: 10},
  { title: 'Book Title 3', price: 20},
]; 

Library.create(
  { name: 'Books', books: bookData },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

module.exports = Library;
