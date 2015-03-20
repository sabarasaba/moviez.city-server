import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import controllers from './controllers';

let app = express();

//CORS middleware
let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(allowCrossDomain);

app.use(express.static(path.join(__dirname, 'public')));


// Instanciate the API controllers.
// app.use('/api', api);
controllers.load(app);




// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLER: development
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// ERROR HANDLER: production
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: 'Server cannot process requests at this moment',
    error: err
  });
});


export default app;
