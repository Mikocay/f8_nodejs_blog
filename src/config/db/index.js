const mongoose = require('mongoose');

function connect() {
  mongoose
    .connect('mongodb://localhost:27017/f8_nodejs_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connect to DB successfully!');
    })
    .catch((err) => {
      console.log('Connect to DB failure!', err);
    });
}

module.exports = { connect };
