import models from '../models';
import express from 'express';
import _ from 'lodash';

let router = express.Router();

const defaults = {
  limit: 10,
  page: 1,
  category: null
};

router.get('/', (req, res) => {
  let params = _.defaults(req.query, defaults);
  let category = params.category ? {'name': params.category} : {};

  models.Movie.findAndCountAll({
        include: [ { model: models.Categories, where: category } ],
        offset: (params.limit * params.page) - params.limit,
        limit: params.limit,
        order: [['release_date', 'DESC']]
      }).then(movies => {
        res.json({
          data: {
            total: movies.count,
            page: parseInt(params.page, 10),
            limit: parseInt(params.limit, 10)
          },
          movies: movies.rows
        });
      });
});

router.get('/:movie_id', (req, res) => {

  models.Movie.findOne({
    include: [
      models.Categories,
      models.Actors
    ],
    where: {
      'id': req.params.movie_id
    }
  }).then(movie => {
    res.json(movie);
  }).catch(err => {
    res.json(err);
  });

});

export default router;
