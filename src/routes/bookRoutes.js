const express = require('express');
const bookRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;
const config = require('../config');

const data = {
  name: 'chris', role: 'admin'
};

const BookModel = require('../../src/models/bookModel');
const router = function (nav) {
    let books = [];
    /*
        const books = [{
            title: 'Stephen Kings IT', author: 'Stephen King', genre: 'Horror', read: false, authorId: 1
          },
             {
            title: 'The Shining', author: 'Stephen King', genre: 'Psychological Horror', read: true, authorId: 1
          },
             {
            title: 'Flashpoint', author: 'Geoff Jones', genre: 'Graphic Novel', read: true, authorId: 2
          }];
          */
    //console.log(config.dbUrl);
    mongodb.connect(config.dbUrl, function (err, client) {
      const db = client.db('libraryApp');
      db.collection('books').find({}).toArray(function (err, results) {
        books = results;
        client.close();
      });
    });

    bookRouter.route('/').get(function (req, res) {
        res.render('bookListView',
        {
            title: 'Books',
            nav:nav,
            books: books
          });
      });

    bookRouter.route('/:id').get(function (req, res) {
        const id = objectId(req.params.id);
        mongodb.connect(config.dbUrl, function (err, client) {
          const db = client.db('libraryApp');
          db.collection('books').findOne({
            _id: id
          }, function (err, results) {
            res.render('bookView',
            {
                title: 'Books',
                nav: nav,
                book: results
              });
            let book = new BookModel(results);
            book.condition = 'new';
            console.log(book);
            client.close();
          });
        });

      });
    return bookRouter;

  };

module.exports = router;
