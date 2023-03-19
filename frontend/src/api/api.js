const axios = require('axios');

const api = (() => {

  const search = async (keyword) => {
    let data;

    try {
      data = await axios.get(`http://localhost:3000/api/search/${keyword}`);
    } catch (err) {
      console.log(`Error occurred! ${err}`);
    }
    return data;
  };

  return {
    search,
  };
});

module.exports = api;