-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
   id int unsigned NOT NULL auto_increment,
   msgId int unsigned,
   userId int unsigned,
   roomId int unsigned,

   primary key (id)
);

-- /* Create other tables and define schemas for them here! */




--   Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.

