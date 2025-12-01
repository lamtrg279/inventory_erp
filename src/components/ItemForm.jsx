import React from "react";
import ItemInput from "./ItemInput";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ItemForm = () => {
  const [items, setItems] = useState([]);

  // Fetch items from Firestore
  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(data);
    console.log("Items loaded:", data);
  };

  return (
    <>
      <ItemInput onAdd={loadItems} />
      <ItemDetail items={items} />
    </>
  );
};

export default ItemForm;
