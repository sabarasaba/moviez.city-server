import models from '../models';
import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
  models.Movie.findAll({
      include: [ models.Torrent ]
    }).then(movies => {
      res.json({
        movies: movies
      });
    });
});

router.post('/', (req, res, next) => {
  res.json({
    response: 'all good'
  });
  // models.Movie.create(data).then(function(movie) {

  //   models.Torrent.create(torrent).then(function(download) {
  //     download.setMovie(movie).then(function() {
  //       res.json({
  //         response: 'all good'
  //       });
  //     }).catch(function(err) {
  //       res.json({
  //         error: err
  //       });
  //     });
  //   }).catch(function(err) {
  //     res.json({
  //       error: err
  //     });
  //   });
  // }).catch(function(err) {
  //   res.json({
  //     error: err
  //   });
  // });
});

export default router;
