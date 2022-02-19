require("dotenv").config();
const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	measurementId: process.env.measurementId,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = { db };
