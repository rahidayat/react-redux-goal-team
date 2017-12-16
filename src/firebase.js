import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBhh-Xoa_eYY32zoV8ixTNz13nnyxsNcAk",
    authDomain: "codepolitan-4c1b9.firebaseapp.com",
    databaseURL: "https://codepolitan-4c1b9.firebaseio.com",
    projectId: "codepolitan-4c1b9",
    storageBucket: "codepolitan-4c1b9.appspot.com",
    messagingSenderId: "1098989027931"
  };

export const firebaseApp = firebase.initializeApp(config);
