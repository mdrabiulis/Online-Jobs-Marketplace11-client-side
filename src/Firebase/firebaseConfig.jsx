import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const all = import.meta.env
// console.log(all.VITE_APPID);


const firebaseConfig = {
  apiKey: all.VITE_APIKEY,
  authDomain: all.VITE_AUTHDOMAIN,
  projectId: all.VITE_PROJECTID,
  storageBucket: all.VITE_STORAGEBUCKET,
  messagingSenderId: all.VITE_MESSAGINGSENDERID,
  appId: all.VITE_APPID
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);








