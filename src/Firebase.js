import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTMVhwvBbGBh9qvlTTbCGrOcMWez1LamU",
  authDomain: "disneyplusclone-a0e85.firebaseapp.com",
  projectId: "disneyplusclone-a0e85",
  storageBucket: "disneyplusclone-a0e85.appspot.com",
  messagingSenderId: "1091819287960",
  appId: "1:1091819287960:web:8f83ffa42827f98d3f27ed",
  measurementId: "G-K0RNRCQ6PB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
