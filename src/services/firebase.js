
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  const firebaseConfig = {
    apiKey: "AIzaSyBCbEiLoLbcXysE2vZ_t_hESI3_fWAM_ig",
    authDomain: "pokeapk-3d201.firebaseapp.com",
    projectId: "pokeapk-3d201",
    storageBucket: "pokeapk-3d201.appspot.com",
  messagingSenderId: "78737866057",
  appId: "1:78737866057:web:6f9b9ab4fe779758732e98",
  measurementId: "G-E47KPR0KNC"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
