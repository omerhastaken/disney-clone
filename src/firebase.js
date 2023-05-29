import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwO3izMAPHVKCyoxXgVFRdi0EFmDYSNu8",
    authDomain: "disney-clone-74a72.firebaseapp.com",
    projectId: "disney-clone-74a72",
    storageBucket: "disney-clone-74a72.appspot.com",
    messagingSenderId: "747105445873",
    appId: "1:747105445873:web:aca68d988cd904c9548650"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;