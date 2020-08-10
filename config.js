import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBTG4HWONlHIP_9SBte4zZc3ekdPPDN1M8",
  authDomain: "wily-app-db01c.firebaseapp.com",
  databaseURL: "https://wily-app-db01c.firebaseio.com",
  projectId: "wily-app-db01c",
  storageBucket: "wily-app-db01c.appspot.com",
  messagingSenderId: "923108256602",
  appId: "1:923108256602:web:c36a2126a856615f55a163"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
