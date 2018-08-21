import axios from 'axios';
import firebase from 'firebase';
import constants from '../config/constants';

const  axiosClient  = axios.create({
  baseURL: constants.apiUrl
})

 axiosClient.interceptors.response.use((response) => {
  return {
    ...response.data,
    status: response.status
  }
}, (error) => {
  console.log(error.response.status)
  if (error.response.status === 403) return window.location.replace('/logout');
  return {
    status: error.response.status,
    ...error.response.data
  }
});

/* Esta información no es sensible, por lo tanto puede mostrarse abiertamente */
const config = {
  apiKey: "AIzaSyAYanmVWQekhZMnzqaOJK8oPmM2yKx0NAE",
  authDomain: "applebees-5f865.firebaseapp.com",
  databaseURL: "https://applebees-5f865.firebaseio.com",
  projectId: "applebees-5f865",
  storageBucket: "gs://applebees-5f865.appspot.com",
  messagingSenderId: "527420108312"
};

firebase.initializeApp(config);;

export { axiosClient, firebase };