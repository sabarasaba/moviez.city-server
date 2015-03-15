var request = require('request');
var _ = require('lodash');
var Promise = require('bluebird');
var models  = require('./models');


var fetchMovie = function(options) {
  return new Promise(function(resolve, reject) {
    request({url: 'https://yts.re/api/v2/list_movies.json', qs: options}, function(err, res, body) {
      if (!err && res.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    });
  });
};

Promise.promisifyAll(request);
var options = {};
var current = Promise.resolve();


var saveOneMovie = function(movie) {
  return new Promise(function(resolve, reject) {
    var sanitized = _.omit(movie, 'genres', 'state', 'torrents', 'date_uploaded', 'date_uploaded_unix', 'id');
    sanitized._id = movie.id;

    models.Movie.create(sanitized).then(function(m) {
      resolve(_.extend(movie, {dbObject: m}));
    }).catch(function(err) {
      reject(err);
    });
  });
};


var saveOneDownload = function(download) {
  return new Promise(function(resolve, reject) {
    models.Torrent.create(download.torrent).then(function(torrent) {
      torrent.setMovie(download.dbObject).then(function() {
        resolve(true);
      }).catch(function(err) {
        reject(err);
      });
    }).catch(function(err) {
      reject(err);
    });
  });
};

var saveDownloads = function(movie) {
  return Promise.map(movie.torrents, function(download) {
    return saveOneDownload({
      torrent: download,
      dbObject: movie.dbObject
    });
  });
};

var fetchOneMovie = function(page) {
  return new Promise(function(resolve, reject) {
    fetchMovie({
      minimum_rating: 5,
      limit: 10,
      page: page
    }).then(function(res) {

      Promise.map(res.data.movies, function(movie) {
        return saveOneMovie(movie).then(function(m) {
          return m;
        }).catch(function(e) {
          console.log(movie.title + ' => Already stored..');
        });
      }).map(function(movie) {
        if (movie) {
          return saveDownloads(movie);
        } else {
          return current;
        }
      }).then(function(data) {
        console.log('All done !');
        resolve();
      }).catch(function(err) {
        console.log(err);
        console.log('Couldnt insert some movie');
      });

    }).catch(function(err) {
      console.log(err);
      reject(err);
    });
  });
};


var fetchFromPages = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15];

Promise.map(fetchFromPages, function(page) {
  return fetchOneMovie(page);
}).then(function() {
  console.log('Fetched everything !');
}).catch(function(err) {
  console.log(err);
  console.log('Something went wrong..');
});