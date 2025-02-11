import { app, auth } from "./ebcd-common-firebase.js";

// the navbar has the following li elements in a dropdown:
// - nav-auth-logIn
// - nav-auth-signUp
// - nav-auth-profile
// - nav-auth-logOut

// are we logged in?
auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in, only show the profile and log out links
    document.getElementById("nav-auth-logIn").style.display = "none";
    document.getElementById("nav-auth-signUp").style.display = "none";
  } else {
    // not signed in, only show the log in and sign up links
    document.getElementById("nav-auth-profile").style.display = "none";
    document.getElementById("nav-auth-logOut").style.display = "none";
  }
});
