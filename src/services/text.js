import { axiosClient } from './config';

export default class Text {
  static async fetchAll() {
    let response;
    try {
      response = await axiosClient.get('/text');
    } catch (e) {
      response = e;
    }
    return response;
  }

  static async update(id, update) { /* update param is an object with the text updated object' */
    let response;
    try {
      response = await axiosClient.patch(`/text/${id}`, update);
    } catch (e) {
      response = e;
    }
    return response;
  }

  static filterBySection(text, sec) {
    return text.filter((v) => v.section === sec);
  }

  static filterById(text, id) {
    return text.filter((v) => v._id === id)[0];
  }
}