import Axios from 'axios';

const axios = Axios.create({
  baseURL: '',
  timeout: 0,
});

export default axios;
