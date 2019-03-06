-- Create a database 
DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE DATABASE burgers_db;

CREATE TABLE burgers
(
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
