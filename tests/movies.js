import superagent from 'superagent';
import {expect} from 'chai';
import _ from 'lodash';

const url = 'http://localhost:3000/api/movies';

describe('Movies Api structure', () => {

  it('Default query should have a list of movies', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(e).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('movies');
        expect(res.body.movies).to.be.an('array');
        expect(res.body.movies.length).to.be.above(0);

        done();
      });
  });

  it('Shoudnt be able to post', (done) => {
    superagent.post(url)
      .end((e, res) => {
        expect(e).not.to.be.null;
        expect(e.status).to.equal(404);

        done();
      });
  });

  it('Shoudnt be able to delete', (done) => {
    superagent.del(url)
      .end((e, res) => {
        expect(e).not.to.be.null;
        expect(e.status).to.equal(404);

        done();
      });
  });

});