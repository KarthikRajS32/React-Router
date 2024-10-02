import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
}) => {
  return (
    <div className="p-4 max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Cart</h2>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="grid grid-cols-4 items-center text-center gap-7">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600 font-semibold">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-800 py-1 px-2 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-800 py-1 px-2 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <h3 className="text-xl text-green-600 font-bold">
              Total Price: ${calculateTotalPrice()}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
