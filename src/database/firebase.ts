import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBdesPwpZ9WFpDGeTJjVXXA_WEmEub_KBo",
  authDomain: "ecommerce-rn.firebaseapp.com",
  projectId: "ecommerce-rn",
  storageBucket: "ecommerce-rn.appspot.com",
  messagingSenderId: "415711969982",
  appId: "1:415711969982:web:03fb20347396568e4b54ef"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const getCredentials = firebase.auth.EmailAuthProvider.credential;
const getNumberCredentials = firebase.auth.PhoneAuthProvider.credential;
export default {
  auth,
  db,
  storage,
  getCredentials,
  getNumberCredentials
}