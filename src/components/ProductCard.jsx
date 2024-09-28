import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg">
      <div className="relative">
        <img
          className="w-full h-60 object-contain"
          src={product.image}
          alt={product.title}
        />
        <hr className="mt-3" />
      </div>

      <div className="p-4 flex justify-between items-center">
        <h3 className="text-gray-900 font-medium text-md">{product.title}</h3>
        <span className="text-sm text-yellow-400 font-bold mt-0 mb-4 p-1">
          ${product.price}
        </span>
      </div>

      <div className="mt-auto px-4 pb-4">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-gray-100 text-gray-800 font-semibold py-2 rounded-md hover:bg-yellow-400 hover:text-white transition-colors duration-300"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
