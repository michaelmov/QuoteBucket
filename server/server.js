var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var db = require('./config/db');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var session = require('express-session');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
require('./config/passport')(passport);

var auth = require('./routes/auth')(passport);
var quotes = require('./routes/quotes');

var port = process.env.PORT || 3000;

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,  '../client')));



// Connect to DB
mongoose.connect(db.url);

app.use(session({
    secret: 'kitten paws',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connections[0],
        collection: 'sessions'
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Load API routes
app.use('/api/auth', auth);
app.use('/api/quotes', quotes);


// General routes
app.get('/register', function (req, res) {
    res.render('register');
});

app.get('/login', function (req, res) {
    if(req.isAuthenticated()) {
        res.redirect('/quotes');
    } else {
        res.render('login', {
            message: req.flash('message')
        });
    }

});

app.get('/quotes', function (req, res) {
    if(req.isAuthenticated()) {
        res.render('quotes');
    } else {
        res.redirect('/login');
    }
    
});


app.get('/', function (req, res) {
    res.render('index');
});



app.listen(port, function () {
    console.log('App listening on port ' + port);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});


module.exports = app;