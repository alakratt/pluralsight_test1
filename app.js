const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
const nav = [{
    Link:'/books', Text:'Books'
  },
{
    Link:'/authors', Text: 'Authors'
  }];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/authors', authorRouter);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: nav
      });
  });

app.listen(port, function (err) {
    console.log('running server on port ' + port);
  });
