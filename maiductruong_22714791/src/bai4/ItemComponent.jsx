import React from 'react';

const ItemComponent = ({ id, name, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-80">
      <h2 className="text-xl font-bold text-gray-800">Item ID: {id}</h2>
      <p className="text-gray-700">Name: {name}</p>
      <p className="text-gray-500">Price: ${price}</p>
    </div>
  );
};
export default ItemComponent;
