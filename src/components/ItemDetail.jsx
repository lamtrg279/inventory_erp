import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React from "react";
import { useState, useEffect } from "react";

const ItemDetail = ({ items = [] }) => {
  return (
    <div className="pt-38 flex justify-center items-center gap-1 flex-col">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-1/2 p-3 m-2 gap-x-3 border border-gray-300 rounded-lg shadow-sm bg-white flex justify-center items-center"
        >
          <p className="">{item.name} </p>
          <p className="">{item.quantity} </p>
          <p className="">{item.unit}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
