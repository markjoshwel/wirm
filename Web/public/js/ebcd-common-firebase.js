import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";
import {
  getAuth,
  sendSignInLinkToEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as _signOut,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyARm-eSymd2Q3AyxJXiAiiUzsXGmc6T72I",
  authDomain: "echoesbehindcloseddoors.firebaseapp.com",
  databaseURL:
    "https://echoesbehindcloseddoors-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "echoesbehindcloseddoors",
  storageBucket: "echoesbehindcloseddoors.firebasestorage.app",
  messagingSenderId: "905742343227",
  appId: "1:905742343227:web:19d04f77371ef1952c901e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signOut = _signOut;
export const authWithMagicLink = sendSignInLinkToEmail;
export const authWithGooglePopup = signInWithPopup;
export const authProviderGoogle = GoogleAuthProvider;
export const database = getDatabase(app);
