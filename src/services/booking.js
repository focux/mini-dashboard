import axiosClient from './config';

export default class Booking {
  static async fetch() {
    let response;
    try {
      response = await axiosClient.get('/booking')
    } catch (e) {
      response = e;
    }
    return response;
  }
}