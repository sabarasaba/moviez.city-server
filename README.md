Moviez.io
=======
<img src="http://img.shields.io/badge/npm-v1.3.11-blue.svg">
<img src="http://img.shields.io/packagist/l/doctrine/orm.svg">


```
$ npm install
$ npm install -g sequelize-cli
```

##PM2 Scheduler

```
$ pm2 start ./src/bin/www -n Api --interpreter /root/.nvm/v0.12.4/bin/babel-node
$ pm2 start index.js -n Worker --cron '0 10 * * *' --interpreter /root/.nvm/v0.12.4/bin/babel-node
```

## License

Copyright (c) 2015 Sabarasaba - Ignacio Rivas

Licensed under the MIT license.