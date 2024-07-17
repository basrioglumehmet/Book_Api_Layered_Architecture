import { BACKEND_URI } from '@/services/root';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BACKEND_URI, 
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log('Request:', config);
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log('Response:', response);
    return response;
  },
  function (error) {
    console.error('Response Error:', error.response);
    if (error.response && error.response.status === 401) {
        console.log(error.response)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
