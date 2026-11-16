import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Flame, 
  Clock, 
  Calendar, 
  Award, 
  Info, 
  Download, 
  CheckCircle2, 
  Dumbbell, 
  Activity 
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/Reports.css';

/**
 * Illustrative Demo Data for Progress Analytics
 */

// 1. Weekly Workout Minutes & Calories Burned
const weeklyWorkoutData = [
  { day: 'Mon', minutes: 50, calories: 420 },
  { day: 'Tue', minutes: 35, calories: 340 },
  { day: 'Wed', minutes: 55, calories: 480 },
  { day: 'Thu', minutes: 30, calories: 190 },
  { day: 'Fri', minutes: 60, calories: 510 },
  { day: 'Sat', minutes: 45, calories: 380 },
  { day: 'Sun', minutes: 25, calories: 150 }
];

// 2. 6-Month Body Weight & Fat Percentage Progress
const monthlyProgressData = [
  { month: 'Jan', weight: 78.5, bodyFat: 21.5 },
  { month: 'Feb', weight: 77.2, bodyFat: 20.8 },
  { month: 'Mar', weight: 76.0, bodyFat: 19.9 },
  { month: 'Apr', weight: 75.1, bodyFat: 19.1 },
  { month: 'May', weight: 74.0, bodyFat: 18.2 },
  { month: 'Jun', weight: 73.2, bodyFat: 17.5 }
];

// 3. Workout Volume Distribution by Category
const workoutCategoryDistribution = [
  { name: 'Strength Training', value: 40, color: '#A3E635' },
  { name: 'Cardio Endurance', value: 25, color: '#3B82F6' },
  { name: 'HIIT Conditioning', value: 20, color: '#F59E0B' },
  { name: 'Yoga & Mobility', value: 15, color: '#10B981' }
];

// 4. Daily Step Count Trend
const dailyStepsData = [
  { day: 'Day 1', steps: 8400 },
  { day: 'Day 2', steps: 10200 },
  { day: 'Day 3', steps: 9500 },
  { day: 'Day 4', steps: 11400 },
  { day: 'Day 5', steps: 12800 },
  { day: 'Day 6', steps: 10600 },
  { day: 'Day 7', steps: 13500 }
];

// Recent completed activity logs
const recentActivities = [
  {
    id: 1,
    date: 'Oct 24, 2026',
    title: 'Chest & Triceps Hypertrophy',
    category: 'Strength',
    duration: '50 mins',
    burn: '420 kcal',
    status: 'Completed'
  },
  {
    id: 2,
    date: 'Oct 23, 2026',
    title: 'HIIT Sprints & Core Circuit',
    category: 'HIIT',
    duration: '35 mins',
    burn: '340 kcal',
    status: 'Completed'
  },
  {
    id: 3,
    date: 'Oct 22, 2026',
    title: 'Back & Biceps Heavy Pull',
    category: 'Strength',
    duration: '55 mins',
    burn: '480 kcal',
    status: 'Completed'
  },
  {
    id: 4,
    date: 'Oct 21, 2026',
    title: 'Vinyasa Recovery Flow',
    category: 'Yoga',
    duration: '30 mins',
    burn: '190 kcal',
    status: 'Completed'
  },
  {
    id: 5,
    date: 'Oct 20, 2026',
    title: 'Quads & Hamstrings Squat Session',
    category: 'Strength',
    duration: '60 mins',
    burn: '510 kcal',
    status: 'Completed'
  }
];

export default function Reports() {
  const { cartCount, showToast } = useCart();
  const [activeTimeframe, setActiveTimeframe] = useState('This Week');

  // Custom Dark Tooltip Component for Recharts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: '#121513',
            border: '1px solid #272E28',
            borderRadius: '8px',
            padding: '10px 14px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
          }}
        >
          <p style={{ color: '#F4F4F5', fontWeight: 700, fontSize: '0.88rem', marginBottom: '4px' }}>
            {label}
          </p>
          {payload.map((item, idx) => (
            <p key={idx} style={{ color: item.color || '#A3E635', fontSize: '0.82rem' }}>
              {item.name}: <strong>{item.value}</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const handleExportReport = () => {
    showToast('Demo Fitness Report exported successfully (PDF preview simulation)!');
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container reports-page">
          {/* Page Header */}
          <div className="reports-header-box">
            <span className="section-tag">
              <BarChart3 size={14} /> Analytics & Performance
            </span>
            <h1 className="page-title">Sample Progress Reports</h1>
            <p className="page-subtitle">
              Visualize your exercise volume, calorie burn rates, body weight transformation,
              and category breakdown rendered via responsive Recharts.
            </p>
          </div>

          {/* Mandatory Demo Data Notice Banner */}
          <div className="demo-banner">
            <Info size={24} className="demo-banner-icon" />
            <div className="demo-banner-content">
              <h4>Demo Data Mode Enabled</h4>
              <p>
                All statistics, charts, and activity logs on this page represent illustrative demo data
                for academic and project evaluation. No real database records are queried.
              </p>
            </div>
          </div>

          {/* Demo User Profile Information Strip */}
          <div className="demo-user-profile-strip">
            <div className="demo-user-avatar">AM</div>
            <div className="demo-user-meta">
              <div className="demo-user-header-line">
                <h3 className="demo-user-name">Alex Morgan</h3>
                <span className="demo-pill-badge active">Demo Athlete Profile</span>
                <span className="demo-pill-badge">Full Demo Access</span>
              </div>
              <div className="demo-user-stats-line">
                <span>Goal: <strong>Hypertrophy & Strength</strong></span>
                <span>•</span>
                <span>Current Weight: <strong>73.2 kg</strong></span>
                <span>•</span>
                <span>Target: <strong>72.0 kg</strong></span>
                <span>•</span>
                <span>Adherence: <strong>94%</strong></span>
              </div>
            </div>
          </div>

          {/* Top Metric Stat Cards */}
          <div className="reports-stats-grid">
            <div className="stat-metric-card">
              <div className="metric-icon-box">
                <Dumbbell size={24} />
              </div>
              <div className="metric-text">
                <h4>28 Sessions</h4>
                <p>Total Workouts</p>
              </div>
            </div>

            <div className="stat-metric-card">
              <div className="metric-icon-box">
                <Clock size={24} />
              </div>
              <div className="metric-text">
                <h4>25.5 Hours</h4>
                <p>Training Duration</p>
              </div>
            </div>

            <div className="stat-metric-card">
              <div className="metric-icon-box">
                <Flame size={24} />
              </div>
              <div className="metric-text">
                <h4>15,420 kcal</h4>
                <p>Calories Burned</p>
              </div>
            </div>

            <div className="stat-metric-card">
              <div className="metric-icon-box">
                <Award size={24} />
              </div>
              <div className="metric-text">
                <h4>8 Days</h4>
                <p>Current Streak</p>
              </div>
            </div>
          </div>

          {/* Timeframe Controls Toolbar */}
          <div className="timeframe-toolbar">
            <div className="timeframe-buttons">
              {['This Week', 'This Month', 'Past 6 Months'].map((tf) => (
                <button
                  key={tf}
                  type="button"
                  className={`btn-timeframe ${activeTimeframe === tf ? 'active' : ''}`}
                  onClick={() => setActiveTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="btn-secondary"
              style={{ fontSize: '0.88rem', padding: '8px 16px' }}
              onClick={handleExportReport}
            >
              <Download size={15} />
              <span>Export Summary (Demo)</span>
            </button>
          </div>

          {/* Charts Grid */}
          <div className="charts-grid">
            {/* Chart 1: Weekly Workout Minutes & Calories */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-title-wrap">
                  <h3>Weekly Volume & Energy Burn</h3>
                  <p>Daily breakdown of minutes trained vs calories burned</p>
                </div>
              </div>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyWorkoutData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#272E28" vertical={false} />
                    <XAxis dataKey="day" stroke="#929B93" fontSize={12} tickLine={false} />
                    <YAxis stroke="#929B93" fontSize={12} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px', color: '#929B93', paddingTop: '10px' }} />
                    <Bar dataKey="minutes" name="Minutes" fill="#A3E635" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="calories" name="Calories (kcal)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: 6-Month Body Weight & Body Fat Progress */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-title-wrap">
                  <h3>Body Weight & Body Fat Trend</h3>
                  <p>Progressive 6-month body composition tracking</p>
                </div>
              </div>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyProgressData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#272E28" vertical={false} />
                    <XAxis dataKey="month" stroke="#929B93" fontSize={12} tickLine={false} />
                    <YAxis stroke="#929B93" fontSize={12} domain={['dataMin - 2', 'dataMax + 2']} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px', color: '#929B93', paddingTop: '10px' }} />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      name="Weight (kg)"
                      stroke="#A3E635"
                      strokeWidth={3}
                      dot={{ fill: '#A3E635', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bodyFat"
                      name="Body Fat %"
                      stroke="#F59E0B"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ fill: '#F59E0B', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 3: Workout Distribution by Category */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-title-wrap">
                  <h3>Training Style Distribution</h3>
                  <p>Proportion of time allocated across disciplines</p>
                </div>
              </div>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '12px', color: '#929B93' }} />
                    <Pie
                      data={workoutCategoryDistribution}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="46%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={5}
                    >
                      {workoutCategoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#171D18" strokeWidth={2} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 4: Daily Steps & Activity Volume */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-title-wrap">
                  <h3>Daily Activity & Step Volume</h3>
                  <p>Weekly step count tracking toward daily 10,000 goal</p>
                </div>
              </div>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyStepsData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A3E635" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#A3E635" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#272E28" vertical={false} />
                    <XAxis dataKey="day" stroke="#929B93" fontSize={12} tickLine={false} />
                    <YAxis stroke="#929B93" fontSize={12} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="steps"
                      name="Steps Count"
                      stroke="#A3E635"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#stepGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Activity Log Table */}
          <div className="activity-log-card">
            <div className="activity-header">
              <h3>Recent Training Log History</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Last 5 Logged Sessions
              </span>
            </div>

            <table className="activity-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Session Routine</th>
                  <th>Category</th>
                  <th>Duration</th>
                  <th>Calorie Burn</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((act) => (
                  <tr key={act.id}>
                    <td style={{ color: 'var(--text-muted)' }}>{act.date}</td>
                    <td style={{ fontWeight: 700 }}>{act.title}</td>
                    <td>
                      <span className="item-category-tag">{act.category}</span>
                    </td>
                    <td>{act.duration}</td>
                    <td style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{act.burn}</td>
                    <td>
                      <span className="status-badge-done">
                        <CheckCircle2 size={13} />
                        <span>{act.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
