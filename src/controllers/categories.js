import models from '../models';
import express from 'express';
import _ from 'lodash';

let router = express.Router();

router.get('/', (req, res) => {
  models.sequelize.query('SELECT DISTINCT name FROM "Categories" ORDER BY name ASC', { type: models.sequelize.QueryTypes.SELECT})
    .then((categories) => {
      const data = _.map(categories, (e, key) => {
        e.id = key;

        return e;
      });

      res.json({
        meta: {
          total: categories.length,
        },
        categories: data
      });
    });
});

export default router;
