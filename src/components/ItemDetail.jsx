import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React from "react";
import { useState, useEffect } from "react";

const ItemDetail = ({ items = [] }) => {
  return (
    <div className="pt-20 flex justify-center items-center gap-1 flex-col">
      {items.map((item) => (
        <div
          key={item.id}
          className="inline-grid h-15 p-3 m-2 gap-x-3 border border-gray-300 rounded-lg shadow-sm bg-white  grid-cols-[1fr_auto_auto] items-center hover:shadow-md transition-shadow"
        >
          <p className="text-gray-800 font-medium truncate w-32 px-4">
            {item.name}
          </p>
          <p className="text-gray-600 font-semibold text-center w-14">
            {item.quantity}
          </p>
          <p className="text-gray-500 text-center w-14">{item.unit}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
