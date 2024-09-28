import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import Example from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Example />
      <Navbar cartCount={cartItems.length} setIsModalOpen={setIsModalOpen} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {isModalOpen && (
        <CartModal
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          setIsModalOpen={setIsModalOpen}
        />
      )}
       <Footer />
    </div>
  );
};

export default App;
