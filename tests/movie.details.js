import superagent from 'superagent';
import {expect} from 'chai';
import _ from 'lodash';

const url = 'http://localhost:3000/api/movies/1';

describe('Movies Api details', () => {

  it('Should have the MovieArtwork attribute', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.MovieArtwork).not.to.be.empty;
        expect(res.body.MovieArtwork).to.be.an('object');

        done();
      });
  });

  it('Should have the Directors attribute', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.Directors).not.to.be.empty;
        expect(res.body.Directors).to.be.an('array');

        done();
      });
  });

  it('Should have the Movie attribute', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.Movie).not.to.be.empty;
        expect(res.body.Movie).to.be.an('object');

        done();
      });
  });

  it('Should have the Torrents attribute', (done) => {
    superagent.get(url)
      .end((e, res) => {
        expect(res.body.Torrents).not.to.be.empty;
        expect(res.body.Torrents).to.be.an('array');

        done();
      });
  });

});