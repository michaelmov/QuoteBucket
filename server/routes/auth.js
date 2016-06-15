var express = require('express');
var router = express.Router();
var User = require('./../models/userModel');

module.exports = function (passport) {
    
    function isAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.status(401).send({
            message: 'Not authorized'
        })
    }


    router.post('/login', function(req, res, next) {

        passport.authenticate('local', function (err, user, info) {
            var token;

            if(err) {
                return next(err);
            }

            if(user) {
                token = user.generateJwt();
                res.status(200).json({
                    "token" : token
                })
            } else {
                return next({
                    message: info,
                    status: 401
                });
            }
        })(req, res);
    });


    router.post('/register', function (req, res, next) {
        var user = new User();

        user.name = req.body.name;
        user.username = req.body.email;
        user.password = user.generateHash(req.body.password);

        user.save(function(err) {
            var token = user.generateJwt();
            if (err) {
                return next({
                    message: 'Couldn\'t register an account',
                    status: 500
                });
            } else {
                res.status(200).json({
                    "message" : "Registration success",
                    "token" : token
                });
            }
        });
    });

    // router.get('/user', isAuthenticated, function(req, res){
    //     res.send(req.user);
    // });
    //
    // router.get('/logout', function(req, res) {
    //     req.logout();
    //     res.redirect('/login');
    // });

    return router;
};


