'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/update', function(req, res) {
  console.log(req.body);
  // User.update({_id: req.params.id}, {$set : req.body}, function(err){
  //   res.send('ok');
  // });
  User.findOne({email: req.body.user.email}, function(err, user) {
    console.log(user);

    res.send(user);
  });
});


module.exports = router;
