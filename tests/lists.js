import superagent from 'superagent';
import {expect} from 'chai';

const url = 'http://localhost:3000/api/lists';

describe('Lists Api', () => {

  it('Retrieves a collection of lists', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(e).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('lists');
        expect(res.body.lists.length).to.be.above(0);

        done();
      });
  });

  it('Retrieves a single list', (done) => {
    superagent.get(url + '/1')
      .end((e, res) => {
        expect(e).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body.data.movies.length).to.be.above(0);

        done();
      });
  });

  it('Should fail if a single list doesnt exist', (done) => {
    superagent.get(url + '/99999')
      .end((e, res) => {
        expect(e).not.to.be.null;
        expect(e.status).to.equal(500);
        expect(res.body.message).to.equal('That id doesnt exist');

        done();
      });
  });

});