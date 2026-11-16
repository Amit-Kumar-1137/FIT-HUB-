import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  PlusCircle, 
  Trash2, 
  Check, 
  Clock, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  Target, 
  Award,
  Zap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/Planner.css';

/**
 * Initial Sample Weekly Schedule
 * Pre-populated routines to demonstrate stateful additions and removals.
 */
const initialWeeklySchedule = [
  {
    id: 1,
    day: 'Monday',
    title: 'Chest & Triceps Hypertrophy',
    category: 'Strength',
    duration: 50,
    intensity: 'High',
    focus: 'Upper Body Push',
    completed: true
  },
  {
    id: 2,
    day: 'Tuesday',
    title: 'HIIT Sprints & Core Circuit',
    category: 'HIIT',
    duration: 35,
    intensity: 'High',
    focus: 'Cardio & Abs',
    completed: true
  },
  {
    id: 3,
    day: 'Wednesday',
    title: 'Back & Biceps Pull Day',
    category: 'Strength',
    duration: 55,
    intensity: 'High',
    focus: 'Upper Body Pull',
    completed: false
  },
  {
    id: 4,
    day: 'Thursday',
    title: 'Vinyasa Mobility & Deep Stretch',
    category: 'Yoga',
    duration: 30,
    intensity: 'Low',
    focus: 'Flexibility & Recovery',
    completed: false
  },
  {
    id: 5,
    day: 'Friday',
    title: 'Quad & Hamstring Leg Annihilation',
    category: 'Strength',
    duration: 60,
    intensity: 'High',
    focus: 'Lower Body',
    completed: false
  },
  {
    id: 6,
    day: 'Saturday',
    title: 'Outdoor 5K Cardio Run',
    category: 'Cardio',
    duration: 40,
    intensity: 'Moderate',
    focus: 'Endurance',
    completed: false
  },
  {
    id: 7,
    day: 'Sunday',
    title: 'Active Rest Walk & Sauna',
    category: 'Rest',
    duration: 25,
    intensity: 'Low',
    focus: 'Recovery',
    completed: false
  }
];

export default function Planner() {
  const { cartCount, showToast } = useCart();

  // Selected Day tab state
  const [selectedDay, setSelectedDay] = useState('Monday');

  // Workouts schedule managed purely via React state
  const [workouts, setWorkouts] = useState(initialWeeklySchedule);

  // New workout form inputs state
  const [formData, setFormData] = useState({
    day: 'Monday',
    title: '',
    category: 'Strength',
    duration: '45',
    intensity: 'Moderate',
    focus: ''
  });

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Workouts for the currently active tab
  const currentDayWorkouts = workouts.filter((item) => item.day === selectedDay);

  // Weekly Statistics Calculations
  const totalWorkouts = workouts.length;
  const completedWorkouts = workouts.filter((item) => item.completed).length;
  const totalMinutes = workouts.reduce((sum, item) => sum + Number(item.duration || 0), 0);
  const completionPercentage = totalWorkouts > 0 ? Math.round((completedWorkouts / totalWorkouts) * 100) : 0;

  // Toggle workout completed status
  const handleToggleComplete = (id) => {
    setWorkouts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete a planned workout entry
  const handleDeleteWorkout = (id, title) => {
    setWorkouts((prev) => prev.filter((item) => item.id !== id));
    showToast(`Removed "${title}" from schedule.`);
  };

  // Reset to initial default schedule
  const handleResetSchedule = () => {
    setWorkouts(initialWeeklySchedule);
    showToast('Schedule restored to default sample routine.');
  };

  // Add a new workout from form input
  const handleAddWorkout = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      showToast('Please enter a workout title.');
      return;
    }

    const newWorkout = {
      id: Date.now(), // Generate unique numeric id
      day: formData.day,
      title: formData.title.trim(),
      category: formData.category,
      duration: parseInt(formData.duration, 10) || 30,
      intensity: formData.intensity,
      focus: formData.focus.trim() || 'General Fitness',
      completed: false
    };

    setWorkouts((prev) => [...prev, newWorkout]);
    setSelectedDay(formData.day); // Jump to the day of added workout
    showToast(`Added "${newWorkout.title}" to ${formData.day}!`);

    // Reset title and focus fields
    setFormData((prev) => ({
      ...prev,
      title: '',
      focus: ''
    }));
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container planner-page">
          {/* Page Header */}
          <div className="planner-header-box">
            <span className="section-tag">
              <CalendarIcon size={14} /> Weekly Schedule
            </span>
            <h1 className="page-title">Interactive Workout Planner</h1>
            <p className="page-subtitle">
              Plan and customize your 7-day training schedule. Add new sessions, check off
              completed workouts, and track your weekly completion rate with frontend state.
            </p>
          </div>

          {/* Weekly Summary Stats */}
          <div className="planner-stats-grid">
            <div className="planner-stat-card">
              <div className="stat-card-icon">
                <Target size={22} />
              </div>
              <div className="stat-card-content">
                <h4>{totalWorkouts}</h4>
                <p>Planned Sessions</p>
              </div>
            </div>

            <div className="planner-stat-card">
              <div className="stat-card-icon">
                <CheckCircle2 size={22} />
              </div>
              <div className="stat-card-content">
                <h4>{completedWorkouts}</h4>
                <p>Completed Workouts</p>
              </div>
            </div>

            <div className="planner-stat-card">
              <div className="stat-card-icon">
                <Clock size={22} />
              </div>
              <div className="stat-card-content">
                <h4>{totalMinutes} min</h4>
                <p>Total Training Time</p>
              </div>
            </div>

            <div className="planner-stat-card">
              <div className="stat-card-icon">
                <Award size={22} />
              </div>
              <div className="stat-card-content">
                <h4>{completionPercentage}%</h4>
                <p>Adherence Rate</p>
              </div>
            </div>
          </div>

          {/* 7 Days of the Week Filter Tabs */}
          <div className="days-tabs-wrapper">
            {daysOfWeek.map((day) => {
              const count = workouts.filter((w) => w.day === day).length;
              return (
                <button
                  key={day}
                  type="button"
                  className={`day-tab-btn ${selectedDay === day ? 'active' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  <span className="day-name">{day.slice(0, 3)}</span>
                  <span className="day-count-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Main Planner Grid: Left List vs Right Add Form */}
          <div className="planner-content-layout">
            {/* Left Column: Scheduled Workouts for Selected Day */}
            <div className="schedule-column">
              <div className="schedule-section-header">
                <h2>{selectedDay}'s Scheduled Sessions</h2>
                <button
                  type="button"
                  className="btn-reset-schedule"
                  onClick={handleResetSchedule}
                  title="Reset to sample schedule"
                >
                  <RotateCcw size={14} />
                  <span>Reset Default Routine</span>
                </button>
              </div>

              <div className="workouts-schedule-list">
                {currentDayWorkouts.length > 0 ? (
                  currentDayWorkouts.map((workout) => (
                    <div
                      key={workout.id}
                      className={`planner-item-card ${workout.completed ? 'completed' : ''}`}
                    >
                      <div className="planner-item-left">
                        {/* Completion Checkbox */}
                        <button
                          type="button"
                          className={`toggle-complete-btn ${workout.completed ? 'checked' : ''}`}
                          onClick={() => handleToggleComplete(workout.id)}
                          aria-label="Toggle workout completed"
                        >
                          {workout.completed && <Check size={16} />}
                        </button>

                        <div className="item-info">
                          <div className="item-title-row">
                            <span className="item-title">{workout.title}</span>
                            <span className="item-category-tag">{workout.category}</span>
                          </div>

                          <div className="item-meta-row">
                            <span>
                              <Clock size={13} /> {workout.duration} mins
                            </span>
                            <span>•</span>
                            <span>
                              <Zap size={13} /> {workout.intensity} Intensity
                            </span>
                            <span>•</span>
                            <span>Focus: {workout.focus}</span>
                          </div>
                        </div>
                      </div>

                      {/* Delete Workout Button */}
                      <button
                        type="button"
                        className="item-delete-btn"
                        onClick={() => handleDeleteWorkout(workout.id, workout.title)}
                        title="Delete workout from schedule"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="empty-day-state">
                    <h3>No workouts planned for {selectedDay}</h3>
                    <p>Use the form on the right to schedule a workout for this day.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Add New Workout Form */}
            <div className="add-workout-card">
              <div className="form-header-title">
                <PlusCircle size={22} style={{ color: 'var(--accent-color)' }} />
                <span>Schedule New Workout</span>
              </div>

              <form onSubmit={handleAddWorkout} className="add-workout-form">
                {/* Select Day */}
                <div className="form-group">
                  <label htmlFor="day-select">Target Day of Week</label>
                  <select
                    id="day-select"
                    value={formData.day}
                    onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                  >
                    {daysOfWeek.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Workout Title */}
                <div className="form-group">
                  <label htmlFor="workout-title">Workout Title</label>
                  <input
                    id="workout-title"
                    type="text"
                    placeholder="e.g. Chest & Shoulders Hypertrophy"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                {/* Category & Intensity Dropdowns */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category-select">Workout Category</label>
                    <select
                      id="category-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Strength">Strength</option>
                      <option value="HIIT">HIIT</option>
                      <option value="Cardio">Cardio</option>
                      <option value="Yoga">Yoga & Mobility</option>
                      <option value="Core">Core & Abs</option>
                      <option value="Rest">Rest & Recovery</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="intensity-select">Intensity Level</label>
                    <select
                      id="intensity-select"
                      value={formData.intensity}
                      onChange={(e) => setFormData({ ...formData, intensity: e.target.value })}
                    >
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                {/* Duration & Focus */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="duration-input">Duration (Minutes)</label>
                    <input
                      id="duration-input"
                      type="number"
                      min="5"
                      max="180"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="focus-input">Focus Area</label>
                    <input
                      id="focus-input"
                      type="text"
                      placeholder="e.g. Upper Body Push"
                      value={formData.focus}
                      onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-submit-workout">
                  <PlusCircle size={18} />
                  <span>Add Workout to Schedule</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
