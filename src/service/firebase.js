import firebase from 'firebase';
//使うのと使わないのを区分
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  };
  // Initialize Firebase
  //return App interface
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;