import supertest from 'supertest';
import {expect} from 'chai';
import _ from 'lodash';

import App from '../src/app';

describe('Movies Api pagination', () => {
  let server;

  before ((done) => {
    server = App.listen('3001', (err, result) => {
      done(err);
    });
  });

  after(() => {
    server.close();
  });

  it('Should return 10 results on query', (done) => {
    supertest(App)
      .get('/api/movies')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.movies.length).to.equal(10);

        done();
      });
  });

  it('Should have a metea attribute with pagination data', (done) => {
    supertest(App)
      .get('/api/movies')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.meta).to.exist;
        expect(res.body.meta).to.be.an('object');

        done();
      });
  });

  it('Should use defaults if no query params were provided', (done) => {
    supertest(App)
      .get('/api/movies')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.meta.page).to.equal(1);
        expect(res.body.meta.limit).to.equal(10);

        done();
      });
  });

  it('Should be able to limit queries with limit param', (done) => {
    supertest(App)
      .get('/api/movies?limit=2')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.movies.length).to.equal(2);

        done();
      });
  });

  it('Should be able to specify an offset for pagination', (done) => {
    supertest(App)
      .get('/api/movies')
      .query({ limit: 2 })
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.movies.length).to.equal(2);

        done();
      });
  });

  it('Should be able to paginate with offset', (done) => {
    supertest(App)
      .get('/api/movies')
      .query({ limit: 2, page: 2 })
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body.meta.page).to.equal(2);
        expect(res.body.movies.length).to.equal(2);

        done();
      });
  });

});