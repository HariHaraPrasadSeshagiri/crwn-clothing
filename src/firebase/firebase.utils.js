import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvXwEgCPy37WfdHrQSm6Au60mzsKd5djU",
  authDomain: "crwn-db-fbc3d.firebaseapp.com",
  databaseURL: "https://crwn-db-fbc3d.firebaseio.com",
  projectId: "crwn-db-fbc3d",
  storageBucket: "crwn-db-fbc3d.appspot.com",
  messagingSenderId: "615512046107",
  appId: "1:615512046107:web:739afc7b076302702bd6be",
  measurementId: "G-YB8RQPP5ED",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error created user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
