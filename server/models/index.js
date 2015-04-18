var db = require('../db');


module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (jsonData) {
      // format of data is:
      // {
      //   username: "Valjean",
      //   message: "In mercy's name, three days is all I need.",
      //   roomname: "Hello"
      // }

      var userId;
      var roomId;

      console.log("inside of models post")


      //check if user exists (presumes all unique names)
      db.query('SELECT id from users where username = ' + jsonData.username + ';', function(err, rows, fields) {
        if (err){
          //if not, insert user to user table.
          db.query('INSERT INTO users (username) VALUES (' + jsonData.username + ');');
        } else {
          //get the user id
          console.log("-------> query for existing user calls callback with (rows, fields): ", rows, fields);
          // userId = rows;
        }
      });

      //check if room exists
      db.query('SELECT id from rooms where username = ' + jsonData.roomname + ';', function(err, rows, fields) {
        //if not, insert room to room table
        if (err){
          db.query('INSERT INTO rooms (roomname) VALUES (' + jsonData.roomname + ');');
        } else{
          //get the room id
          console.log("-------> query for existing room calls callback with (rows, fields): ", rows, fields);
          // roomId = rows;
        }
      });

      //insert message, roomid, and userid into messages table
      db.query('INSERT INTO messages (message, userId, roomId) VALUES (' + jsonData.message + ',' + userId + ',' + roomId + ');' );

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (jsonData) {

      //check if user exists (presumes all unique names)
      db.query('SELECT id from users where username = ' + jsonData.username + ';', function(err, rows, fields) {
        if (err){
          //if not, insert user to user table.
          db.query('INSERT INTO users (username) VALUES (' + jsonData.username + ');');
        } else {
          //get the user id
          console.log("-------> query for existing user calls callback with (rows, fields): ", rows, fields);
          // userId = rows;
        }
      });
    }
  }
};

