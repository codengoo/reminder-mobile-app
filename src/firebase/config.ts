import { initializeApp } from 'firebase/app';
import { getFirestore,  } from "firebase/firestore";

const app = initializeApp({
    apiKey: 'AIzaSyCKEfhIDMXeHZWSV1NsL_Rn7YMvV2VafMw',
    authDomain: 'reminder-4bfb8.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'reminder-4bfb8',
    storageBucket: 'reminder-4bfb8.appspot.com',
    messagingSenderId: '282577162883',
    appId: '1:282577162883:web:4fbfec832184327ca681b6',
});

export const db = getFirestore(app);