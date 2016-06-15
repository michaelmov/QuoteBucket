var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function() {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        username: this.username
    }, process.env.TOKEN_SECRET || 'kitten paws', {
        expiresIn: "30  days"
    });
};

module.exports = mongoose.model('User', userSchema);



