import { getApp, getApps, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnop5msIhyI5FDB5xMHI-jwS08ra9TmCM",
  authDomain: "resturantapp-a920a.firebaseapp.com",
  databaseURL: "https://resturantapp-a920a-default-rtdb.firebaseio.com",
  projectId: "resturantapp-a920a",
  storageBucket: "resturantapp-a920a.appspot.com",
  messagingSenderId: "511552438497",
  appId: "1:511552438497:web:786b4a17cbd837d42877a0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
