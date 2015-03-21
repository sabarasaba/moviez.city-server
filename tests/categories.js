import superagent from 'superagent';
import {expect} from 'chai';
import _ from 'lodash';

const url = 'http://localhost:3000/api/categories';

describe('Categories Api', () => {

  it('Retrieves a collection of categories', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(e).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('categories');
        expect(res.body).to.have.property('total');
        expect(res.body.total).to.be.a('number');
        expect(res.body.categories.length).to.be.above(0);

        done();
      });
  });

  it('Categories collection doesnt have duplicates', (done) => {
    superagent.get(url)
      .end((e, res) => {
        let uniques = _.uniq(res.body.categories, true);
        expect(_.difference(uniques, res.body.categories)).to.be.empty;

        done();
      });
  });

  it('Categories are sorted', (done) => {
    superagent.get(url)
      .end((e, res) => {
        let iterator = (value, index, array) => {
          return index === 0 || String(array[index - 1]) <= String(value);
        };

        expect(_.every(res.body.categories, iterator)).to.be.true;

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