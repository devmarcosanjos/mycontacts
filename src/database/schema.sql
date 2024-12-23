CREATE DATABASE mycontacts;

CREATE TABLE IF NOT EXISTS categories(
  id VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  PRIMARY KEY (id)
  )

CREATE TABLE IF NOT EXISTS contacts(
  id VARCHAR NOT NULL,  -
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id NUMBER,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
