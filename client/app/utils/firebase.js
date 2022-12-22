import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrXV880lS3TipHCnXfcfa6zhzoZ62fZjo",
    authDomain: "sunshine-academy-bd.firebaseapp.com",
    projectId: "sunshine-academy-bd",
    storageBucket: "sunshine-academy-bd.appspot.com",
    messagingSenderId: "126181069527",
    appId: "1:126181069527:web:65b384073c611771d85692"
  };
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth }