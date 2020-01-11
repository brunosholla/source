import firebase from "firebase";
import {data} from './g/data'
// Initialize Firebase
/*const config = {
  apiKey: "AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10",
  authDomain: "wieldy-4f59c.firebaseapp.com",
  databaseURL: "https://wieldy-4f59c.firebaseio.com",
  projectId: "wieldy-4f59c",
  storageBucket: "wieldy-4f59c.appspot.com",
  messagingSenderId: "81949884261"
};*/

const config = {
    apiKey: "AIzaSyC2yflA7WHukLAoJpo2l_uvJuNhobuPzic",
    authDomain: "restaurant-2e334.firebaseapp.com",
    databaseURL: "https://restaurant-2e334.firebaseio.com",
    projectId: "restaurant-2e334",
    storageBucket: "restaurant-2e334.appspot.com",
    messagingSenderId: "54815075448"
};


firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();


const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});


const getAllDataFromDB = async (table) => {
    const res = await db.collection(`/${table}`).get()
        .then(querySnapshot => {
            return querySnapshot.docs.map(doc => doc.data());
        });
    return res;
}

const getDataFromDB = async (table, id) => {
    return await db.collection(`/${table}`).doc(id).get()
        .then(doc => {
            return doc.data()
        });

}

const loadImageFromStorage = async (filePath) => {
    return await firebase.storage().ref().child(filePath).getDownloadURL().then((url) => {
        return url
    });

}


/*

Products.map(d=>{
    //console.log(d)
    db.collection('/products').add(d);
})
*/





export {
    database,
    auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    getDataFromDB,
    loadImageFromStorage,
    getAllDataFromDB
};
