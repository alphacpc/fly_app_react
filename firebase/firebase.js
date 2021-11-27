import * as firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from "./config";

const Firebase = {

    // constructor(){
    //     firebase.initializeApp(firebaseConfig);
    //     this.auth = firebase.auth();
    //     this.db = firebase.firestore();
    // }

    /**INSCRIPTION */
    singupUser : (email, password) => firebase.auth.createUserWithEmailAndPassword(email,password),

    /**CONNEXION */
    connectUser : (email, password) => firebase.auth.signInWithEmailAndPassword(email,password),

    /**LOGOUT */
    logoutUser : () => this.auth.signOut(),

    /**RESET PASSWORD */
    resetPasssword : (email) => firebase.auth.sendPasswordResetEmail(email),

    /**GET CURRENT USER */
    // currentUser : (uid) => firebase.collection.db.doc(`users/${uid}`),

}


export default Firebase;