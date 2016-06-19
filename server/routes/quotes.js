var express = require('express');
var router = express.Router();
var Quote = require('./../models/quoteModel');
var jwt = require('jsonwebtoken');

var verifyToken = function(token) {
    return jwt.verify(token, process.env.TOKEN_SECRET || 'kitten paws');
};

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
router.post('/create', function(req, res, next) {

    var token = verifyToken(req.headers.authorization);

    if(token._id) {
        var quote = new Quote();
        quote._user = token._id;
        quote.text = req.body.quote;
        quote.author = req.body.author;
        quote.source = req.body.source;


        quote.save(function(err){
            if (err) {
                return next({
                    message: 'Failed to save to db',
                    status: 500
                });
            } else {
                res.status(200).send("Quote saved!")
            }
        });
    } else {
        res.status(401).json({
            "message": "Not authorized"
        });
    }
});

router.delete('delete/:id', function(req, res) {

    var id = req.params.id;
    res.send(id);

   //  Quote.findByIdAndRemove(id, function(err) {
   //     if(err) {
   //         res.send(err);
   //     } else {
   //         res.send('Quote removed');
   //     }
   // })
});

module.exports = router;