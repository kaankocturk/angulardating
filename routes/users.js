'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/update', function(req, res) {
  console.log(req.body);
  User.update({email: req.body.email}, {$set : req.body.data}, function(err,user){
    console.log(user);
    res.send(user);
  });
});

router.get('/current:email', function(req, res) {
  console.log(req.body);
  User.findOne({email: req.params.email}).populate('winks').exec(function(err,user){
    console.log(user);
    res.send(user);
  });
});

router.put('/', function(req, res) {
  console.log(req.body);
  User.find(req.body.filter, function(err,users){
    console.log(users);
    users = users.filter(function(user){
      return  user.email===req.body.email ? false : true;
    });
    res.send(users);
  });
});

router.put('/wink', function(req, res) {
  console.log('winks',req.body);
  User.findOne({_id: req.body.id}, function(err, user){
    User.findOne({email: req.body.email}, function(err,user2){
      user.winks.push(user2._id);
      user.save(function(err, saveditem) {
        console.log('errsavinguser:', err);
        console.log('saveduser:', saveditem);
      });
    });
    res.send(user);
  });
});

module.exports = router;
