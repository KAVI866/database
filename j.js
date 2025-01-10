
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyATh9UeXpt5xG0kzKgio3d9fxG6_PPqGaM",
    authDomain: "data-c0fce.firebaseapp.com",
    databaseURL: "https://data-c0fce-default-rtdb.firebaseio.com",
    projectId: "data-c0fce",
    storageBucket: "data-c0fce.firebasestorage.app",
    messagingSenderId: "873843061350",
    appId: "1:873843061350:web:f8aa5af0a5ac854d4373a7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


const db = getDatabase(app);
document.getElementById("submit").addEventListener('click', function (e)
{
  e.preventDefault();
  set(ref(db, 'user/' +document.getElementById("username").value),
{
  username: document.getElementById("username").value,
  Email: document.getElementById("email").value,
  PhoneNumber: document.getElementById("phone").value,
});
alert("Login Sucessfull !")
})