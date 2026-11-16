import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  CheckCircle2, 
  X, 
  Star, 
  ShieldCheck, 
  Truck, 
  ArrowRight 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/Shop.css';

/**
 * Product Catalog Data
 * All prices specified in Indian National Rupees (₹).
 */
const productsData = [
  {
    id: 'prod-1',
    name: 'Adjustable Dumbbell Set (20kg)',
    category: 'Equipment',
    badge: 'Bestseller',
    rating: 4.9,
    price: 2899,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/product-dumbbells.svg',
    description: 'Precision knurled ergonomic steel handles with quick-lock weight plates for full-body progression.'
  },
  {
    id: 'prod-2',
    name: '100% Whey Protein Isolate (2kg)',
    category: 'Supplements',
    badge: '27g Protein',
    rating: 4.8,
    price: 3499,
    originalPrice: 4899,
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/product-protein.svg',
    description: 'Ultra-pure micro-filtered whey isolate packed with 5.5g BCAAs per scoop. Zero added sugar.'
  },
  {
    id: 'prod-3',
    name: 'High-Density Non-Slip Yoga Mat (6mm)',
    category: 'Equipment',
    badge: 'Eco-TPE',
    rating: 4.7,
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/product-mat.svg',
    description: 'Textured dual-sided alignment lines and superior joint cushioning for yoga, pilates, and floor routines.'
  },
  {
    id: 'prod-4',
    name: 'Heavy-Duty Resistance Loop Bands (5 Pack)',
    category: 'Equipment',
    badge: 'Full Set',
    rating: 4.9,
    price: 699,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/product-bands.svg',
    description: 'Natural Malaysian latex resistance loop bands calibrated from X-Light (5 lbs) to X-Heavy (40 lbs).'
  },
  {
    id: 'prod-5',
    name: 'Creapure Micronized Creatine (300g)',
    category: 'Supplements',
    badge: '100% Pure',
    rating: 4.9,
    price: 1199,
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/product-protein.svg',
    description: 'Laboratory-tested unflavored creatine monohydrate to elevate phosphocreatine cellular ATP output.'
  },
  {
    id: 'prod-6',
    name: 'Stainless Steel Insulated Shaker (750ml)',
    category: 'Accessories',
    badge: 'Leak Proof',
    rating: 4.6,
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/hero-fitness.svg',
    description: 'Double-walled vacuum insulated protein shaker keeps shakes cold for 24 hours. Odor-resistant.'
  },
  {
    id: 'prod-7',
    name: 'Padded Weightlifting Gym Straps',
    category: 'Accessories',
    badge: 'Heavy Grip',
    rating: 4.8,
    price: 499,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/product-bands.svg',
    description: 'Neoprene wrist-padded cotton webbing lifting straps to eliminate grip failure during deadlifts.'
  },
  {
    id: 'prod-8',
    name: 'FIT HUB Breathable Performance Tee',
    category: 'Apparel',
    badge: 'Dry-Fit',
    rating: 4.7,
    price: 899,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/hero-fitness.svg',
    description: '4-way stretch moisture-wicking poly-spandex athletic t-shirt for maximum mobility and cooling.'
  }
];

export default function Shop() {
  const { cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Cart Drawer open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Simulated Demo Order confirmation modal state
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [simulatedOrderId, setSimulatedOrderId] = useState('');

  const categories = ['All', 'Equipment', 'Supplements', 'Accessories', 'Apparel'];

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return productsData;
    return productsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Compute Cart Financials in Indian Rupees (₹)
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = cartSubtotal > 1500 || cartSubtotal === 0 ? 0 : 99;
  const cartGrandTotal = cartSubtotal + shippingFee;

  // Handle simulated checkout
  const handleCheckoutDemo = () => {
    if (cartItems.length === 0) return;
    const randomId = 'FH-' + Math.floor(100000 + Math.random() * 900000);
    setSimulatedOrderId(randomId);
    setOrderModalOpen(true);
    setIsCartOpen(false);
    clearCart();
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container shop-page">
          {/* Page Header */}
          <div className="shop-header-box">
            <span className="section-tag">
              <ShoppingBag size={14} /> Official Store
            </span>
            <h1 className="page-title">FIT HUB Fitness Store</h1>
            <p className="page-subtitle">
              Gear up with premium training equipment, clean supplements, and athletic essentials.
              Prices displayed in Indian Rupees (₹) with interactive frontend cart state.
            </p>
          </div>

          {/* Shop Toolbar: Category Pills & Cart Toggle Trigger */}
          <div className="shop-toolbar">
            <div className="shop-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`shop-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="cart-toggle-trigger"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={18} />
              <span>Cart ({cartCount} items)</span>
            </button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                    onError={(e) => {
                      e.currentTarget.src = product.fallbackImage;
                    }}
                  />
                  {product.badge && (
                    <span className="product-badge-tag">{product.badge}</span>
                  )}
                </div>

                <div className="product-body">
                  <span className="product-category-sub">{product.category}</span>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>

                  <div className="product-pricing-row">
                    <span className="price-current">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="price-original">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn-add-cart"
                    onClick={() => addToCart(product)}
                  >
                    <Plus size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CART SLIDE-OUT DRAWER ================= */}
        {isCartOpen && (
          <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
            <div
              className="cart-drawer-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cart-drawer-header">
                <h2>Your Shopping Cart ({cartCount})</h2>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="cart-drawer-body">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="cart-item-card">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-thumb"
                        onError={(e) => {
                          e.currentTarget.src = '/images/hero-fitness.svg';
                        }}
                      />
                      <div className="cart-item-details">
                        <h4 className="cart-item-title">{item.name}</h4>
                        <p className="cart-item-price">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>

                        <div className="cart-quantity-controls">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cart-item-remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="cart-empty-view">
                    <ShoppingBag size={48} style={{ opacity: 0.3 }} />
                    <p>Your shopping cart is currently empty.</p>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="cart-drawer-footer">
                  <div className="cart-summary-line">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="cart-summary-line">
                    <span>Shipping (Free over ₹1,500)</span>
                    <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>

                  <div className="cart-summary-line total">
                    <span>Total Amount</span>
                    <span>₹{cartGrandTotal.toLocaleString('en-IN')}</span>
                  </div>

                  <button
                    type="button"
                    className="btn-checkout-demo"
                    onClick={handleCheckoutDemo}
                  >
                    Proceed to Checkout (Demo)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= SIMULATED DEMO ORDER CONFIRMATION MODAL ================= */}
        {orderModalOpen && (
          <div
            className="exercise-modal-overlay"
            onClick={() => setOrderModalOpen(false)}
          >
            <div
              className="order-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="order-success-icon">
                <CheckCircle2 size={36} />
              </div>

              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                Order Placed Successfully!
              </h2>

              <p style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '16px' }}>
                Order Reference: #{simulatedOrderId}
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '24px' }}>
                This is a <strong>frontend demonstration</strong>. No real credit card or bank
                transactions have occurred, and no database records are saved. Your cart has been reset.
              </p>

              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setOrderModalOpen(false)}
              >
                <span>Continue Browsing Products</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
