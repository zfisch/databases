var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {

      //access post data from request

      //hand data to models.messages.post for insertion into db

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

      //access post data from request

      ////hand data to models.users.post for insertion into db

    }
  }
};

