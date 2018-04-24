const express = require('express');
const adminRouter = express.Router();
const mongodb = require('mongodb').MongoClient;

const books = [{
        title: 'Stephen Kings IT', author: 'Stephen King', genre: 'Horror', read: false, authorId: 1
      },
         {
        title: 'The Shining', author: 'Stephen King', genre: 'Psychological Horror', read: true, authorId: 1
      },
         {
        title: 'Flashpoint', author: 'Geoff Jones', genre: 'Graphic Novel', read: true, authorId: 2
      }];

let router = function (nav) {
  adminRouter.route('/addBooks')
  .get(function (req, res) {
    const url = 'mongodb://localhost:27017';
    mongodb.connect(url, function (err, client) {
      console.log('Connected to mongo db successfully');
      const db = client.db('libraryApp');
      client.close();
      res.send('mongodb connection closed');
      /*
            db.collection('books').insertMany(books, function (err, results) {
              res.send(results);
              //client.close();
            });
            */

    });
    //res.send('inserting books');
  });
  return adminRouter;
};

module.exports = router;