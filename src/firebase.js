import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChK8bDL36G8YdSWCKMjZ_ynzndUf3dGrc",
    authDomain: "linkedin-clone-51241.firebaseapp.com",
    projectId: "linkedin-clone-51241",
    storageBucket: "linkedin-clone-51241.appspot.com",
    messagingSenderId: "312420206014",
    appId: "1:312420206014:web:32a195e6ac2e4adaf0e5ef",
    measurementId: "G-Y8LC85W8J2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth} ;
