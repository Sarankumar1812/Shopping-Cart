import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="flex justify-around items-center">
        <h1 className="text-white text-2xl">
          <img src={Logo} alt="Logo" />
        </h1>

        <div className="flex items-center space-x-4 gap-10">
          <a href="#" className="text-white">
            Home
          </a>
          <div className="relative group">
            <button className="text-white">
              Products 
            </button>
            
          </div>

          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="py-1 px-4 pr-10 rounded-md border border-gray-300"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-600"
                />
              </button>
            </div>
          </form>

          <a href="#" className="text-white">
            Contact
          </a>
          <button
            className="bg-white text-gray-700 px-4 py-2 rounded flex items-center"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex justify-center items-center gap-2">
              <span className="ml-2">Cart ({cartCount})</span>
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
