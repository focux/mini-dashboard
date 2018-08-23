import { axiosClient } from './config';

export default class Menu {
  static async fetchAll() {
    let response;
    try {
      response = await axiosClient.get('/menu');
    } catch (e) {
      response = e;
    }
    return response;
  }

  static async create({ category, title, description, price }) {
    let response;
    try {
      response = await axiosClient.post('/menu', { category, title, description, price });
    } catch (e) {
      response = e;
    }
    return response;
  }

  static async delete(id) {
    let response;
    try {
      response = await axiosClient.delete(`/menu/${id}`);
    } catch (e) {
      response = e;
    }
    return response;
  }

  static async update(id, update) { /* update param is an object with the menu updated object' */
    let response;
    try {
      response = await axiosClient.patch(`/menu/${id}`, update);
    } catch (e) {
      response = e;
    }
    return response;
  }

  static filterByCat(menu, cat) {
    return menu.filter((v) => v.category === cat);
  }

  static filterById(menu, id) {
    return menu.filter((v) => v._id === id)[0];
  }
}