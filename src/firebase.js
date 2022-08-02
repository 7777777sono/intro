import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjHs767VdwOFxMNs0srCObjrCqVzKA8zI",
  authDomain: "portfolio-737bc.firebaseapp.com",
  projectId: "portfolio-737bc",
  storageBucket: "portfolio-737bc.appspot.com",
  messagingSenderId: "366315671943",
  appId: "1:366315671943:web:4b73e16c041ff36134c322",
  measurementId: "G-247CH6V51Z",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
