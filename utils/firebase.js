// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCZRhSbxz59R9olEo4HIECBGeyWqJ1gEtg",
	authDomain: "chatterbox-12077.firebaseapp.com",
	projectId: "chatterbox-12077",
	storageBucket: "chatterbox-12077.appspot.com",
	messagingSenderId: "665238637271",
	appId: "1:665238637271:web:e6ab73ee223dab0e6abe92",
	measurementId: "G-C12SR9HS6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
