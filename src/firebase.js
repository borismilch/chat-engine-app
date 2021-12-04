import firebase from 'firebase'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlQl7LrddwffXuYsx3kf9JPEDMnaU_rqA",
  authDomain: "unichat-4f8f7.firebaseapp.com",
  projectId: "unichat-4f8f7",
  storageBucket: "unichat-4f8f7.appspot.com",
  messagingSenderId: "452668713123",
  appId: "1:452668713123:web:38da8444a78af92dbcb716"
};

// Initialize Firebase
export const auth = firebase.initializeApp(firebaseConfig).auth();
