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
}, (error) => ({
  status: error.response.status,
  ...error.response.data
}));

export default client;