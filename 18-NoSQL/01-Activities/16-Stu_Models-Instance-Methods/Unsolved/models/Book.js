const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
  console.log(
    `This books title is ${this.title}, and the reduced price is ${this.price / 2}`
  );
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model
const book = new Book({
  title: "New Book",
  author: "Some person",
  price: "10000",
});

// TODO: Call the custom instance method on the instance
book.getDiscount();

module.exports = Book;
