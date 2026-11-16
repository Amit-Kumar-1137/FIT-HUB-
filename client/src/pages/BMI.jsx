import React, { useState } from 'react';
import { 
  Calculator as CalcIcon, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  HeartPulse, 
  Activity 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../App';
import '../styles/BMI.css';

export default function BMI() {
  const { cartCount, showToast } = useCart();

  // Unit toggle state: 'metric' (cm / kg) or 'imperial' (ft / in & lbs)
  const [unitSystem, setUnitSystem] = useState('metric');

  // Input states
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(70);

  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(9);
  const [weightLbs, setWeightLbs] = useState(154);

  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(25);

  // Calculate BMI based on active unit system
  const calculateBMIValue = () => {
    if (unitSystem === 'metric') {
      const heightInMeters = heightCm / 100;
      if (heightInMeters <= 0 || weightKg <= 0) return 0;
      return +(weightKg / (heightInMeters * heightInMeters)).toFixed(1);
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      if (totalInches <= 0 || weightLbs <= 0) return 0;
      return +((weightLbs / (totalInches * totalInches)) * 703).toFixed(1);
    }
  };

  const bmiScore = calculateBMIValue();

  // Classify BMI Category
  const getBMICategory = (score) => {
    if (score < 18.5) {
      return {
        name: 'Underweight',
        classKey: 'underweight',
        advice: [
          'Prioritize a caloric surplus with nutrient-dense complex carbs and lean protein.',
          'Focus on progressive resistance hypertrophy routines (3-4 sets of 8-12 reps).',
          'Limit excessive high-volume cardio to preserve muscle mass.'
        ],
        recommendedWorkout: 'Strength & Hypertrophy'
      };
    } else if (score >= 18.5 && score < 25.0) {
      return {
        name: 'Normal Weight',
        classKey: 'normal',
        advice: [
          'Maintain your balanced energy expenditure with consistent workout scheduling.',
          'Blend resistance training 3 days a week with 2 days of cardiovascular conditioning.',
          'Keep hydration levels optimal and maintain steady protein intake (1.6g/kg).'
        ],
        recommendedWorkout: 'Full Body Balanced Conditioning'
      };
    } else if (score >= 25.0 && score < 30.0) {
      return {
        name: 'Overweight',
        classKey: 'overweight',
        advice: [
          'Create a moderate daily caloric deficit of 300-500 kcal.',
          'Incorporate HIIT and high-density circuit training into your weekly routine.',
          'Focus on low glycemic index carbohydrates and fibrous vegetables.'
        ],
        recommendedWorkout: 'HIIT & Calorie Burn'
      };
    } else {
      return {
        name: 'Obese',
        classKey: 'obese',
        advice: [
          'Start with low-impact cardiovascular movements such as incline walking or cycling.',
          'Consult with a certified sports physician or nutrition specialist.',
          'Focus on gradual, sustainable habits rather than extreme crash diets.'
        ],
        recommendedWorkout: 'Low-Impact Cardio & Mobility'
      };
    }
  };

  const categoryInfo = getBMICategory(bmiScore);

  // Healthy Weight Range estimate
  const getHealthyWeightRange = () => {
    if (unitSystem === 'metric') {
      const h = heightCm / 100;
      const minKg = (18.5 * h * h).toFixed(1);
      const maxKg = (24.9 * h * h).toFixed(1);
      return `${minKg} kg - ${maxKg} kg`;
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      const minLbs = ((18.5 * totalInches * totalInches) / 703).toFixed(1);
      const maxLbs = ((24.9 * totalInches * totalInches) / 703).toFixed(1);
      return `${minLbs} lbs - ${maxLbs} lbs`;
    }
  };

  const handleReset = () => {
    if (unitSystem === 'metric') {
      setHeightCm(175);
      setWeightKg(70);
    } else {
      setHeightFeet(5);
      setHeightInches(9);
      setWeightLbs(154);
    }
    showToast('Reset BMI values to standard baseline.');
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <div className="container bmi-page">
          {/* Page Header */}
          <div className="bmi-header-box">
            <span className="section-tag">
              <CalcIcon size={14} /> Health Assessment
            </span>
            <h1 className="page-title">Precision BMI Calculator</h1>
            <p className="page-subtitle">
              Body Mass Index (BMI) evaluates body mass relative to height. Use the metric or
              imperial controls to compute your score and receive tailored training guidance.
            </p>
          </div>

          {/* Calculator Layout: Left Inputs Card vs Right Results Panel */}
          <div className="bmi-calculator-layout">
            {/* Left Column: Interactive Inputs Card */}
            <div className="bmi-card">
              <div className="bmi-card-header">
                <h2>Your Body Measurements</h2>
                {/* Unit Toggle Switch */}
                <div className="unit-toggle-wrapper">
                  <button
                    type="button"
                    className={`unit-toggle-btn ${unitSystem === 'metric' ? 'active' : ''}`}
                    onClick={() => setUnitSystem('metric')}
                  >
                    Metric (cm/kg)
                  </button>
                  <button
                    type="button"
                    className={`unit-toggle-btn ${unitSystem === 'imperial' ? 'active' : ''}`}
                    onClick={() => setUnitSystem('imperial')}
                  >
                    Imperial (ft/lbs)
                  </button>
                </div>
              </div>

              <div className="bmi-form">
                {/* Metric Mode Inputs */}
                {unitSystem === 'metric' ? (
                  <>
                    {/* Height in cm */}
                    <div className="bmi-input-group">
                      <div className="bmi-label-row">
                        <label htmlFor="height-cm">Height (Centimeters)</label>
                        <span className="bmi-value-badge">{heightCm} cm</span>
                      </div>
                      <input
                        id="height-cm"
                        type="range"
                        min="120"
                        max="220"
                        value={heightCm}
                        onChange={(e) => setHeightCm(Number(e.target.value))}
                        className="bmi-range-slider"
                      />
                    </div>

                    {/* Weight in kg */}
                    <div className="bmi-input-group">
                      <div className="bmi-label-row">
                        <label htmlFor="weight-kg">Weight (Kilograms)</label>
                        <span className="bmi-value-badge">{weightKg} kg</span>
                      </div>
                      <input
                        id="weight-kg"
                        type="range"
                        min="35"
                        max="160"
                        value={weightKg}
                        onChange={(e) => setWeightKg(Number(e.target.value))}
                        className="bmi-range-slider"
                      />
                    </div>
                  </>
                ) : (
                  /* Imperial Mode Inputs */
                  <>
                    {/* Feet and Inches */}
                    <div className="bmi-input-group">
                      <div className="bmi-label-row">
                        <label>Height (Feet & Inches)</label>
                        <span className="bmi-value-badge">
                          {heightFeet} ft {heightInches} in
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <input
                            type="range"
                            min="4"
                            max="7"
                            value={heightFeet}
                            onChange={(e) => setHeightFeet(Number(e.target.value))}
                            className="bmi-range-slider"
                          />
                        </div>
                        <div>
                          <input
                            type="range"
                            min="0"
                            max="11"
                            value={heightInches}
                            onChange={(e) => setHeightInches(Number(e.target.value))}
                            className="bmi-range-slider"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Weight in lbs */}
                    <div className="bmi-input-group">
                      <div className="bmi-label-row">
                        <label htmlFor="weight-lbs">Weight (Pounds)</label>
                        <span className="bmi-value-badge">{weightLbs} lbs</span>
                      </div>
                      <input
                        id="weight-lbs"
                        type="range"
                        min="80"
                        max="350"
                        value={weightLbs}
                        onChange={(e) => setWeightLbs(Number(e.target.value))}
                        className="bmi-range-slider"
                      />
                    </div>
                  </>
                )}

                {/* Age & Gender Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="bmi-input-group">
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="bmi-input-group">
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      Age
                    </label>
                    <input
                      type="number"
                      min="12"
                      max="100"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                    />
                  </div>
                </div>

                {/* Buttons Group */}
                <div className="bmi-buttons-group">
                  <button
                    type="button"
                    className="btn-calc-action"
                    onClick={() => showToast(`Calculated BMI: ${bmiScore} (${categoryInfo.name})`)}
                  >
                    <HeartPulse size={18} />
                    <span>Recalculate BMI</span>
                  </button>

                  <button
                    type="button"
                    className="btn-reset-calc"
                    onClick={handleReset}
                  >
                    <RotateCcw size={16} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Results Panel */}
            <div className="bmi-result-panel">
              <div className="bmi-score-card">
                <span
                  style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}
                >
                  Your Calculated Body Mass Index
                </span>

                <div className="bmi-score-number">{bmiScore}</div>

                <div className={`bmi-category-badge ${categoryInfo.classKey}`}>
                  {categoryInfo.name}
                </div>

                {/* Color-Coded Spectrum Bar */}
                <div className="bmi-spectrum-bar-wrap">
                  <div className="bmi-spectrum-bar">
                    <div className="spectrum-segment underweight" title="Underweight (< 18.5)" />
                    <div className="spectrum-segment normal" title="Normal (18.5 - 24.9)" />
                    <div className="spectrum-segment overweight" title="Overweight (25 - 29.9)" />
                    <div className="spectrum-segment obese" title="Obese (30+)" />
                  </div>
                  <div className="bmi-spectrum-labels">
                    <span>18.5</span>
                    <span>25.0</span>
                    <span>30.0</span>
                  </div>
                </div>

                {/* Healthy Weight Hint */}
                <p className="healthy-weight-hint">
                  Recommended healthy weight range for your height: <strong>{getHealthyWeightRange()}</strong>
                </p>
              </div>

              {/* Personalized Advice Card */}
              <div className="bmi-advice-card">
                <div className="advice-header">
                  <Sparkles size={18} />
                  <span>Personalized Recommendation</span>
                </div>

                <p
                  style={{
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    marginBottom: '10px'
                  }}
                >
                  Suggested Focus: {categoryInfo.recommendedWorkout}
                </p>

                <ul className="advice-points-list">
                  {categoryInfo.advice.map((point, idx) => (
                    <li key={idx} className="advice-point-item">
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/exercises"
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '16px',
                    fontSize: '0.88rem',
                    padding: '8px 16px'
                  }}
                >
                  <span>Browse Recommended Workouts</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Reference Table */}
          <div className="bmi-reference-card">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 700 }}>
              World Health Organization (WHO) BMI Classification Reference
            </h3>
            <table className="reference-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>BMI Range (kg/m²)</th>
                  <th>Health Risk Factor</th>
                  <th>Primary Training Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span style={{ color: '#60A5FA', fontWeight: 700 }}>Underweight</span>
                  </td>
                  <td>Below 18.5</td>
                  <td>Nutritional Deficiency & Immune Fatigue</td>
                  <td>Hypertrophy Strength & Moderate Caloric Surplus</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>Normal Weight</span>
                  </td>
                  <td>18.5 – 24.9</td>
                  <td>Minimal / Baseline Health Risk</td>
                  <td>Balanced Strength & Cardiovascular Maintenance</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: '#FBBF24', fontWeight: 700 }}>Overweight</span>
                  </td>
                  <td>25.0 – 29.9</td>
                  <td>Moderate Cardiovascular Strain</td>
                  <td>HIIT Interval Burn & Moderate Caloric Deficit</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: '#F87171', fontWeight: 700 }}>Obese</span>
                  </td>
                  <td>30.0 and above</td>
                  <td>Elevated Metabolic & Joint Stress</td>
                  <td>Low-Impact Cardio, Swimming, Progressive Walking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
