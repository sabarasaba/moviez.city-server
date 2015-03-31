import superagent from 'superagent';
import {expect} from 'chai';
import _ from 'lodash';

const url = 'http://localhost:3000/api/movies';

describe('Movies Api categories', () => {

  it('Should return movies with the specified category', (done) => {
    superagent.get(url + '?category=Comedy')
      .end((e, res) => {
        var iterator = (category) => {
          return category.name === 'Comedy';
        };

        expect(_.every(res.body.movies.Categories, iterator)).to.be.true;

        done();
      });
  });

});