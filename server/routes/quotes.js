var express = require('express');
var router = express.Router();
var Quote = require('./../models/quoteModel');
var jwt = require('jsonwebtoken');


// Verify token with the secret key
var verifyToken = function(token) {
    return jwt.verify(token, process.env.TOKEN_SECRET || 'kitten paws');
};

// Get all quotes belonging to the currently logged in user
router.get('/', function(req, res, next) {

    var token = verifyToken(req.headers.authorization);

    if(token._id) {
        Quote.find({_user: token._id}).exec(function (err, quotes) {
            if(err) {
                return next({
                    message: 'Failed to query db',
                    status: 500
                });
            }
            res.json(quotes);
        });
    } else {
        res.status(401).json({
            "message": "Not authorized"
        });

    }


});


// Add a new quote
router.post('/create', function(req, res, next) {

    var token = verifyToken(req.headers.authorization);

    if(token._id) {
        var quote = new Quote();
        quote._user = token._id;
        quote.text = req.body.text;
        if(req.body.author) {
            quote.author = req.body.author;
        }
        
        quote.source = req.body.source;


        quote.save(function(err){
            if (err) {
                return next({
                    message: 'Failed to save to db',
                    status: 500
                });
            } else {
                res.status(200).send("Quote saved")
            }
        });
    } else {
        res.status(401).json({
            "message": "Not authorized"
        });
    }
});


// Delete a quote
router.delete('/delete/:id', function(req, res) {

    var token = verifyToken(req.headers.authorization);

    if(token._id) {
        var quoteId = req.params.id;

        Quote.findByIdAndRemove(quoteId, function(err, quote) {
            if(err) {
                return next({
                    message: 'Couldn\'t delete quote',
                    status: 500
                });
            } else {
                res.status(200).send('Quote removed');
            }
        });
    }
});

router.put('/update/:id', function(req, res) {
    var token = verifyToken(req.headers.authorization);
    var quoteId = req.params.id;

    if(token._id) {
        Quote.findByIdAndUpdate(quoteId,
            {
                text: req.body.text,
                author: req.body.author,
                favorite: req.body.favorite,
                source: req.body.source
            },
            function(err) {
                if(err) {
                    return next(err);
                } else {
                    res.status(200).send('Quote updated');
                }
            });
    }

});

module.exports = router;