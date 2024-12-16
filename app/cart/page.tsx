'use client'

import React, { useState } from 'react';
import Footer from "../../components/Footer"
import Header from "../../components/Header"

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Burger', price: 35, quantity: 1, image: '/images/burger.png' },
    { id: 2, name: 'Fresh Lime', price: 25, quantity: 1, image: '/images/lime.png' },
    { id: 3, name: 'Pizza', price: 15, quantity: 1, image: '/images/pizza.png' },
    { id: 4, name: 'Chocolate Muffin', price: 45, quantity: 1, image: '/images/muffin.png' },
    { id: 5, name: 'Cheese Butter', price: 15, quantity: 1, image: '/images/cheese.png' },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Header />
    <div>
        <img src="images/cartheader.png" alt="" />
    </div>
    <div className="px-44 py-10 max-sm:px-5 bg-white text-black">
      <h1 className="text-3xl font-semibold text-center mb-6">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full min-w-max border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="text-sm md:text-base">{item.name}</span>
                </td>
                <td className="p-3 text-center">${item.price.toFixed(2)}</td>
                <td className="p-3 flex items-center justify-center gap-2">
                  <button
                    className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </td>
                <td className="p-3 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-6 gap-6">
        <div className="w-full lg:w-1/2 p-4 border border-gray-200 rounded">
          <h3 className="font-semibold mb-2">Coupon Code</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter code"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Apply
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 border border-gray-200 rounded">
          <h3 className="font-semibold mb-4">Total Bill</h3>
          <div className="flex justify-between mb-2">
            <span>Cart Subtotal:</span>
            <span>${cartSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount:</span>
            <span>${cartSubtotal.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </>

  );
};

export default ShoppingCart;
