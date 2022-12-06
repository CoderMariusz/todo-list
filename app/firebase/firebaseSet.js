'use client';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDfCpoBw8fGaS6t3oQ0Ryq7_-47wZKJUJg',
  authDomain: 'todos-94430.firebaseapp.com',
  projectId: 'todos-94430',
  storageBucket: 'todos-94430.appspot.com',
  messagingSenderId: '258409484919',
  appId: '1:258409484919:web:5717a18da7d93805a62c72',
  measurementId: 'G-NYLKB5HVLD',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
