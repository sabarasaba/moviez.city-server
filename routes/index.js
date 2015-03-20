var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Movie.findAll({
        include: [ models.Torrent ]
      }).then(function(movies) {
        res.render('index', {
          title: 'page title',
          movies: movies
        });
      });
});

module.exports = router;
