import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZrEmqAcKXpEu0skV9vhABB6SeoHoRMD4",
  authDomain: "mernblog-ed50d.firebaseapp.com",
  projectId: "mernblog-ed50d",
  storageBucket: "mernblog-ed50d.appspot.com",
  messagingSenderId: "218232763708",
  appId: "1:218232763708:web:5ad7fb49acb60aa5759a39",
};

// Initialize Firebase app and storage
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
