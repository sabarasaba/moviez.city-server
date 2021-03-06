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
        include: [
          { model: models.Actors, required: false },
          { model: models.Categories, where: category, required: true }
        ],
        offset: (params.limit * params.page) - params.limit,
        limit: params.limit,
        order: [['release_date', 'DESC']]
      }).then(movies => {
        /**
         * findAndCountAll with requireds = false, will return the right count number
         * but wont have the included models when filtering by category or actor. I
         * suspect is a bug from sequelize, so ill just skip it by counting records
         * using a new query.
         */
        models.Movie.findAndCountAll().then((data) => {
          res.json({
            meta: {
              total: Math.ceil(data.count / parseInt(params.limit, 10)),
              page: parseInt(params.page, 10),
              limit: parseInt(params.limit, 10)
            },
            movies: movies.rows
          });
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
      'slug': req.params.movie_id
    }
  }).then(movie => {
    res.json({
      movie: movie
    });
  }).catch(err => {
    res.json(err);
  });

});

export default router;
