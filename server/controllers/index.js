var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('----> test of access to Express from within models/index.js');
      res.send('HI MIKE!')
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      // TODO access post data from request
      console.log('----> req.json from controllers/index.js:', req.json);

      // res.send('POST request to homepage');

      /////////////////////////////////
      // TODO hand data to models.messages.post for insertion into db
        // what format is the data in?: in JSON
    } // TODO a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      console.log('-------> inside controller user post method');

      // TODO access post data from request
      models.users.post(req.body);
      res.status(200).end();

      // TODO hand data to models.users.post for insertion into db

    }
  }
};

