const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
