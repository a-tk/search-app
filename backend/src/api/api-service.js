const apiService = ((log4js) => {
  const log = log4js.getLogger('api-service');

  const search = async (keyword) => {
    log.info(`search called with ${keyword}`);
    return new Promise((resolve, reject) => {
      // do something
      resolve(); // or reject()
    });
  };

  return {
    search,
  };
});

module.exports = apiService;
