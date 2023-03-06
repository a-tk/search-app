const apiService = ((log4js) => {
  const log = log4js.getLogger('api-service');

  const search = (keyword, callback) => {
    log.info(`search called with ${keyword}`);

    callback();
  };

  return {
    search,
  };
});

module.exports = apiService;
