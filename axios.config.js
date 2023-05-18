const axios = require('axios')

const defaultOptions = {
  baseURL: 'https://w3studio.pro/api/v1/',
  headers: {
    withCredentials: true
  }
};

let axiosInstance = axios.create(defaultOptions);

// axiosInstance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization =  token ? `Bearer ${token}` : '';
//   return config;
// });

export default axiosInstance;