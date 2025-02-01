import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARm-eSymd2Q3AyxJXiAiiUzsXGmc6T72I",
  authDomain: "echoesbehindcloseddoors.firebaseapp.com",
  databaseURL: "https://echoesbehindcloseddoors-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "echoesbehindcloseddoors",
  storageBucket: "echoesbehindcloseddoors.firebasestorage.app",
  messagingSenderId: "905742343227",
  appId: "1:905742343227:web:19d04f77371ef1952c901e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);