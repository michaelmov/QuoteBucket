var express = require('express');
var router = express.Router();
var Quote = require('./../models/quoteModel');


router.get('/', function(req, res, next) {
    if(req.isAuthenticated()) {
        Quote.find({_user: req.user}).exec(function (err, quotes) {
            if(err) {
                return next({
                    message: 'Failed to query db',
                    status: 500
                });
            }
            res.send(quotes);
        });
    } else {
        res.status(401).send({
            message: 'Not authorized'
        })

    }


});
router.post('/create', function(req, res, next) {
    var q = new Quote();
    q._user = req.user._id;
    q.text = req.body.text;
    q.author = req.body.author;
    q.source = req.body.source;


    q.save(function(err){
        if (err) {
            return next({
                message: 'Failed to save to db',
                status: 500
            });
        } else{
            res.send('Quote saved!');
        }
    });
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