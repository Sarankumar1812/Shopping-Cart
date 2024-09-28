import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-40 mx-auto py-10 ">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="text-indigo-600 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
