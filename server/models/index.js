var db = require('../db');


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {

      //insert post data into mysql query

      //execute mysql query to post to messages table

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {

      //insert post data into mysql query

      //execute mysql query to post to messages table
    }
  }
};

