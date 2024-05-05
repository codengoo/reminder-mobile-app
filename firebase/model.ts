import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function readDoc() {
    try {
        const querySnapshot = await getDocs(collection(db, "re"));
        
        querySnapshot.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
            
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}