/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaPlusSquare } from "react-icons/fa";
import { unitOptions } from "../data/units";

const ItemInput = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [customUnit, setCustomUnit] = useState("");

  // Add item to firestore database
  const addItem = async () => {
    const finalUnit = unit === "Other" ? customUnit : unit;
    try {
      console.log("hello");
      const item = await addDoc(collection(db, "items"), {
        name: name,
        quantity: Number(quantity) || 1,
        unit: finalUnit,
      });

      setName("");
      setQuantity(0);
      setUnit("");
      setCustomUnit("");

      console.log("Document written", item.id);
      if (onAdd) onAdd(); // refresh list
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
        className="pl-4 rounded-lg w-40 border border-gray-300 shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-300 transition duration-200 bg-white hover:shadow-md"
        value={quantity}
        placeholder="Enter quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <select
        className="px-4 rounded-lg border border-gray-300 shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-300 transition duration-200 bg-white hover:shadow-md"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="">Select unit</option>
        {unitOptions.map((unitOption) => (
          <option key={unitOption} value={unitOption}>
            {unitOption}
          </option>
        ))}
      </select>
      {unit === "Other" && (
        <input
          className="pl-4 rounded-lg border border-gray-300 shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-400 focus:border-green-300 transition duration-200 bg-white hover:shadow-md"
          value={customUnit}
          placeholder="Enter custom unit"
          onChange={(e) => setCustomUnit(e.target.value)}
        />
      )}
      <button onClick={addItem} className="flex justify-center items-center">
        <FaPlusSquare className="w-8 h-8 shadow-sm hover:shadow-lg text-blue-500 hover:text-blue-700 transition duration-300" />
      </button>
    </div>
  );
};

export default ItemInput;
