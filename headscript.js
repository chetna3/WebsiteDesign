// // script1
//         const firebaseConfig = {
//             apiKey: "AIzaSyCSMhuY5q13Nqlo1GOQvXKOVWIMAdqHYLU",
//             authDomain: "loginandsingup-b3870.firebaseapp.com",
//             databaseURL: "https://loginandsingup-b3870-default-rtdb.firebaseio.com",
//             projectId: "loginandsingup-b3870",
//             storageBucket: "loginandsingup-b3870.appspot.com",
//             messagingSenderId: "361091281844",
//             appId: "1:361091281844:web:097bc595480295856db8e1"
//         };

//         const app = firebase.initializeApp(firebaseConfig);
//         const auth = firebase.getAuth(app);

//         const signInWithEmailButton = document.getElementById("signInWithMail");
//         const signUpButton = document.getElementById("signUp");
//         const signInWithGoogleButton = document.getElementById("signInWithGoogle");

//         signInWithEmailButton.addEventListener("click", () => {
//             const email = document.getElementById("mail").value;
//             const password = document.getElementById("password").value;
//             signInWithEmailAndPassword(auth, email, password);
//         });

//         signUpButton.addEventListener("click", () => {
//             const email = document.getElementById("mail").value;
//             const password = document.getElementById("password").value;
//             signUpWithEmailAndPassword(auth, email, password);
//         });

//         signInWithGoogleButton.addEventListener("click", () => {
//             signInWithGoogle();
//         });

//         function signUpWithEmailAndPassword(auth, email, password) {
//             firebase.createUserWithEmailAndPassword(auth, email, password)
//                 .then((userCredential) => {
//                     console.log("Signed up successfully:", userCredential);
//                 })
//                 .catch((error) => {
//                     console.error("Error signing up:", error);
//                 });
//         }

//         function signInWithEmailAndPassword(auth, email, password) {
//             firebase.signInWithEmailAndPassword(auth, email, password)
//                 .then((userCredential) => {
//                     console.log("Signed in successfully:", userCredential);
//                 })
//                 .catch((error) => {
//                     console.error("Error signing in:", error);
//                 });
//         }

//         function signInWithGoogle() {
//             const provider = new firebase.GoogleAuthProvider();
//             firebase.signInWithPopup(auth, provider)
//                 .then((userCredential) => {
//                     console.log("Signed in with Google successfully:", userCredential);
//                 })
//                 .catch((error) => {
//                     console.error("Error signing in with Google:", error);
//                 });
//         }
    
// // script1
//     // script2
//         var x = document.getElementById('login');
//         var y = document.getElementById('register');
//         var z = document.getElementById('btn');
//         function register() {
//             x.style.left = '-400px';
//             y.style.left = '50px';
//             z.style.left = '110px';
//         }
//         function login() {
//             x.style.left = '50px';
//             y.style.left = '450px';
//             z.style.left = '0px';
//         }
//     // script2
//     // script3
//         var modal = document.getElementById('login-form');
//         window.onclick = function (event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         }
//    // script3