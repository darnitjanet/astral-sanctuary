import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BirthChartForm from '../components/BirthChartForm';
import BirthChartDisplay from '../components/BirthChartDisplay';
import { BirthChart } from '../types/astrology';

const BirthChartPage: React.FC = () => {
  const [currentChart, setCurrentChart] = useState<BirthChart | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleChartGenerated = (chart: BirthChart) => {
    setCurrentChart(chart);
    setShowForm(false);
  };

  const handleNewChart = () => {
    setCurrentChart(null);
    setShowForm(true);
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Birth Chart</h1>
          <p className="page-subtitle">Discover your cosmic blueprint</p>
        </div>

        {showForm ? (
          <BirthChartForm onChartGenerated={handleChartGenerated} />
        ) : currentChart ? (
          <div>
            <BirthChartDisplay chart={currentChart} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button className="glow-button" onClick={handleNewChart}>
                New Chart
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default BirthChartPage;