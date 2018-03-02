DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER NOT NULL auto_increment,
    burger_name varchar(250),
    devoured boolean,
    PRIMARY KEY(id)
);