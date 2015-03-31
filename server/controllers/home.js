import _ from 'lodash';
import models from '../models';
import express from 'express';

let router = express.Router();

const defaults = {
  limit: 30,
  page: 1,
  category: null
};

router.get('/', (req, res) => {
  let params = _.defaults(req.query, defaults);
  let category = params.category ? {'name': params.category} : {};

  models.Movie.findAndCountAll({
        include: [ models.Torrent,
          { model: models.Category, where: category }
        ],
        offset: (params.limit * params.page) - params.limit,
        limit: params.limit,
        order: [['year', 'DESC']]
      }).then(movies => {
        let data = {
          data: {
            total: movies.count,
            page: parseInt(params.page, 10),
            limit: parseInt(params.limit, 10)
          },
          movies: movies.rows
        };

        res.render('index', data);
      });
});

router.get('/movies/:movie_slug', (req, res) => {
  models.MovieDetails.findOne({
    include: [models.MovieArtwork, models.Director, models.Actor, models.Movie],
    where: {
      'MovieId': req.query.id
    }
  }).then(movie => {
    models.Torrent.findAll({
      where: {
        'MovieId': movie.MovieId
      }
    }).then(torrent => {
      movie.dataValues.Torrents = torrent;

      console.log(movie.dataValues);
      res.render('movie', movie.dataValues);
    });
  }).catch(err => {
    res.json(err);
  });
});

export default router;
