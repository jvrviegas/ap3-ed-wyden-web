import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ap3-ed-wyden.herokuapp.com/api',
});

export default api;
