
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBhwtywBbTo2aGOmVUdi4i3_YtnxJ3PIsQ",
	authDomain: "buisiness-home.firebaseapp.com",
	projectId: "buisiness-home",
	storageBucket: "buisiness-home.appspot.com",
	messagingSenderId: "764431004967",
	appId: "1:764431004967:web:f194da32cc95399ed12502",
	measurementId: "G-81YZEPZ6RZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}