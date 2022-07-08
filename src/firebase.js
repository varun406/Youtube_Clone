import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3gPAOIPLSWc8VHEmuCVr0ErwWk0AoLYo",
  authDomain: "clone-cbb1d.firebaseapp.com",
  projectId: "clone-cbb1d",
  storageBucket: "clone-cbb1d.appspot.com",
  messagingSenderId: "1044704432996",
  appId: "1:1044704432996:web:c12b60d00028956a1d2071",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
