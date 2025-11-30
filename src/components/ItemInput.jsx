/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaPlusSquare } from "react-icons/fa";

const ItemInput = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = async () => {
    try {
      console.log("hello");
      const item = await addDoc(collection(db, "items"), {
        name: name,
        quantity: Number(quantity) || 1,
      });

      setName("");
      setQuantity(0);
      console.log("document written", item.id);
    } catch (e) {
      console.error("error", e);
    }
  };
  return (
    <div className="pt-38 flex justify-center flex-wrap gap-1">
      <input
        className="pl-4 rounded-lg border border-gray-300 shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-300 transition duration-200 bg-white hover:shadow-md"
        value={name}
        placeholder="Enter item"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="pl-4 rounded-lg border border-gray-300 shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-300 transition duration-200 bg-white hover:shadow-md"
        value={quantity}
        placeholder="Enter quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addItem} className="flex justify-center items-center">
        <FaPlusSquare className="w-8 h-8 shadow-sm hover:shadow-lg text-blue-300 hover:text-blue-500 transition duration-300" />
      </button>
    </div>
  );
};

export default ItemInput;
