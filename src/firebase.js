import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyByD0JU8xy5Jd4PdAqj5iB28YZmgE999Ew',
  authDomain: 'man-city-57a5d.firebaseapp.com',
  databaseURL: 'https://man-city-57a5d.firebaseio.com',
  projectId: 'man-city-57a5d',
  storageBucket: 'man-city-57a5d.appspot.com',
  messagingSenderId: '133054939662',
  appId: '1:133054939662:web:fb6f9a0e05b7474af4725f',
  measurementId: 'G-8EVVPKWRVF'
};

firebase.initializeApp(config);

const firebasedb = firebase.database();
const firebaseMatches = firebasedb.ref('matches');
const firebasePromotions = firebasedb.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };
