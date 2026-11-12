
import React, { useEffect } from "react";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function ideas () {
    const handlerFetch= async () => {
        try {         
const querySnapshot = await getDocs(collection(db, "business_Ideas"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
const singleItem = {
    id: doc.id,
    ...doc.data(),
  };

     
});

        } catch (error) {
            console.error("Error>>>>>>:", error)
            alert("An error occurred while searching for ideas. Please try again later.");
        }

        useEffect(() => {
            handlerFetch();
        }, []);
    return (
        
        <div>

        </div>

    )
}}