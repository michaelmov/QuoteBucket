var localStrategy = require('passport-local').Strategy;
var User = require('./../models/userModel');

module.exports = function(passport) {

    passport.use(new localStrategy({
        usernameField: 'email'
    },

        function(email, password, done) {
            User.findOne({ username: email }, function(err, user) {
                if(err) {
                    return done(err);
                }
                if(!user) {
                    return done(null, false, {message : 'Incorrect username or password. Please try again'});
                }
                if (!user.validatePassword(password)) {
                    return done(null, false, {message : 'Incorrect username or password. Please try again'});
                }
                return done(null, user);
            });
        }
    ));

    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });
    //
    // passport.deserializeUser(function(id, done) {
    //     User.findById(id, function(err, user) {
    //         done(err, user);
    //     });
    // });

};
