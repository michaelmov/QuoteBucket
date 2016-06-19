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
var jwt = require('express-jwt');
require('./config/passport')(passport);

var auth = require('./routes/auth')(passport);
var quotes = require('./routes/quotes');

var port = process.env.PORT || 3000;

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../client/views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,  '../client')));



// Connect to DB
mongoose.connect(db.url);


// Session setup
// app.use(session({
//     secret: process.env.SESSION_SECRET || 'kitten paws',
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//     },
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoStore({
//         mongooseConnection: mongoose.connections[0],
//         collection: 'sessions'
//     })
// }));

// Passport setup
app.use(passport.initialize());
// app.use(passport.session());
app.use(flash());
// app.use(jwt({
//     secret: process.env.TOKEN_SECRET || 'kitten paws'
// }));

// Load API routes
app.use('/api/auth', auth);
app.use('/api/quotes', quotes);

// General routes
app.get('/*', function (req, res) {
    res.render('app');
});



app.listen(port, function () {
    console.log('App listening on port ' + port);
});


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Error handlers

// Development error handler
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

// Production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});


module.exports = app;