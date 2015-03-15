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

var data = {
  url: 'https://yts.re/movie/someone-marry-barry-2014',
  imdb_code: 'tt1978532',
  title: 'Someone Marry Barry',
  title_long: 'Someone Marry Barry (2014)',
  year: 2014,
  rating: 5.9,
  runtime: 87,
  language: 'English',
  mpa_rating: 'MA15+',
  small_cover_image: 'https://s.ynet.io/assets/images/movies/someone_marry_barry_2014/small-cover.jpg',
  medium_cover_image: 'https://s.ynet.io/assets/images/movies/someone_marry_barry_2014/medium-cover.jpg'
};

var torrent = {
  "url": "https://yts.re/torrent/download/8E563E6FE2BB6863131DB5E3BBB9E8BB58B80645.torrent",
  "hash": "8E563E6FE2BB6863131DB5E3BBB9E8BB58B80645",
  "quality": "720p",
  "seeds": 0,
  "peers": 0,
  "size": "696.25 MB",
  "size_bytes": 730070342
};

router.post('/', function(req, res, next) {
  models.Movie.create(data).then(function(movie) {

    models.Torrent.create(torrent).then(function(download) {
      download.setMovie(movie).then(function() {
        res.json({
          response: 'all good'
        });
      }).catch(function(err) {
        res.json({
          error: err
        });
      });
    }).catch(function(err) {
      res.json({
        error: err
      });
    });
  }).catch(function(err) {
    res.json({
      error: err
    });
  });
});

module.exports = router;