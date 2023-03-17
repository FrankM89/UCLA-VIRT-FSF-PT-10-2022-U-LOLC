const express = require('express');
<<<<<<< HEAD
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
=======
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());



>>>>>>> 50eddf61898e340cf6e8eab1ab6cb58bc7e1b293
app.post('/create', (req, res) => {
  // Inserts one entry to DB
  db.collection('bookCollection').insertOne(
<<<<<<< HEAD
    // JSON format for information
    { title: req.body.title, author: req.body.author },
    (err, results) => {
=======
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
>>>>>>> 50eddf61898e340cf6e8eab1ab6cb58bc7e1b293
      if (err) throw err;
    });
});
<<<<<<< HEAD
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
=======

app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
>>>>>>> 50eddf61898e340cf6e8eab1ab6cb58bc7e1b293
      if (err) throw err;
    });
});
// Get route for book collection. Shows what's in the book collection DB
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    // Find() returns all documents. Equivalent to 'SELECT * FROM' in SQL
    .find({})
<<<<<<< HEAD
    // Post information in an array
    .toArray((err, results) => {
=======
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
>>>>>>> 50eddf61898e340cf6e8eab1ab6cb58bc7e1b293
      if (err) throw err;
    });
});
