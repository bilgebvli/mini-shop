import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.VUE_APP_AXIOS_TIMEOUT_MS,
});

export default axios;
