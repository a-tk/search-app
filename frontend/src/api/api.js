import axios from 'axios';

export const api = (() => {

  const search = async (keyword) => {
    let data = '';

    try {
      data = await axios.get(`http://localhost:3000/api/search/${keyword}`);
    } catch (err) {
      console.log(`Error occurred! ${err}`);
    }
    for (var obj in data.data) {
      data = data.data[obj];
      break;
    }
    return data;
  };

  return {
    search,
  };
});