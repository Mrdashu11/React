
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD99jgTmjA9asGFK9ud_MLCNaeHqfRinyY",
  authDomain: "my-project-935b6.firebaseapp.com",
  projectId: "my-project-935b6",
  storageBucket: "my-project-935b6.appspot.com",
  messagingSenderId: "729474840343",
  appId: "1:729474840343:web:36ae3dc8bfe1d944bca952",
  measurementId: "G-5BLGLV82ZG"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };
