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
      <div className="bg-white p-6 rounded-lg shadow-lg w-300px max-w-2xl relative">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faCircleXmark} size="lg" />
        </button>
        <h2 className="text-2xl text-gray-900 mb-4 font-semibold">Your Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center justify-center mt-2 border border-2px mr-96 rounded-sm bg-gray-700 text-white">
                  <button
                    className=" py-1 px-3 rounded-l border-none"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="px-4">{quantities[item.id]}</span>
                  <button
                    className=" py-1 px-3 rounded-r border-none"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 p-5 "
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: "#db2929" }} />
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
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
