import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight } from 'lucide-react';
import '../styles/Footer.css';

/**
 * Footer Component
 * Brand information, quick navigation links, and workout categories.
 */
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon-wrap">
                <Dumbbell size={22} />
              </div>
              <span>
                FIT <span className="logo-highlight">HUB</span>
              </span>
            </Link>
            <p className="footer-desc">
              Your modern, beginner-friendly fitness companion. Discover workouts, organize
              your weekly routine, monitor BMI metrics, and build lifelong healthy habits.
            </p>
            <div className="footer-badges">
              <span className="badge-tag">React + Vite</span>
              <span className="badge-tag">Pure CSS3</span>
              <span className="badge-tag">Frontend Only</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link-item">
                  <ArrowRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="footer-link-item">
                  <ArrowRight size={14} /> Exercises
                </Link>
              </li>
              <li>
                <Link to="/planner" className="footer-link-item">
                  <ArrowRight size={14} /> Weekly Planner
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-link-item">
                  <ArrowRight size={14} /> Fitness Store
                </Link>
              </li>
              <li>
                <Link to="/bmi" className="footer-link-item">
                  <ArrowRight size={14} /> BMI Calculator
                </Link>
              </li>
              <li>
                <Link to="/reports" className="footer-link-item">
                  <ArrowRight size={14} /> Analytics & Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Workout Styles */}
          <div>
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/exercises" className="footer-link-item">
                  Strength & Hypertrophy
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="footer-link-item">
                  HIIT & Calorie Burn
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="footer-link-item">
                  Yoga & Mobility Flow
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="footer-link-item">
                  Cardio Endurance
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="footer-link-item">
                  Core & Abs Conditioning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 FIT HUB. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span style={{ color: 'var(--accent-color)' }}>Keep Moving Forward</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
