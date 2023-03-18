const axios = require('axios');

const apiService = ((log4js) => {
  const log = log4js.getLogger('api-service');

  const search = async (keyword) => {
    log.info(`search called with ${keyword}`);
    let data;

    // https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exintro&explaintext&titles=test&format=json&inprop=url
    try {
      data = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exintro&explaintext&inprop=url&format=json&titles=${keyword}`);
    } catch (err) {
      log.error(`encountered ${err}`);
    }
    return data;
  };

  return {
    search,
  };
});

module.exports = apiService;
