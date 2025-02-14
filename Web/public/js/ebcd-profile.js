import { auth } from "./ebcd-common-firebase.js";

console.log("ebcd-profile loaded <3");

// check url params
const urlParams = new URLSearchParams(window.location.search);

// if logOut=true, sign out
if (urlParams.get("logOut") === "true") {
  auth
    .signOut()
    .then(() => {
      console.log("ebcd-profile: signed out");
      window.location = "/";
    })
    .catch((error) => {
      console.error("ebcd-profile: error signing out", error);
      window.location = "/";
    });
}

// if we're signed in, reload the page with ?uid=...
auth.onAuthStateChanged((user) => {
  if (!urlParams.has("uid")) {
    // if we dont have a uid and we're signed in, redirect to /profile?uid=...
    if (user) {
      window.location = `/profile.html?uid=${user.uid}`;
    } else {
      // if we're not signed in, redirect to 404
      window.location = "/404.html";
    }
  }
});
