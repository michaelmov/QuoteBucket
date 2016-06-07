var localStrategy = require('passport-local').Strategy;
var User = require('./../models/userModel');

module.exports = function (passport) {

    passport.use(new localStrategy( {
        passReqToCallback : true
    },
        function(req, username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if(err) {
                    return done(err);
                }
                if(!user) {
                    return done(null, false, req.flash('message', 'Incorrect username or password'));
                }
                if (!user.validatePassword(password)) {
                    return done(null, false, req.flash('message', 'Incorrect username or password'));
                }
                return done(null, user);
            });
        }
    ));
};
