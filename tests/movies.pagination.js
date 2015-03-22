import superagent from 'superagent';
import {expect} from 'chai';
import _ from 'lodash';

const url = 'http://localhost:3000/api/movies';

describe('Movies Api pagination', () => {

  it('Should return 10 results on query', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.movies.length).to.equal(10);

        done();
      });
  });

  it('Should have a data attribute with pagination data', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.data).to.exist;
        expect(res.body.data).to.be.an('object');

        done();
      });
  });

  it('Should use defaults if no query params were provided', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.data.page).to.equal(1);
        expect(res.body.data.limit).to.equal(10);

        done();
      });
  });

  it('Should be able to limit queries with limit param', (done) => {
    superagent.get(url + '?limit=2')
      .end((e, res) => {
        expect(res.body.movies.length).to.equal(2);

        done();
      });
  });

  it('Should be able to specify an offset for pagination', (done) => {
    superagent.get(url + '?page=2')
      .end((e, res) => {
        expect(res.body.data.page).to.equal(2);

        done();
      });
  });

  it('Should be able to paginate with offset', (done) => {
    superagent.get(url + '?limit=2&page=2')
      .end((e, res) => {
        expect(res.body.data.page).to.equal(2);
        expect(res.body.movies.length).to.equal(2);

        done();
      });
  });

});