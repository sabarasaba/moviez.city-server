import supertest from 'supertest';
import {expect} from 'chai';

import App from '../src/app';

describe('Lists Api', () => {
  let server;

  before ((done) => {
    server = App.listen('3001', (err, result) => {
      done(err);
    });
  });

  after(() => {
    server.close();
  });

  it('Retrieves a collection of lists', (done) => {
    supertest(App)
      .get('/api/lists')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(err).to.equal(null);
        expect(res.body).to.have.property('lists');
        expect(res.body.lists.length).to.be.above(0);

        done();
      });
  });

  it('Retrieves a single list', (done) => {
    supertest(App)
      .get('/api/lists/1')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        expect(err).to.equal(null);
        expect(res.body).to.have.property('data');
        expect(res.body.data.movies.length).to.be.above(0);

        done();
      });
  });

  it('Should fail if a single list doesnt exist', (done) => {
    supertest(App)
      .get('/api/lists/9999')
      .expect('Content-Type', /json/)
      .expect(500, (err, res) => {
        expect(res.body.message).to.equal('That id doesnt exist');

        done();
      });
  });

});