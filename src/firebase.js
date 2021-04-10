import firebase from 'firebase';

const firebaseConfig = {
  // your config
};

const telegramApp = firebase.initializeApp(firebaseConfig);

const db = telegramApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, googleProvider };
