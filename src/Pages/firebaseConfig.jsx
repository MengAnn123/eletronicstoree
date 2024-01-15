
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection,getDocs /*, doc */  } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCiHztbeVFDGtvC217F9iWD6XNqQRLVM2E",
  authDomain: "electronic-store-8780c.firebaseapp.com",
  databaseURL: "https://electronic-store-8780c-default-rtdb.firebaseio.com",
  projectId: "electronic-store-8780c",
  storageBucket: "electronic-store-8780c.appspot.com",
  messagingSenderId: "243414761293",
  appId: "1:243414761293:web:fa118d66f29aedf56a0104",
  measurementId: "G-S1ES0HQ8PL"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const db = getFirestore();
const colRef = collection(db, 'Product');

getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
    let Product = [];
    snapshot.docs.forEach((doc) => {
      Product.push({ ...doc.data(), id: doc.id });
    });
    console.log(Product);
  })
  .catch((err) => {
    console.log(err.message);
  });