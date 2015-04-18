CREATE DATABASE chat;

USE chat;

CREATE TABLE users(
  id int unsigned NOT NULL auto_increment,
  username varchar(30) UNIQUE,

  primary key(id)
);

CREATE TABLE rooms(
  id int unsigned NOT NULL auto_increment,
  roomname varchar(30) UNIQUE,

  primary key(id)
);

CREATE TABLE messages (
   id int unsigned NOT NULL auto_increment,
   message varchar(140),
   userId int unsigned,
   roomId int unsigned,

   primary key (id),
   foreign key (userId) references users (id),
   foreign key (roomId) references rooms (id)
);




-- /* Create other tables and define schemas for them here! */




--   Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.

