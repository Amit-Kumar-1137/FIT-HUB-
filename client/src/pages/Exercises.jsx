import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Flame, 
  Clock, 
  Dumbbell, 
  Eye, 
  PlusCircle, 
  X
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import { exercisesData, exerciseCategories } from '../data/exercisesData';
import '../styles/Exercises.css';

export { exercisesData, exerciseCategories };

export default function Exercises() {
  const { cartCount, showToast } = useCart();

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  // Modal state for detailed instructions
  const [activeModalExercise, setActiveModalExercise] = useState(null);

  const categories = exerciseCategories;
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filtered exercises based on search query, category, and difficulty
  const filteredExercises = useMemo(() => {
    return exercisesData.filter((item) => {
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.equipment.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.targetMuscles.some((m) => m.toLowerCase().includes(term));

      const matchesCategory =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesDifficulty =
        selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  // Handler for adding workout to weekly planner simulation
  const handleAddToPlanner = (exercise) => {
    showToast(`Added "${exercise.name}" to your Weekly Planner!`);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container exercises-page">
          {/* Page Header */}
          <div className="page-header-box">
            <span className="section-tag">
              <Dumbbell size={14} /> Exercise Catalog
            </span>
            <h1 className="page-title">Curated Exercise Library</h1>
            <p className="page-subtitle">
              Explore targeted exercises across Chest, Back, Shoulder, Biceps, Triceps, Leg, Cardio, and Strength.
              Click any card to inspect proper form cues and step-by-step guidance.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="exercises-toolbar">
            {/* Search Input Bar */}
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                className="search-input"
                placeholder="Search by exercise name, target muscle (e.g. Chest, Quads, Biceps), or equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Pills and Dropdown */}
            <div className="filter-row">
              {/* Category Pills (Without numbers) */}
              <div className="category-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Difficulty Filter Dropdown */}
              <div className="difficulty-filter">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  aria-label="Filter by difficulty"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Beginner">Beginner Level</option>
                  <option value="Intermediate">Intermediate Level</option>
                  <option value="Advanced">Advanced Level</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="results-summary">
            <span>
              Showing <strong>{filteredExercises.length}</strong> of{' '}
              {exercisesData.length} exercises
              {selectedCategory !== 'All' && (
                <span> in <strong>{selectedCategory}</strong></span>
              )}
            </span>
            {(searchTerm || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
              <button
                type="button"
                className="clear-filter-btn"
                onClick={handleResetFilters}
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Exercises Grid */}
          <div className="exercises-grid">
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise) => (
                <div key={exercise.id} className="exercise-card">
                  {/* Card Image */}
                  <div className="exercise-img-wrap">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="exercise-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = exercise.fallbackImage;
                      }}
                    />
                    <span
                      className={`difficulty-badge ${exercise.difficulty.toLowerCase()}`}
                    >
                      {exercise.difficulty}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="exercise-content">
                    <span className="exercise-category-label">
                      {exercise.category} • {exercise.equipment}
                    </span>
                    <h3 className="exercise-card-name">{exercise.name}</h3>
                    <p className="exercise-card-desc">{exercise.description}</p>

                    {/* Muscle Target Tags */}
                    <div className="muscles-tags">
                      {exercise.targetMuscles.map((muscle, idx) => (
                        <span key={idx} className="muscle-tag">
                          {muscle}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Row */}
                    <div className="exercise-metrics">
                      <div className="metric-item">
                        <Clock size={15} />
                        <span>{exercise.duration}</span>
                      </div>
                      <div className="metric-item">
                        <Flame size={15} />
                        <span>{exercise.calories}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="exercise-actions">
                      <button
                        type="button"
                        className="btn-details"
                        onClick={() => setActiveModalExercise(exercise)}
                      >
                        <Eye size={15} />
                        <span>Form Guide</span>
                      </button>

                      <button
                        type="button"
                        className="btn-add-planner"
                        onClick={() => handleAddToPlanner(exercise)}
                      >
                        <PlusCircle size={15} />
                        <span>Plan Routine</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results-state">
                <h3>No exercises match your search</h3>
                <p>Try searching for a different keyword or resetting your filters.</p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleResetFilters}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Step-by-Step Instructions Modal */}
        {activeModalExercise && (
          <div
            className="exercise-modal-overlay"
            onClick={() => setActiveModalExercise(null)}
          >
            <div
              className="exercise-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalExercise(null)}
                aria-label="Close form guide"
              >
                <X size={18} />
              </button>

              <div className="modal-exercise-img-wrap">
                <img
                  src={activeModalExercise.image}
                  alt={activeModalExercise.name}
                  className="modal-exercise-img"
                  onError={(e) => {
                    e.currentTarget.src = activeModalExercise.fallbackImage;
                  }}
                />
              </div>

              <span className="section-tag" style={{ marginTop: '14px' }}>
                {activeModalExercise.category} • {activeModalExercise.difficulty}
              </span>
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  marginTop: '8px'
                }}
              >
                {activeModalExercise.name}
              </h2>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  marginTop: '6px'
                }}
              >
                Equipment Required: <strong>{activeModalExercise.equipment}</strong>
              </p>

              <h4
                style={{
                  color: 'var(--accent-color)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  marginTop: '18px'
                }}
              >
                Step-by-Step Execution Guide:
              </h4>

              <div className="modal-step-list">
                {activeModalExercise.steps.map((step, idx) => (
                  <div key={idx} className="step-card">
                    <span className="step-number">{idx + 1}</span>
                    <p className="step-desc">{step}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                onClick={() => {
                  handleAddToPlanner(activeModalExercise);
                  setActiveModalExercise(null);
                }}
              >
                <PlusCircle size={18} />
                <span>Add to Weekly Routine</span>
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
