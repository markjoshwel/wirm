import {
  auth,
  authProviderGoogle,
  authWithMagicLink,
  authWithGooglePopup,
} from "./ebcd-common-firebase.js";

console.log("ebcd-auth loaded <3");

auth.onAuthStateChanged((user) => {
  if (user) {
    window.location = "/profile.html";
  }
});

const actionCodeSettings = {
  url: `${window.location.origin}/profile.html`,
  handleCodeInApp: true,
  iOS: {
    bundleId: "co.wirm.ebcd",
  },
  android: {
    packageName: "co.wirm.ebcd",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "echoesbehindcloseddoors.page.link",
};

// input.. id="auth-field-email"
// a...... id="auth-button-magic"
// a...... id="auth-button-sso-google"
// h2..... id="auth-modal-result-header"
// p...... id="auth-modal-result-body"

// // handle magic link auth
// const buttonSendLink = document.getElementById("auth-button-magic");
// buttonSendLink.addEventListener("click", async (event) => {
//   console.log("ebcd-auth: clicked magic");

//   const modalResultHeader = document.getElementById("auth-modal-result-header");
//   const modalResultBody = document.getElementById("auth-modal-result-body");
//   const fieldEmail = document.getElementById("auth-field-email");
//   // try get email from fieldEmail.value
//   const email = fieldEmail ? fieldEmail.value.trim() : null;

//   // if email is blank
//   if (!email) {
//     modalResultHeader.innerText = "Error!";
//     modalResultBody.innerText = "Please enter an email address.";
//     return;
//   }

//   // if email is not valid
//   if (!email.includes("@")) {
//     modalResultHeader.innerText = "Error!";
//     modalResultBody.innerText = "Please enter a valid email address.";
//     return;
//   }

//   console.log("ebcd-auth/auth-button-magic: sent!");
//   authWithMagicLink(auth, email, actionCodeSettings)
//     .then(() => {
//       console.log("ebcd-auth/auth-button-magic: success!");
//       // The link was successfully sent. Inform the user.
//       modalResultHeader.innerText = "You've Got Mail!";
//       modalResultBody.innerText = `We've sent you an email to ${email} with a magical link to authenticate with us. If you're a new user, you'll make an account. If you're an existing user, you'll be logged in. Check your inbox!`;

//       // Save the email locally so you don't need to ask the user for it again
//       // if they open the link on the same device.
//       window.localStorage.setItem("emailForSignIn", email);
//     })
//     .catch((error) => {
//       console.log(
//         "ebcd-auth/auth-button-magic: error...",
//         error.code,
//         error.message
//       );
//       modalResultHeader.innerText = "Error!";
//       modalResultBody.innerHTML = `We've encountered an error. Tell the booth runner about this!<br>${error.message}`;
//     });
// });

// handle sso auth
// <button id="button-sso-google">
const buttonSSOGoogle = document.getElementById("auth-button-sso-google");
buttonSSOGoogle.addEventListener("click", async (event) => {
  console.log("ebcd-auth: clicked sso");

  const provider = new authProviderGoogle();
  const modalResultHeader = document.getElementById("auth-modal-result-header");
  const modalResultBody = document.getElementById("auth-modal-result-body");

  console.log("ebcd-auth/auth-button-sso-google: sent!");
  provider.setCustomParameters({
    prompt: "select_account", // forces account selection every time
  });

  authWithGooglePopup(auth, provider)
    .then(() => {
      // redirect to profile page
      window.location = "/profile.html";
    })
    .catch((error) => {
      // show error
      console.log(
        "ebcd-auth/auth-button-sso-google: error...",
        error.code,
        error.message
      );
      modalResultHeader.innerText = "Error!";
      modalResultBody.innerHTML = `We've encountered an error. Tell the booth runner about this!<br>${error.message}`;
    });
});
