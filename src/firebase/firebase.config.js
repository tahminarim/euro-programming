// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOkrhvKj64uvsc9w_GXeoPV28GAU0V4zU",
  authDomain: "euro-programming.firebaseapp.com",
  projectId: "euro-programming",
  storageBucket: "euro-programming.appspot.com",
  messagingSenderId: "743361659446",
  appId: "1:743361659446:web:d0cb5eaaf87bdea40b0e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;