const express = require('express');

const PORT = 3006;

const app = express();


app.get('/api/reviews', (req, res) => {
  
  res.json(`${req.method} request received to get reviews`);

  console.info(req.rawHeaders);
 
  console.info(`${req.method} request received to get reviews`);
});


app.post('/api/reviews', (req, res) => {
  
  res.json(`${req.method} request received to add a review`);

  console.info(req.rawHeaders);
 
  console.info(`${req.method} request received to add a review!`);
});

app.get('/api/upvotes', (req, res) => {
  
  res.json(`${req.method} request received to get upvotes`);

  console.info(req.rawHeaders);
 
  console.info(`${req.method} request received to get upvotes`);
});


app.post('/api/upvotes', (req, res) => {
  
  res.json(`${req.method} request received to add a upvotes`);

  console.info(req.rawHeaders);
 
  console.info(`${req.method} request received to add a upvotes!`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);