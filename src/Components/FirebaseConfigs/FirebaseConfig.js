import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth';
import {getFirestore} from  'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBMQCxmAuqQrh3Ux_pe38kd2Fq1FpEX7Nc",
    authDomain: "e-commerce-201ee.firebaseapp.com",
    projectId: "e-commerce-201ee",
    storageBucket: "e-commerce-201ee.appspot.com",
    messagingSenderId: "61348924366",
    appId: "1:61348924366:web:15db8342408224dc00b99f",
    measurementId: "G-38D8FBR5NK"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const db = getFirestore(app);