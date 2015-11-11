import movies from './movies';
import home from './home';
import lists from './lists';
import categories from './categories';
import client from './client';

export default {
  load: (app) => {
    app.use('/', home);
    app.use('/app', client);
    app.use('/api/movies', movies);
    app.use('/api/lists', lists);
    app.use('/api/categories', categories);
  }
};
