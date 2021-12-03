import * as firebase from "firebase/compat";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from "./config";


if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
}


const Firebase = {


    /**INSCRIPTION */
    singupUser : (email, password) => firebase.auth().createUserWithEmailAndPassword(email.trim(),password),

    /**CONNEXION */
    connectUser : (email, password) => firebase.auth().signInWithEmailAndPassword(email.trim(),password),

    /**LOGOUT */
    logoutUser : () => firebase.auth().signOut(),

    /**RESET PASSWORD */
    resetPasssword : (email) => firebase.auth().sendPasswordResetEmail(email),

    /**GET CURRENT USER */
    currentUser : uid => firebase.firestore().doc(`users/${uid}`)

}


export default Firebase;