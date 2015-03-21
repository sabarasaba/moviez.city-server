var request = require('request');
var _ = require('lodash');
var Promise = require('bluebird');
var models  = require('../models');


var fetchMovie = function(url, options) {
  return new Promise(function(resolve, reject) {
    request({url: url, qs: options}, function(err, res, body) {
      if (!err && res.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        console.log('ERROR FETCHING => ' + res.statusCode);
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
        resolve(download);
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
      movie: movie,
      torrent: download,
      dbObject: movie.dbObject
    });
  });
};

var saveCategory = function(data) {
  return new Promise(function(resolve, reject) {
    Promise.map(data[0].movie.genres, function(genre) {
      models.Category.create({
        name: genre
      }).then(function(category) {
        category.setMovie(data[0].dbObject).then(function() {
          resolve(data);
        }).catch(function(err) {
          reject(err);
        });
      }).catch(function(err) {
        reject(err)
      });
    });
  });
};

var fetchOneMovie = function(page) {
  return new Promise(function(resolve, reject) {
    fetchMovie('https://yts.im/api/v2/list_movies.json', {
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
      }).map(function(movie) {
        if (movie) {
          return saveCategory(movie);
        } else {
          return current;
        }
      }).then(function(data) {
        console.log('List fetching succeded !');
        resolve(_.pluck(res.data.movies, 'id'));
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



var getMovieById = function(id) {
  return new Promise(function(resolve, reject) {

    models.Movie.find({
      where: { _id: id }
    }).then(function(movie) {
      resolve(movie);
    }).catch(function(err) {
      reject(err);
    });
  });
};


var storeMovieDetails = function(response) {
  return new Promise(function(resolve, reject) {
    var data = _.pick(response.data, 'yt_trailer_code', 'description_intro', 'description_full');
    data._id = response.data.id;

    models.MovieDetails.create(data).then(function(details) {

      getMovieById(response.data.id).then(function(movie) {
        details.setMovie(movie).then(function() {
          resolve(_.extend(response, {
            detailsObject: details
          }));
        });
      });

    }).catch(function(err) {
      reject(err);
    });
  });
};


var storeMovieArtwork = function(response) {
  return new Promise(function(resolve, reject) {
    models.MovieArtwork.create(response.data.images).then(function(artwork) {
      artwork.setMovieDetail(response.detailsObject).then(function(m) {
        resolve(response);
      }).catch(function(err) {
        reject(err);
      });

    }).catch(function(err) {
      reject(err);
    });
  });
};


var storeMovieDirectors = function(response) {
  return Promise.map(response.data.directors, function(director) {
      return models.Director.create(director).then(function(directorObject) {
        directorObject.setMovieDetail(response.detailsObject).then(function(d) {
          return response;
        }).catch(function(err) {
          console.log('ERROR seting movie detail');
          return err;
        });
      }).catch(function(err) {
        console.log('ERROR creating director');
        return err
      });
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      console.log('ERROR ADDING DIRECTOR');
      return err;
    });
};

var storeMovieActors = function(response) {
  return new Promise(function(resolve, reject) {
    Promise.map(response.data.actors, function(actor) {
      var tmp = _.omit(actor, 'character_name');
      tmp.character = actor.character_name;

      return models.Actor.create(tmp).then(function(actorObject) {
        actorObject.setMovieDetail(response.detailsObject).then(function(d) {
          return response;
        }).catch(function(err) {
          console.log('ERROR seting movie detail');
          return err
        });
      }).catch(function(err) {
        console.log('ERROR creating actor');
        return err
      });
    }).then(function(response) {
      resolve(response);
    }).catch(function(err) {
      console.log('ERROR ADDING ACTOR');
      reject(err);
    });
  });
};


var fetchOneMovieDetail = function(id) {
  return new Promise(function(resolve, reject) {
    fetchMovie('https://yts.im/api/v2/movie_details.json', {
      movie_id: id,
      with_images: true,
      with_cast: true
    }).then(storeMovieDetails)
    .then(storeMovieArtwork)
    .then(function(response) {
      return Promise.all(storeMovieDirectors(response), storeMovieActors(response)).then(function(res) {
        return true;
      });
    })
    .then(function(res) {
      console.log('Movie details stored !');
      resolve();
    }).catch(function(err) {
      console.log(err);
      console.log('Error storing a movie details');
      resolve();
    });
  });
};


var fetchFromPages = [4];

Promise.map(fetchFromPages, function(page) {
  return fetchOneMovie(page);
}).then(function(movieIds) {
  return Promise.map(_.flatten(movieIds), function(id) {
    return fetchOneMovieDetail(id);
  });
}).then(function() {
  console.log('Fetched everything !');
}).catch(function(err) {
  console.log(err);
  console.log('Something went wrong..');
});