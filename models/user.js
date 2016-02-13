'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');

var User;

var userSchema = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  age: Number,
  eye: String,
  hair: String,
  gender: String,
  pp: String,
  interested: String,
  alcohol: String,
  smoker: Boolean,
  winks: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

userSchema.methods.token = function() {
  var payload = {
    email: this.email,
    _id: this._id
  };
  var secret = process.env.JWT_SECRET;
  var token = jwt.encode(payload, secret);
  return token;
};

userSchema.statics.register = function(user, cb) {
  var email = user.email;
  var password = user.password;
  User.findOne({email: email}, function(err, user){
    if(err || user) return cb(err || 'email already taken.');
    bcrypt.genSalt(10, function(err1, salt) {
      bcrypt.hash(password, salt, function(err2, hash) {
        if(err1 || err2) return cb(err1 || err2);
        var newUser = new User();
        newUser.email = email;
        newUser.password = hash;
        newUser.save(function(err, savedUser){
          savedUser.password = null;
          cb(err, savedUser);
        });
      });
    });
  });
};

userSchema.statics.authenticate = function(inputUser, cb){
  User.findOne({email: inputUser.email}, function(err, dbUser) {
    if(err || !dbUser) return cb(err || 'Incorrect email or password.');
    bcrypt.compare(inputUser.password, dbUser.password, function(err, isGood){
      if(err || !isGood) return cb(err || 'Incorrect email or password.');
      dbUser.password = null;
      cb(null, dbUser);
    });
  });
};

User = mongoose.model('User', userSchema);
module.exports = User;
