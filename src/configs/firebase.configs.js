// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6qUFTlvGlyWTcqn4A2tBjpeAQm1I_b_s",
  authDomain: "codeui-node.firebaseapp.com",
  projectId: "codeui-node",
  storageBucket: "codeui-node.appspot.com",
  messagingSenderId: "933189481718",
  appId: "1:933189481718:web:55f0f57bb7c4724ae328d7",
  measurementId: "G-D3CCCJZTZQ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);