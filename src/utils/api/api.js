import axios from 'axios';

const instance = axios.create({baseURL: process.env.REACT_APP_BASE_URL});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
