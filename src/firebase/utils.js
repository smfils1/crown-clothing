
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDT4CPA0zELYZ0pqTj6QkTnOzTf-mvVYrY",
    authDomain: "ecommerce-60547.firebaseapp.com",
    databaseURL: "https://ecommerce-60547.firebaseio.com",
    projectId: "ecommerce-60547",
    storageBucket: "ecommerce-60547.appspot.com",
    messagingSenderId: "797466986120",
    appId: "1:797466986120:web:4cefc142103e3173a8413d",
    measurementId: "G-MXGWPKE2JD"
  }

firebase.initializeApp(config);


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const createUserProfileDoc = async (userAuth, otherData) => {
  if(userAuth) {
    const {uid} = userAuth
    const userRef = await firestore.doc(`/users/${uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const {email, displayName} = userAuth
      const createdAt = new Date()
      
      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...otherData
        })
      } catch (error) {
        console.log(error.message)  
      }
      
    }
    return userRef
  }


}

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);
export {createUserProfileDoc};

