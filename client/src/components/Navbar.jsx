import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Dumbbell, ShoppingBag, Menu, X, LogIn, UserPlus } from 'lucide-react';
import '../styles/Navbar.css';

/**
 * Navbar Component
 * Fixed header with navigation links, cart badge, auth buttons,
 * and responsive mobile drawer.
 */
export default function Navbar({ cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Add subtle shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Main navigation link definitions
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Exercises', path: '/exercises' },
    { label: 'Planner', path: '/planner' },
    { label: 'Shop', path: '/shop' },
    { label: 'BMI Calculator', path: '/bmi' },
    { label: 'Reports', path: '/reports' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon-wrap">
            <Dumbbell size={22} />
          </div>
          <span>
            FIT <span className="logo-highlight">HUB</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link-item ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Cart & Auth) */}
        <div className="nav-actions">
          {/* Shopping Cart Button */}
          <Link to="/shop" className="cart-button" title="View Shop & Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* Login Button */}
          <Link to="/login" className="btn-nav-login">
            <LogIn size={16} />
            <span>Login</span>
          </Link>

          {/* Register Button */}
          <Link to="/register" className="btn-nav-register">
            <UserPlus size={16} />
            <span>Sign Up</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `mobile-nav-item ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-actions">
          <Link to="/login" className="btn-nav-login">
            <LogIn size={16} />
            <span>Sign In</span>
          </Link>
          <Link to="/register" className="btn-nav-register">
            <UserPlus size={16} />
            <span>Create Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
