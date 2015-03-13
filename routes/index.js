var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.User.findAll({
      include: [ models.Task ]
    }).then(function(users) {
      res.render('index', {
        title: 'Express',
        users: users ? users : false
      });
    });
});

module.exports = router;
