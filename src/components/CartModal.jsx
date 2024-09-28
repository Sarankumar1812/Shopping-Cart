import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartModal = ({ cartItems, removeFromCart, setIsModalOpen }) => {
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, prevQuantities[id] + change);
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  const totalValue = cartItems.reduce((total, item) => {
    return total + item.price * quantities[item.id];
  }, 0);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faCircleXmark} size="lg" />
        </button>
        <h2 className="text-2xl text-gray-900 mb-4 font-bold">Your Cart</h2>

        <div className="max-h-80 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex justify-between items-center mb-4 space-x-4">
                  <div className="w-28 h-28 border border-gray-300 flex justify-center items-center p-2 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg">{item.title}</h3>
                    <p className="text-yellow-400">${item.price}</p>
                    <div className="flex items-center mt-2 border border-2px rounded-sm bg-gray-700 text-white w-28">
                      <button
                        className="py-1 px-3 rounded-l border-none"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="px-4">{quantities[item.id]}</span>
                      <button
                        className="py-1 px-3 rounded-r border-none"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 pr-8"
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#db2929" }} />
                  </button>
                </div>

                {/* Horizontal line separating each product */}
                {index < cartItems.length - 1 && <hr className="my-4" />}
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <hr className="my-4" />
        <div className="mt-4">
          <h3 className="text-lg">Total: ${totalValue.toFixed(2)}</h3>
        </div>
        <button
          className="bg-gray-700 text-white mt-4 py-2 px-4 rounded-sm w-full"
          onClick={() => {
            alert("Proceeding to checkout!");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;
