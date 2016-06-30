var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userModel');

var quoteSchema = new Schema({

    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    },
    author: {
        type: String,
        default: 'Unknown author'
    },
    favorite: {
        type: Boolean,
        default: false
    },
    source: {
        type: String,
    }
});

// quoteSchema.pre('save', function(next) {
//     user.findByIdAndUpdate(this._creator, { $push: { quotes: this._id }}, function (err, model) {
//         console.log(err);
//     });
//     next();
// });

module.exports = mongoose.model('Quote', quoteSchema);