import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";

const Navbar = ({ cartCount, setIsModalOpen, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
  };

  const filterProductsByCategory = (category) => {
    setFilteredProducts(category);
  };

  return (
    <nav className="bg-gray-700 p-4 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-around items-center">
        
       
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w- h-8 mr-4" />
        </div>

      <div className="flex  gap-20 pl-10">
        
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative p">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="py-2 px-4 pr-20 rounded-md border border-gray-300"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 pr-2" />
            </button>
          </div>
        </form>

       
        <div className="flex items-center space-x-12">
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Products
          </a>
          <a href="#" className="text-white hover:underline">
            Contact
          </a>
        </div>

        </div>
        <button
          className="bg-white text-gray-700 px-4 py-2 rounded flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <FontAwesomeIcon icon={faBagShopping} className="mr-2" />
          <span>Cart ({cartCount})</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
