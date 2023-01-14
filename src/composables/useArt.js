import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export function useArt (somefuction){
    
    onSnapshot(doc(db, "shows", "gallery"), (doc) => {
        const { frame } = doc.data();
        console.log("USE ART Frame", frame); 


        return frame
      
      });

    //   return { useArt }

}