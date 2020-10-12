import "firebase/auth"
import * as firebase from "firebase/app"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCZFUXVW3IllH2ktdvkfg8EeE2AXN4PfS4",
    authDomain: "fir-training-bf269.firebaseapp.com",
    databaseURL: "https://fir-training-bf269.firebaseio.com",
    projectId: "fir-training-bf269",
    storageBucket: "fir-training-bf269.appspot.com",
    messagingSenderId: "1017820402249",
    appId: "1:1017820402249:web:21f5bf53abb71deac92598"
});

export default app;