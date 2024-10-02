import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, closeModal, cart, removeFromCart }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Cart Modal"
    className="p-4 max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-lg"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div className="p-4 bg-white rounded shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Cart</h2>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-4 ">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center px-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h4 className="text-lg">{item.title}</h4>
                <p className="text-gray-700">${item.price}</p>
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
      )}
    </div>
  </Modal>
);

export default CartModal;
