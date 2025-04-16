import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';
import ItemComponent from './ItemComponent';

const CartApp = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const items = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 199.99 },
  ];

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-8 mb-8">
        {items.map((item) => (
          <>
          <ItemComponent
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
              <button
          onClick={() => handleAddToCart(item)}
          className="w-full py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600"
        ></button>
          </>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p>{item.name} - ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                  >
                    + Quantity
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartApp;
