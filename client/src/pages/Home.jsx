import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Calendar, 
  Calculator, 
  BarChart3, 
  ArrowRight, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Award, 
  Zap, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/Home.css';

/**
 * Home Page Component
 * Landing page featuring:
 * - Hero banner with call-to-actions and floating statistics
 * - Key platform features
 * - Featured workout routines with categories & burn stats
 * - Benefits of consistent fitness tracking
 * - Call to Action registration banner
 */
export default function Home() {
  const { cartCount } = useCart();

  // Core features data array
  const features = [
    {
      icon: <Dumbbell size={26} />,
      title: 'Curated Exercise Library',
      description: 'Explore 56 targeted exercises across Chest, Back, Shoulder, Biceps, Triceps, Leg, Cardio, and Strength with form guides.',
      link: '/exercises',
      linkText: 'Explore Exercises'
    },
    {
      icon: <Calendar size={26} />,
      title: 'Weekly Routine Planner',
      description: 'Schedule your workouts Monday through Sunday, mark sessions completed, and maintain consistency.',
      link: '/planner',
      linkText: 'Open Planner'
    },
    {
      icon: <Calculator size={26} />,
      title: 'Smart BMI Calculator',
      description: 'Calculate your Body Mass Index with metric or imperial units and receive tailored fitness recommendations.',
      link: '/bmi',
      linkText: 'Calculate BMI'
    },
    {
      icon: <BarChart3 size={26} />,
      title: 'Interactive Analytics',
      description: 'Inspect workout frequency, calorie burn distribution, and progress trends rendered with demo visual charts.',
      link: '/reports',
      linkText: 'View Reports'
    }
  ];

  // Featured workouts data array
  const featuredWorkouts = [
    {
      id: 1,
      title: 'Full Body HIIT Conditioning',
      category: 'HIIT & Burn',
      description: 'High-intensity interval training designed to maximize calorie burn and elevate cardiovascular endurance in minimum time.',
      duration: '35 mins',
      calories: '380 kcal',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      fallbackImage: '/images/workout-hiit.svg'
    },
    {
      id: 2,
      title: 'Hypertrophy Upper Body Push',
      category: 'Strength',
      description: 'A dedicated resistance session targeting the chest, shoulders, and triceps with progressive overload fundamentals.',
      duration: '45 mins',
      calories: '320 kcal',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
      fallbackImage: '/images/workout-strength.svg'
    },
    {
      id: 3,
      title: 'Morning Vinyasa Mobility Flow',
      category: 'Yoga & Flow',
      description: 'Invigorate your joints, stretch tight hip flexors, and enhance core balance with this fluid yoga sequence.',
      duration: '25 mins',
      calories: '160 kcal',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      fallbackImage: '/images/workout-yoga.svg'
    }
  ];

  // Benefits list data array
  const benefits = [
    {
      title: 'Built-in Weekly Accountability',
      desc: 'Visualizing your 7-day schedule turns fitness into an automatic, stress-free habit.'
    },
    {
      title: 'Targeted Muscle Group Balancing',
      desc: 'Filter exercises by body part to prevent overtraining and ensure balanced hypertrophy.'
    },
    {
      title: 'Instant BMI & Health Categorization',
      desc: 'Instantly identify whether you are in underweight, normal, overweight, or obese ranges.'
    },
    {
      title: 'Zero Complicated Setup',
      desc: '100% frontend browser execution with lightning-fast Vite performance and modern styling.'
    }
  ];

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        {/* ================= HERO SECTION ================= */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              {/* Left Column: Headline and Call-to-actions */}
              <div className="hero-text-content">
                <div className="hero-badge">
                  <Zap size={14} />
                  <span>Next-Gen Fitness Dashboard</span>
                </div>

                <h1 className="hero-title">
                  Build Your Stronger Self With{' '}
                  <span className="hero-title-accent">FIT HUB</span>
                </h1>

                <p className="hero-description">
                  The all-in-one frontend fitness platform. Discover structured exercises,
                  organize your weekly training schedule, compute your BMI, and track your
                  body transformation — all right inside your browser.
                </p>

                <div className="hero-cta-group">
                  <Link to="/exercises" className="btn-primary">
                    <span>Explore Workouts</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/planner" className="btn-secondary">
                    <Calendar size={18} />
                    <span>Weekly Planner</span>
                  </Link>
                </div>

                {/* Key Stats Counter Row */}
                <div className="hero-stats-row">
                  <div className="stat-item">
                    <h3>50+</h3>
                    <p>Exercises</p>
                  </div>
                  <div className="stat-item">
                    <h3>7-Day</h3>
                    <p>Planner</p>
                  </div>
                  <div className="stat-item">
                    <h3>Smart</h3>
                    <p>BMI Tool</p>
                  </div>
                  <div className="stat-item">
                    <h3>100%</h3>
                    <p>Free Demo</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Card with Floating Badges */}
              <div className="hero-visual-card">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                  alt="FIT HUB Training"
                  className="hero-main-img"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-fitness.svg';
                  }}
                />

                {/* Floating Badge Top Left */}
                <div className="floating-pill top-left">
                  <div className="pill-icon">
                    <Flame size={20} />
                  </div>
                  <div className="pill-text">
                    <span>Today's Burn</span>
                    <strong>540 kcal Completed</strong>
                  </div>
                </div>

                {/* Floating Badge Bottom Right */}
                <div className="floating-pill bottom-right">
                  <div className="pill-icon">
                    <Award size={20} />
                  </div>
                  <div className="pill-text">
                    <span>Active Streak</span>
                    <strong>6 Days Consistent</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Key Capabilities</span>
              <h2 className="section-title">Everything You Need to Stay on Track</h2>
              <p className="section-subtitle">
                FIT HUB gives you lightweight, focused tools designed to plan, exercise, and review
                your progress without any backend setup.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feat, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon-wrapper">{feat.icon}</div>
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-description">{feat.description}</p>
                  <Link to={feat.link} className="feature-link">
                    <span>{feat.linkText}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURED WORKOUTS SECTION ================= */}
        <section className="featured-workouts-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Featured Routines</span>
              <h2 className="section-title">Top Workouts for High Performance</h2>
              <p className="section-subtitle">
                Handpicked workout routines crafted to trigger muscle activation, boost stamina, and
                improve recovery.
              </p>
            </div>

            <div className="workouts-grid">
              {featuredWorkouts.map((workout) => (
                <div key={workout.id} className="workout-card">
                  <div className="workout-card-img-wrap">
                    <img
                      src={workout.image}
                      alt={workout.title}
                      className="workout-card-img"
                      onError={(e) => {
                        e.currentTarget.src = workout.fallbackImage;
                      }}
                    />
                    <span className="workout-category-tag">{workout.category}</span>
                  </div>

                  <div className="workout-card-body">
                    <h3 className="workout-card-title">{workout.title}</h3>
                    <p className="workout-card-desc">{workout.description}</p>

                    <div className="workout-meta-row">
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Flame size={16} />
                        <span>{workout.calories}</span>
                      </div>
                      <div className="meta-item">
                        <Award size={16} />
                        <span>{workout.difficulty}</span>
                      </div>
                    </div>

                    <Link to="/exercises" className="btn-card-action">
                      <span>View in Exercise Library</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="benefits-section">
          <div className="container">
            <div className="benefits-grid">
              <div>
                <span className="section-tag">Why FIT HUB</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Scientific Consistency Over Random Workouts
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '28px' }}>
                  Most workout plans fail because of lack of planning and invisible progress. FIT HUB
                  bridges that gap with clear visual structures.
                </p>

                <div className="benefit-list">
                  {benefits.map((item, idx) => (
                    <div key={idx} className="benefit-list-item">
                      <div className="benefit-check-icon">
                        <CheckCircle2 size={18} />
                      </div>
                      <div className="benefit-text">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Box on the Right */}
              <div className="benefits-visual-box">
                <div className="visual-metric-circle">
                  <span>94%</span>
                  <small>Adherence</small>
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                  Proven Habit Formation
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Users who pre-schedule weekly workouts in the planner demonstrate over 90%
                  completion rate compared to unplanned routines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CALL TO ACTION BANNER ================= */}
        <section className="cta-banner-section">
          <div className="container">
            <div className="cta-banner-card">
              <h2 className="cta-banner-title">Ready to Elevate Your Daily Fitness?</h2>
              <p className="cta-banner-desc">
                Start structuring your training sessions today. Build your routine, monitor your BMI,
                and achieve your physical peak with FIT HUB.
              </p>
              <div className="cta-actions">
                <Link to="/planner" className="btn-primary">
                  <span>Open Weekly Planner</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/exercises" className="btn-secondary">
                  <span>Browse Exercise Catalog</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
