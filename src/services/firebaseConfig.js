import auth from '@react-native-firebase/auth';
import { initializeApp } from '@react-native-firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBrXsejZagDYW_yWz0M1sZFmrAgL6aShg8",
    authDomain: "eatsum-c28fb.firebaseapp.com",
    projectId: "eatsum-c28fb",
    storageBucket: "eatsum-c28fb.appspot.com",
    messagingSenderId: "545689261967",
    appId: "1:545689261967:ios:7394f486f81aa3de3dddfa",
};

    const app = initializeApp(firebaseConfig);

    //export const auth = getAuth(app);


    export const login = (email, password) => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
          console.log('User account signed in! ', user);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          if (error.code === 'auth/user-not-found') {
            console.log('wrong ass!', email, password);
            
          }
      
          console.error(error);
        });
    }

    export const register = (email, password) => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
          console.log('User account created & signed in!', user);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          if (error.code === 'auth/weak-password') {
            console.log('weak ass!', email, password);
         
          }
      
          console.error(error);
        });
    }
