import { axiosClient, firebase } from './config';
import { uuidv4Generator } from '../utils';

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

  static async upload({ file, id, name }) {
    const storageRef = firebase.storage().ref(`/images/${name}`);
    let response;
    try {
      const storResponse = await storageRef.put(file);
      response = await Images.updateUrl({ id, url: storResponse.downloadURL })
    } catch (e) {
      console.log('ERROR:', e)
    }
    console.log(response)
    return response;
  }

  static async updateUrl({ id, url }) {
    let response;
    try {
      response = await axiosClient.patch('/image', { id, url });
    } catch (e) {
      response = e;
    }
    return response;
  }
}