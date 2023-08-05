import auth from "@react-native-firebase/auth";
import {clearCache} from '../localRestaurantCache';

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User account signed in! ", user);
    
        resolve(user);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const register = (email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User account created and signed in! ", user);
        resolve(user);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const signout = () => {
  auth()
    .signOut()
    .then(() => {
      console.log("signed out!")});
};
