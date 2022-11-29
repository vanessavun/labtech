import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "labtech-44e37.firebaseapp.com",
  projectId: "labtech-44e37",
  storageBucket: "labtech-44e37.appspot.com",
  messagingSenderId: "361742183271",
  appId: "1:361742183271:web:b5d63a35b771bb68da9dc2",
  measurementId: "G-CV0L2DL4KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add data
export const addData = async() => {
  // const futureTime = Date.now() + 10000
  try {
      const docRef = addDoc(collection(db, "batch"),{
        batchId: 1,
        test: "extraction",
        time: 15000,
        isTimerActive: false
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

// Read data
export const readData = async() => {
    const querySnapshot = await getDocs(collection(db, "batch"));
    
    querySnapshot.forEach((doc) => {
      console.log(`Doc batchId: ${doc.batchId}`);
    });
}
