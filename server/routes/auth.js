var express = require('express');
var router = express.Router();
var User = require('./../models/userModel');

module.exports = function (passport) {
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    function isAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.status(401).send({
            message: 'Not authorized'
        })
    }



    router.post('/login', passport.authenticate('local', {
        successRedirect: '/quotes',
        failureRedirect: '/login',
        failureFlash: true
    }));


    router.post('/register', function (req, res, next) {
        var u = new User();

        u.name = req.body.name;
        u.username = req.body.username;
        u.password = u.generateHash(req.body.password);

        u.save(function(err) {
            if (err) {
                return next({
                    message: 'Couldn\'t register an account',
                    status: 500
                });
            }
            else {
                res.json({'alert':'Registration success'});
            }
        });
    });

    router.get('/user', isAuthenticated, function(req, res){
        res.send(req.user);
    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    return router;
};


