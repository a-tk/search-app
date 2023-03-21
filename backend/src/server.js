const express = require('express');
const log4js = require('log4js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const log = log4js.getLogger('app');

log4js.configure({
  appenders: { logfile: { type: 'file', filename: 'logs/app.log' }, stdout: { type: 'stdout' } },
  categories: { default: { appenders: ['logfile', 'stdout'], level: 'info' } },
});

// configuration per environment
const environment = process.argv[2] || app.get('env') || 'development';

const serverConfig = require('../env.json')[environment];

if (serverConfig === undefined) {
  log.error('error loading config');
  process.exit();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/**
 * set api routes up
 */
const apiService = require('./api/api-service')(log4js);
const api = require('./api/api')(log4js, express, apiService);

app.use(api);

/**
 *
 * Status Codes
 *
 */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err); // TODO this will log a stack trace. Not great for production
});

/**
 *
 * Error Handlers
 *
 */
if (environment === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    log.error(`${err.status} - ${err.message}: Error in request of ${req.originalUrl} from ${req.ip}`);
    log.error(err.message);
    log.error(err.stack);
    res.send(`err.status: ${err.message}`);
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  log.error(`${err.status} - ${err.message}: Error in request of ${req.originalUrl} from ${req.ip}`);
  res.send(`err.status: ${err.message}`);
});

process.on('unhandledRejection', (reason, promise) => {
  log.error(`Unhandled promise rejection occurred. 
              Reason: ${reason} from promise: ${promise}`);
});

app.listen(serverConfig.port, () => {
  log.info(`app listening on port ${serverConfig.port}`);
});

module.exports = app;
