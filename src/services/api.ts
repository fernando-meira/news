import axios from 'axios';

const api = axios.create({
  baseURL: 'http://newsapi.org/v2/',
});

export default api;
