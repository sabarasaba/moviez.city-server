import models from '../models';
import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  models.sequelize.query('SELECT DISTINCT `name` FROM `Categories` ORDER BY `name` ASC', { type: models.sequelize.QueryTypes.SELECT})
    .then((categories) => {
      res.json({
        total: categories.length,
        categories: categories
      });
    });
});

export default router;
