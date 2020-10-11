import axios from 'axios';
import { store } from '../redux/store';

import { authExpired } from '../redux/user/user.action';

const AxiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(
  (config) =>
    // Do something before request is sent
    config,
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    response,
  (error) => {
    if (!error.response) {
      return Promise.reject('Network Error');
    }
    if (error.response.status === 401) {
      store.dispatch(authExpired());
      return Promise.reject(error);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default AxiosInstance;
