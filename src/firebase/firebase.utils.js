import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyB872vcebYkwtQamOGtq96NGVM63iORE4U",
    authDomain: "csgo-app-grga.firebaseapp.com",
    projectId: "csgo-app-grga",
    storageBucket: "csgo-app-grga.appspot.com",
    messagingSenderId: "1020617868807",
    appId: "1:1020617868807:web:3f8830cafd26676f1acca2",
    measurementId: "G-TM9PFF2G5C"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase