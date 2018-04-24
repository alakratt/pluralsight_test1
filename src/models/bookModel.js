const mongodb = require('mongodb').MongoClient;
const config = require('../../src/config');
const BookModel = require('../../src/models/bookModel');

let book = class {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.genre = data.genre;
    this.read = data.read || false;
  }

};

module.exports = book;