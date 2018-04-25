const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

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
const authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);

app.set('views', './src/views');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/authors', authorRouter);
app.use('/auth', authRouter);

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
