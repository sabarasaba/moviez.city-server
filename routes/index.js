import models from '../models';
import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
  models.Movie.findAll({
        include: [ models.Torrent ]
      }).then(movies => {
        res.render('index', {
          title: 'page title',
          movies: movies
        });
      });
});

export default router;
