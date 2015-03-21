import movies from './movies';
import home from './home';
import lists from './lists';
import categories from './categories';

export default {
  load: (app) => {
    app.use('/', home);
    app.use('/api/movies', movies);
    app.use('/api/lists', lists);
    app.use('/api/categories', categories);
  }
};
