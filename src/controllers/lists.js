import models from '../models';
import express from 'express';
import _ from 'lodash';

let router = express.Router();


const lists = [
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

router.get('/', (req, res, next) => {
  const sanitizedLists = _.chain(lists).map(el => {
    return _.omit(el, 'movies');
  });

  res.json({
    'lists': sanitizedLists
  });
});

router.get('/:movie_id', (req, res, next) => {
  const list = _.where(lists, {id: parseInt(req.params.movie_id, 10)})[0];

  if (_.isUndefined(list)) {
    res.status(500);
    res.json({
      message: 'That id doesnt exist'
    });
  } else {
    res.json({
      'list': list
    });
  }
});


export default router;
