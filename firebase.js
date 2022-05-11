import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6_Bl_mueKVKqbqGW-R2vOA3EOQIked4c",
  authDomain: "uberclone-84b9a.firebaseapp.com",
  projectId: "uberclone-84b9a",
  storageBucket: "uberclone-84b9a.appspot.com",
  messagingSenderId: "918476744117",
  appId: "1:918476744117:web:b859cf41f8bcb68f7ea5fc"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
