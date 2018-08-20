import axiosClient from './config';

export default class Auth {
  static async login({ email, password }) {
    let response;
    try {
      response = await axiosClient.post('/auth/login', { email, password });
    } catch (e) {
      response = e;
    }
    return response;
  }
}