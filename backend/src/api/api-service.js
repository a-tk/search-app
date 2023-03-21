const axios = require('axios');

const apiService = ((log4js, url) => {
  const log = log4js.getLogger('api-service');
  let wikiUrl;

  if (!url) {
    wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=info|extracts&exintro&explaintext&inprop=url&format=json&titles=';
  } else {
    wikiUrl = url;
  }

  log.info(`Wiki api being used is ${wikiUrl}`);

  const search = async (keyword) => {
    log.info(`search called with ${keyword}`);
    let data;

    try {
      data = await axios.get(wikiUrl + keyword);
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
