import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAOOGVkx9FBOX0SkisaVQzFzWpB2kuwWJs",
  authDomain: "grey-challenge.firebaseapp.com",
  projectId: "grey-challenge",
  storageBucket: "grey-challenge.appspot.com",
  messagingSenderId: "116468535479",
  appId: "1:116468535479:web:df97cb7cf2464f1554bd32"
};

const app = initializeApp(firebaseConfig);;

export default app
