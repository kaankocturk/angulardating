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
  User.findOne({email: req.params.email}, function(err,user){
    console.log(user);
    res.send(user);
  });
});

module.exports = router;
