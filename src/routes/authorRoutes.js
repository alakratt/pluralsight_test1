var express = require('express');
var authorRouter = express.Router();

const data = {
  name: 'chris', role: 'admin'
};

const UserModel = require('../../src/models/userModel');
let user1 = new UserModel(data);

var router = function (nav) {

    var books = [{
        title: 'Stephen Kings IT', author: 'Stephen King', img: '../images/stephen-king.jpg', genre: 'Horror', read: false, authorId: 1
      },
         {
        title: 'The Shining', author: 'Stephen King', img: '../images/stephen-king.jpg', genre: 'Psychological Horror', read: true, authorId: 1
      },
         {
        title: 'Flashpoint', author: 'Geoff Jones', img: '../images/geoff-johns.jpg', genre: 'Graphic Novel', read: true, authorId: 2
      }];

    var authors = [];
    //authors[].books = [];
    for (var i = 0; i < books.length; i++) {

      if (authors.length === 0) {

        authors.push({
            name: books[i].author, books: [], img: books[i].img
          });
        authors[0].books.push(books[i].title);

      }

      for (var x = 0; x < i; x++) {
        if (authors[x]) {
          if (authors[x].name === books[i].author) {
            authors[x].books.push(books[i].title);
          }
        } else {

          authors.push({
              name: books[i].author, books: [], img: books[i].img
            });
          authors[x].books.push(books[i].title);

        }
      }

    }

    authorRouter.route('/').get(function (req, res) {
        res.render('authorListView', {
            title: 'Authors',
            nav: nav,
            authors: authors
          });
      });

    authorRouter.route('/:id').get(function (req, res) {

        var id = req.params.id;
        res.render('authorProfile', {
            title: 'Author Profile',
            nav: nav,
            author: authors[id]
          });

      });

    return authorRouter;

  };

module.exports = router;
