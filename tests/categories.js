import supertest from 'supertest';
import {expect} from 'chai';
import _ from 'lodash';

import App from '../src/app';

describe('Categories Api', () => {
  let server;

  before ((done) => {
    server = App.listen('3001', (err, result) => {
      done(err);
    });
  });

  after(() => {
    server.close();
  });

  it('Retrieves a collection of categories', (done) => {
    supertest(App)
      .get('/api/categories')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(res.body).to.have.property('categories');
        expect(res.body).to.have.property('meta');
        expect(res.body.meta.total).to.be.a('number');
        expect(res.body.categories.length).to.be.above(0);

        done();
      });
  });

  it('Categories collection doesnt have duplicates', (done) => {
    supertest(App)
      .get('/api/categories')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        let uniques = _.uniq(res.body.categories, true);
        expect(_.difference(uniques, res.body.categories)).to.be.empty;

        done();
      });
  });

  it('Categories are sorted', (done) => {
    supertest(App)
      .get('/api/categories')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        let iterator = (value, index, array) => {
          return index === 0 || String(array[index - 1]) <= String(value);
        };

        expect(_.every(res.body.categories, iterator)).to.be.true;

        done();
      });
  });

  it('Shoudnt be able to post', (done) => {
    supertest(App)
      .post('/api/categories')
      .expect(404, done);
  });

  it('Shoudnt be able to delete', (done) => {
    supertest(App)
      .del('/api/categories')
      .expect(404, done);
  });

});