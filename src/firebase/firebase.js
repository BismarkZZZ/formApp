import * as firebase from 'firebase'
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyA5B9rrxoJLukFhJHXj6bBQEkg-eiEFpyU",
    authDomain: "formapp-c471c.firebaseapp.com",
    projectId: "formapp-c471c",
    storageBucket: "formapp-c471c.appspot.com",
    messagingSenderId: "1016469153785",
    appId: "1:1016469153785:web:b0cede37fcececc895bf28"
};

firebase.initializeApp(firebaseConfig)

export default firebase;