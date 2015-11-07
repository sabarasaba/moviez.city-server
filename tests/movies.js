import supertest from 'supertest';
import {expect} from 'chai';
import _ from 'lodash';

import App from '../src/app';
// const url = 'http://localhost:3000/api/movies';

describe('Movies Api structure', () => {
  let server;

  before ((done) => {
    server = App.listen('3001', (err, result) => {
      done(err);
    });
  });

  after(() => {
    server.close();
  });

  it('Default query should have a list of movies', (done) => {
    supertest(App)
      .get('/api/movies')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body).to.have.property('movies');
        expect(res.body.movies).to.be.an('array');
        expect(res.body.movies.length).to.be.above(0);

        done();
      });
  });

  it('Shoudnt be able to post', (done) => {
    supertest(App)
      .post('/api/movies')
      .expect(404, done);
  });

  it('Shoudnt be able to delete', (done) => {
    supertest(App)
      .del('/api/movies')
      .expect(404, done);
  });

  it('Shoudnt be able to put', (done) => {
    supertest(App)
      .put('/api/movies')
      .expect(404, done);
  });

});