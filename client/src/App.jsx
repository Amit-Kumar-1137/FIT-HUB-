import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Separate Page Components
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Planner from './pages/Planner';
import Shop from './pages/Shop';
import BMI from './pages/BMI';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Register from './pages/Register';

// Create a Context for the Shop Cart so all pages can access and modify it
export const CartContext = createContext();

// Custom hook for consuming the CartContext easily
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Automatically scroll to the top of the page when the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Global cart state for the frontend shop interaction
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-1',
      name: 'Adjustable Dumbbell Set (20kg)',
      category: 'Equipment',
      price: 2899,
      image: '/images/product-dumbbells.svg',
      quantity: 1
    }
  ]);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    showToast('Item removed from cart.');
  };

  // Update quantity (+ or -)
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Clear entire cart (e.g. after demo checkout)
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items in cart for the Navbar badge
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        showToast
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Fallback to Home page for any unrecognized route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Floating Toast Alert */}
        {toastMessage && (
          <div className="global-toast">
            <span>⚡ {toastMessage}</span>
          </div>
        )}
      </BrowserRouter>
    </CartContext.Provider>
  );
}
