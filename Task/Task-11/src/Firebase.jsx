  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";

  const firebaseConfig = {
      apiKey: "AIzaSyBOskOeYkuhVE6JXyENMXFuDgdKjUaLBgg",
    authDomain: "final-website-796c9.firebaseapp.com",
    projectId: "final-website-796c9",
    storageBucket: "final-website-796c9.appspot.com",
    messagingSenderId: "902114383350",
    appId: "1:902114383350:web:352a90ecb19a8a44f823d7",
    measurementId: "G-Z2W5WJK8N4",
    databaseURL: "https://final-website-796c9-default-rtdb.firebaseio.com"

  };

  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseapp);

  export {auth}