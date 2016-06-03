var localStrategy = require('passport-local').Strategy;
var User = require('./../models/userModel');

module.exports = function (passport) {

    passport.use(new localStrategy(
        function(username, password, done) {
            User.findOne({ username: username}, function(err, user) {
                if(err) {
                    return done(err);
                }
                if(!user) {
                    return done(null, false, {message: 'Incorrect username.'});
                }
                if (!user.validatePassword(password)) {
                    return done(null, false, {message: 'Incorrect password.'});
                }

                return done(null, user);
            });
        }
    ));
};
