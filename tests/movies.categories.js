import supertest from 'supertest';
import {expect} from 'chai';
import _ from 'lodash';

import App from '../src/app';

describe.only('Movies Api categories', () => {
  let server;

  before ((done) => {
    server = App.listen('3001', (err, result) => {
      done(err);
    });
  });

  after(() => {
    server.close();
  });

  it('Should return movies with the specified category', (done) => {
    supertest(App)
      .get('/api/movies?category=Comedy')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        const nonComedyMovies = _.filter(res.body.movies, function(e) {
          return !_.some(e.Categories, 'name', 'Comedy');
        });

        expect(nonComedyMovies).to.be.empty;

        done();
      });
  });

});
