const api = ((log4js, express, apiService) => {
  const log = log4js.getLogger('/api');
  const router = express.Router();

  /**
   *  url: /api/url
   *  method: METHOD
   *  result: result
   *
   */
  router.get('/api/search/:keyword', async (req, res) => {
    const { keyword } = req.params;
    log.info(`keyword was ${keyword}`);
    try {
      await apiService.search(keyword);
      res.send(200);
    } catch (e) {
      log.error('Error occurred');
      res.send(500);
    }
  });

  return router;
});

module.exports = api;
