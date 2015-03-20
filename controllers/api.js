import models from '../models';
import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  models.Movie.findAll({
        include: [ models.Torrent ]
      }).then(movies => {
        res.json({
          movies: movies
        });
      });
});

export default router;
