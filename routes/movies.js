var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
  models.Movie.findAll({
      include: [ models.Torrent ]
    }).then(function(movies) {
      res.json({
        movies: movies
      });
    });
});

module.exports = router;