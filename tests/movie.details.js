import supertest from 'supertest';
import {expect} from 'chai';
import _ from 'lodash';

import App from '../src/app';

describe('Movies Api details', () => {
  let server;

  before ((done) => {
    server = App.listen('3001', (err, result) => {
      done(err);
    });
  });

  after(() => {
    server.close();
  });

  it('Should have the a poster and a backdrop attribute', (done) => {
    supertest(App)
      .get('/api/movies/1')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.poster_path).not.to.be.empty;
        expect(res.body.backdrop_path).not.to.be.empty;

        done();
      });
  });

  it('Should have the Downloads attribute', (done) => {
    supertest(App)
      .get('/api/movies/1')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.download).not.to.be.empty;
        expect(res.body.download).to.be.an('object');

        done();
      });
  });

  it('Should have the Categories attribute', (done) => {
    supertest(App)
      .get('/api/movies/1')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.Categories).not.to.be.empty;
        expect(res.body.Categories).to.be.an('array');

        done();
      });
  });

  it('Should have the Imdb attribute', (done) => {
    supertest(App)
      .get('/api/movies/1')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.imdb).not.to.be.empty;
        expect(res.body.imdb).to.be.an('object');

        done();
      });
  });

});