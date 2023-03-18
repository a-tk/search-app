const api = ((log4js, express, apiService) => {
  const log = log4js.getLogger('/api');
  const router = express.Router();

  /**
   *  url: /api/search/keyword
   *  method: METHOD
   *  result: result
   *
   */
  router.get('/api/search/:keyword', async (req, res) => {
    const { keyword } = req.params;
    try {
      const data = await apiService.search(keyword);
      res.send(data.query);
    } catch (e) {
      log.error('Error occurred');
      res.send(500);
    }
  });
  return router;
});

module.exports = api;
