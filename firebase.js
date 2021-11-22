import * as firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyC1IJCnHpTFBXTLiJ96TbmMySRLyJbwKDo",
  authDomain: "fly-app-react.firebaseapp.com",
  projectId: "fly-app-react",
  storageBucket: "fly-app-react.appspot.com",
  messagingSenderId: "518704242045",
  appId: "1:518704242045:web:e39c258804a8c198368014",
  measurementId: "G-ZX8V561TMC"
};

let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };