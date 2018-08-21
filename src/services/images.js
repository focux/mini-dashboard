import axiosClient from './config';

export default class Images {
  static async fetchAll() {
    let response;
    try {
      response = await axiosClient.get('/image');
    } catch (e) {
      response = e;
    }
    return response;
  }
}