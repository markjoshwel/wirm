import { auth } from "./ebcd-common-firebase.js";

console.log("ebcd-profile loaded <3");

// check url params
const urlParams = new URLSearchParams(window.location.search);

// if logOut=true, sign out
if (urlParams.get("logOut") === "true") {
  auth
    .signOut()
    .then(() => {
      window.location = "/";
    })
    .catch((error) => {
      console.error("ebcd-profile: error signing out", error);
    });
}
