import axios from 'axios';
import constants from '../config/constants';

const client = axios.create({
  baseURL: constants.apiUrl
})

client.interceptors.response.use((response) => {
  return {
    ...response.data,
    status: response.status
  }
}, (error) => {
  if (error.response.status === 403) return window.location.replace('/logout');
  return {
    status: error.response.status,
    ...error.response.data
  }
});

export default client;