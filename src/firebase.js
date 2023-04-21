import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKYwitGRjjwYWXcXApnL06xn4Wptuy_ZM",
  authDomain: "chatapp-36e28.firebaseapp.com",
  projectId: "chatapp-36e28",
  storageBucket: "chatapp-36e28.appspot.com",
  messagingSenderId: "1096033907306",
  appId: "1:1096033907306:web:44f3545567400e0655d013"
};

export const app = initializeApp(firebaseConfig);