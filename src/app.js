import express from 'express';
import server from './server';

import controllers from './controllers';


// Instanciate the API controllers.
controllers.load(server);



// ERROR HANDLER: development
if (server.get('env') === 'development') {
  server.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// ERROR HANDLER: production
server.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: 'Server cannot process requests at this moment',
    error: err
  });
});

// catch 404 and forward to error handler
server.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


export default server;
