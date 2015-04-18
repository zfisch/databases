CREATE DATABASE chat;

USE chat;

CREATE TABLE users(
  id int unsigned NOT NULL auto_increment,
  username varchar(30) UNIQUE,

  PRIMARY KEY (id)
);

CREATE TABLE rooms(
  id int unsigned NOT NULL auto_increment,
  roomname varchar(30) UNIQUE,

  PRIMARY KEY (id)
);

CREATE TABLE messages (
   id int unsigned NOT NULL auto_increment,
   message varchar(140),
   userId int unsigned,
   roomId int unsigned,

   PRIMARY KEY  (id),

   FOREIGN KEY (userId)
     REFERENCES users (id)
     ON UPDATE CASCADE,
     -- ON DELETE CASCADE,

   FOREIGN KEY (roomId)
     REFERENCES rooms (id)
     ON UPDATE CASCADE
     -- ON DELETE CASCADE
);




-- /* Create other tables and define schemas for them here! */




--   Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.

