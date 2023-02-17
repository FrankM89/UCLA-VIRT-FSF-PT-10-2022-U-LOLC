const express = require('express');
// Allows use of mongodb
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;
// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;
// Declare a variable to hold the connection
let db;
// Connect to mongodb
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new DB instance
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);
// Built in express function for JSON responses
app.use(express.json());
// Post/create route for db (in this case, title and author of book)
app.post('/create', (req, res) => {
  // Inserts one entry to DB
  db.collection('bookCollection').insertOne(
    // JSON format for information
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});
// Pos route for more than one input
app.post('/create-many', function (req, res) {
  // Inserts more than one entry to DB
  db.collection('bookCollection').insertMany(
    [
      {"title" : "Oh the Places We Will Go!"},
      {"title" : "Diary of Anne Frank"}
    ], 
    // Post results in JSON format
    (err,results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});
// Get route for book collection. Shows what's in the book collection DB
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    // Find() returns all documents. Equivalent to 'SELECT * FROM' in SQL
    .find({})
    // Post information in an array
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
