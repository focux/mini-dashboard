import { axiosClient } from './config';

export default class Auth {
  static async login({ email, password }) {
    let response;
    try {
      response = await axiosClient.post('/auth/login', { email, password });
      if (response.status === 200) {
        localStorage.setItem('id', response.user._id);
        localStorage.setItem('email', email);
      }
    } catch (e) {
      response = e;
      console.log('error')
    }
    return response;
  }

  static checkAuth() {
    return !!localStorage.getItem('id');
  }

  static logOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
  }
}