import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGpA2fM8fzN9xchRVD3O01TKZ8DAasDSg",
    authDomain: "profitandloss-e8d9b.firebaseapp.com",
    projectId: "profitandloss-e8d9b",
    storageBucket: "profitandloss-e8d9b.appspot.com",
    messagingSenderId: "1023877880213",
    appId: "1:1023877880213:web:89f463bf25fc88948fbe9c"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore();