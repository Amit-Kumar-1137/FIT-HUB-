import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  Dumbbell
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/Auth.css';

export default function Login() {
  const { cartCount, showToast } = useCart();
  const navigate = useNavigate();

  // Form input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation feedback states
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: '' }

  // Quick fill demo user credentials
  const handleFillDemoCreds = () => {
    setEmail('alex.fit@fithub.demo');
    setPassword('fitness2026');
    setErrors({});
    setFeedback({
      type: 'info',
      message: 'Demo credentials filled! Click "Sign In" to proceed.'
    });
  };

  // Basic frontend form validation
  const validateForm = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Form submission handler (frontend simulation only)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFeedback({
        type: 'error',
        message: 'Please resolve the highlighted validation errors.'
      });
      return;
    }

    // Successful simulated frontend login
    setFeedback({
      type: 'success',
      message: `Welcome back, ${email.split('@')[0]}! Frontend authentication verified.`
    });
    showToast('Signed in successfully (Frontend Simulation)!');

    // Simulate redirect to Home after 1.5 seconds
    setTimeout(() => {
      navigate('/planner');
    }, 1500);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container auth-page">
          <div className="auth-wrapper">
            <div className="auth-card">
              {/* Card Header */}
              <div className="auth-header">
                <div className="auth-icon-wrap">
                  <LogIn size={24} />
                </div>
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">
                  Sign in to access your workout routine, BMI metrics, and fitness logs.
                </p>
              </div>

              {/* Demo Mode Notice Banner */}
              <div className="auth-alert info" style={{ marginBottom: '16px' }}>
                <Sparkles size={18} />
                <span>Demo Mode Active: All pages and workouts are unlocked. Sign-in is optional!</span>
              </div>

              {/* Status Alert Banner */}
              {feedback && (
                <div className={`auth-alert ${feedback.type}`}>
                  {feedback.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{feedback.message}</span>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="auth-form" noValidate>
                {/* Email Field */}
                <div className="form-field">
                  <label htmlFor="login-email">Email Address</label>
                  <div className="input-with-icon">
                    <Mail className="field-icon" size={18} />
                    <input
                      id="login-email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={errors.email ? 'has-error' : ''}
                    />
                  </div>
                  {errors.email && (
                    <span className="field-error-text">{errors.email}</span>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-field">
                  <label htmlFor="login-password">Password</label>
                  <div className="input-with-icon">
                    <Lock className="field-icon" size={18} />
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors({ ...errors, password: null });
                      }}
                      className={errors.password ? 'has-error' : ''}
                    />
                    <button
                      type="button"
                      style={{
                        position: 'absolute',
                        right: '12px',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="field-error-text">{errors.password}</span>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="form-options-row">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>

                  <button
                    type="button"
                    className="btn-forgot-link"
                    onClick={() =>
                      showToast('Password reset link simulated. Check console/demo!')
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-auth-submit">
                  <span>Sign In</span>
                  <ArrowRight size={18} />
                </button>

                {/* Convenient 1-Click Demo Fill Button */}
                <button
                  type="button"
                  className="btn-demo-creds"
                  onClick={handleFillDemoCreds}
                >
                  <Sparkles size={15} />
                  <span>Auto-Fill Demo Credentials</span>
                </button>
              </form>

              {/* Switch to Register */}
              <div className="auth-switch-prompt">
                <span>Don't have an account yet?</span>
                <Link to="/register" className="auth-switch-link">
                  Create Account
                </Link>
              </div>

              {/* College Presentation Notice */}
              <p className="auth-disclaimer-footnote">
                Frontend demonstration only. No backend server or permanent database storage.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
