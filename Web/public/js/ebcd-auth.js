import { auth } from "./ebcd-common-firebase.js";

console.log("ebcd-auth loaded <3");

auth.onAuthStateChanged((user) => {
  if (user) {
    window.location = "/profile.html";
  }
});
