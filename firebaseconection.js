// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSMhuY5q13Nqlo1GOQvXKOVWIMAdqHYLU",
    authDomain: "loginandsingup-b3870.firebaseapp.com",
    databaseURL: "https://loginandsingup-b3870-default-rtdb.firebaseio.com",
    projectId: "loginandsingup-b3870",
    storageBucket: "loginandsingup-b3870.appspot.com",
    messagingSenderId: "361091281844",
    appId: "1:361091281844:web:097bc595480295856db8e1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginIn");
    const signupForm = document.getElementById("signUp");
    const logoutButton = document.getElementById("logout");

    // Handle Login Form Submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email3").value;
        const password = document.getElementById("password1").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed in
                const user = userCredential.user;
                console.log(user);
                alert(user.email + " Login successfully!!!");
                document.getElementById("logout").style.display = "block";
            })
            .catch((error) => {
                console.error(error.message);
                alert("Login failed: " + error.message);
            });
    });

    // Handle Signup Form Submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email2").value;
        const password = document.getElementById("password2").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed up and logged in
                const user = userCredential.user;
                console.log(user);
                alert("Registration successful!!");
                document.getElementById("logout").style.display = "block";
            })
            .catch((error) => {
                console.error(error.message);
                alert("Registration failed: " + error.message);
            });
    });

    // Handle Logout
    logoutButton.addEventListener("click", function() {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
                alert("Sign-out successful.");
                document.getElementById("logout").style.display = "none";
            })
            .catch((error) => {
                console.error("Sign-out failed: " + error.message);
            });
    });
});
