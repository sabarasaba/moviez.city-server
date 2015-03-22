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
        include: [ models.Torrent,
          { model: models.Category, where: category }
        ],
        offset: (params.limit * params.page) - params.limit,
        limit: params.limit
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

export default router;
