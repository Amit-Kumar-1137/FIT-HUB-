import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  User, 
  Mail, 
  Lock, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/Auth.css';

export default function Register() {
  const { cartCount, showToast } = useCart();
  const navigate = useNavigate();

  // Form input states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    fitnessGoal: 'Build Muscle',
    agreeTerms: false
  });

  // Validation feedback states
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  // Validate form fields on the frontend
  const validateForm = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.password) {
      errs.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      errs.confirmPassword = 'Confirmation password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must agree to the demo terms to proceed.';
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
        message: 'Please resolve all highlighted fields before submitting.'
      });
      return;
    }

    // Successful simulated frontend registration
    setFeedback({
      type: 'success',
      message: `Account created for ${formData.fullName}! Redirecting to planner...`
    });
    showToast('Registration successful (Frontend Demo)!');

    // Simulate redirect to Planner page after 1.2 seconds
    setTimeout(() => {
      navigate('/planner');
    }, 1200);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container auth-page">
          <div className="auth-wrapper">
            <div className="auth-card">
              {/* Header */}
              <div className="auth-header">
                <div className="auth-icon-wrap">
                  <UserPlus size={24} />
                </div>
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">
                  Join FIT HUB to start building your weekly workout schedule and track your BMI.
                </p>
              </div>

              {/* Demo Mode Notice Banner */}
              <div className="auth-alert info" style={{ marginBottom: '16px' }}>
                <Sparkles size={18} />
                <span>Demo Mode Active: You can explore and use all features directly without registering!</span>
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

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="auth-form" noValidate>
                {/* Full Name */}
                <div className="form-field">
                  <label htmlFor="reg-name">Full Name</label>
                  <div className="input-with-icon">
                    <User className="field-icon" size={18} />
                    <input
                      id="reg-name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      className={errors.fullName ? 'has-error' : ''}
                    />
                  </div>
                  {errors.fullName && (
                    <span className="field-error-text">{errors.fullName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-field">
                  <label htmlFor="reg-email">Email Address</label>
                  <div className="input-with-icon">
                    <Mail className="field-icon" size={18} />
                    <input
                      id="reg-email"
                      type="email"
                      placeholder="alex@fithub.demo"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={errors.email ? 'has-error' : ''}
                    />
                  </div>
                  {errors.email && (
                    <span className="field-error-text">{errors.email}</span>
                  )}
                </div>

                {/* Password */}
                <div className="form-field">
                  <label htmlFor="reg-pass">Password</label>
                  <div className="input-with-icon">
                    <Lock className="field-icon" size={18} />
                    <input
                      id="reg-pass"
                      type="password"
                      placeholder="Minimum 6 characters"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                        if (errors.password) setErrors({ ...errors, password: null });
                      }}
                      className={errors.password ? 'has-error' : ''}
                    />
                  </div>
                  {errors.password && (
                    <span className="field-error-text">{errors.password}</span>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="form-field">
                  <label htmlFor="reg-confirm-pass">Confirm Password</label>
                  <div className="input-with-icon">
                    <Lock className="field-icon" size={18} />
                    <input
                      id="reg-confirm-pass"
                      type="password"
                      placeholder="Re-enter password"
                      value={formData.confirmPassword}
                      onChange={(e) => {
                        setFormData({ ...formData, confirmPassword: e.target.value });
                        if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                      }}
                      className={errors.confirmPassword ? 'has-error' : ''}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <span className="field-error-text">{errors.confirmPassword}</span>
                  )}
                </div>

                {/* Primary Fitness Goal */}
                <div className="form-field">
                  <label htmlFor="reg-goal">Primary Fitness Goal</label>
                  <div className="input-with-icon">
                    <Target className="field-icon" size={18} />
                    <select
                      id="reg-goal"
                      value={formData.fitnessGoal}
                      onChange={(e) =>
                        setFormData({ ...formData, fitnessGoal: e.target.value })
                      }
                    >
                      <option value="Build Muscle">Build Muscle & Strength</option>
                      <option value="Weight Loss">Weight Loss & Fat Reduction</option>
                      <option value="Endurance">Cardiovascular Endurance</option>
                      <option value="Flexibility">Flexibility & Joint Health</option>
                      <option value="General Health">General Longevity & Wellness</option>
                    </select>
                  </div>
                </div>

                {/* Agree to Terms Checkbox */}
                <div className="form-field">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => {
                        setFormData({ ...formData, agreeTerms: e.target.checked });
                        if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: null });
                      }}
                    />
                    <span>
                      I agree that this is a frontend academic demo project.
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <span className="field-error-text">{errors.agreeTerms}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-auth-submit">
                  <span>Create Account</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Switch to Login */}
              <div className="auth-switch-prompt">
                <span>Already have an account?</span>
                <Link to="/login" className="auth-switch-link">
                  Sign In
                </Link>
              </div>

              {/* Presentation footnote */}
              <p className="auth-disclaimer-footnote">
                Frontend demonstration only. No backend database integration.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
