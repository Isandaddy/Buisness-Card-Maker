import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
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

  export const firebaseAuth = firebaseApp.auth();
  export const firebaseDatabase = firebaseApp.database();
  export const googleProvider = new firebase.auth.GithubAuthProvider();
  export const githubProvider = new firebase.auth.GithubAuthProvider();