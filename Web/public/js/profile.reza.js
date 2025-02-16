// i literally dk what im doing :,)
const loadProfile = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid");
    
    const usernameText = document.getElementById("name");
    const emailText = document.getElementById("email");

    if (uid) {
        console.log("Fetching user info", uid);

        firebase.firestore().collection("users").doc(uid).get()
            .then((doc) => {
                if (doc.exists) {
                    // If the user data exists
                    const userData = doc.data();

                    usernameText.innerHTML = userData.displayName 
                    emailText.innerHTML = userData.email 
                    
                } else {
                    // If no user is found
                    console.error("User not found!");
                    usernameText.innerHTML = "User not found.";
                    emailText.innerHTML = "No user data available.";
                }
            })
        
    } else {
        // If no UID is found in the URL
        console.error("No UID found");
        usernameText.innerHTML = "Whoops!";
        emailText.innerHTML = "No user to display.";
    }
};

window.onload = loadProfile;