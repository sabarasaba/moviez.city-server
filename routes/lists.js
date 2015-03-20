var models  = require('../models');
var express = require('express');
var _       = require('lodash');
var router  = express.Router();


var lists = [
  {
    id: 1,
    title: '5 Bests Movies of March 2015',
    image: 'http://www.lonelyplanet.com/themes/best-in-travel/top-10-cities/images/san-francisco.jpg',
    movies: [3201, 3202, 3203, 3204, 3205]
  },
  {
    id: 2,
    title: '5 Movies of 2014 that you should see',
    image: 'http://www.lonelyplanet.com/themes/best-in-travel/top-10-cities/images/san-francisco.jpg',
    movies: [3301, 3302, 3303, 3304, 3305]
  },
  {
    id: 3,
    title: '5 Movies of 2013 that you should see',
    image: 'http://www.lonelyplanet.com/themes/best-in-travel/top-10-cities/images/san-francisco.jpg',
    movies: [3401, 3402, 3403, 3404, 3405]
  }
];

router.get('/', function(req, res, next) {
  var sanitizedLists = _.chain(lists).map(function(el) {
    return _.omit(el, 'movies');
  });

  res.json({
    lists: sanitizedLists
  });
});


router.get('/:movie_id', function(req, res, next) {
  res.json({
    'list': _.where(lists, {id: parseInt(req.params.movie_id, 10)})
  });
});


module.exports = router;