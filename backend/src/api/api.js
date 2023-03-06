const api = ((log4js, express, apiService) => {
  const log = log4js.getLogger('/api');
  const router = express.Router();

  /**
   *  url: /api/url
   *  method: METHOD
   *  result: result
   *
   */
  router.get('/api/search/:keyword', (req, res) => {
    const { keyword } = req.params.keyword;
    log.info(`keyword was ${keyword}`);
    apiService.search(keyword, () => {
      res.send(200);
    });
  });

  return router;
});

module.exports = api;
