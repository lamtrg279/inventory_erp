import React from "react";
import ItemInput from "./ItemInput";
import ItemDetail from "./ItemDetail";
import { useState, useEffect, startTransition } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
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
    startTransition(() => setItems(data));
    console.log("Items loaded:", data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "items", id));
    loadItems();
  };

  return (
    <>
      <ItemInput onAdd={loadItems} />
      <ItemDetail items={items} onDelete={handleDelete} />
    </>
  );
};

export default ItemForm;
