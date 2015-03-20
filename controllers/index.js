import api from './api';
import home from './home';
import lists from './lists';

export default {
  load: (app) => {
    app.use('/', home);
    app.use('/api', api);
    app.use('/api/lists', lists);
  }
};
