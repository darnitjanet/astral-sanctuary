import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MoonPhaseCard from '../components/MoonPhaseCard';
import PlanetaryTransits from '../components/PlanetaryTransits';
import DailyAffirmation from '../components/DailyAffirmation';
import { MoonPhase, Transit } from '../types/astrology';
import SEO from '../components/SEO';

const DailyCosmosPage: React.FC = () => {
  const [moonPhase, setMoonPhase] = useState<MoonPhase | null>(null);
  const [transits, setTransits] = useState<Transit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCosmicData();
  }, []);

  const fetchCosmicData = async () => {
    setLoading(true);
    try {
      const mockMoonPhase: MoonPhase = {
        phase: 'Waxing Crescent',
        illumination: 25,
        age: 3.2,
        distance: 384400,
        nextNew: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
        nextFull: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000)
      };

      const mockTransits: Transit[] = [
        {
          planet: 'venus',
          currentSign: 'aquarius',
          aspectTo: {
            planet: 'mars',
            sign: 'aries',
            degree: 8,
            house: 1,
            isRetrograde: false,
            interpretation: 'Passionate energy in relationships'
          },
          type: 'trine',
          exact: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          interpretation: 'Harmonious energy for love and creativity'
        }
      ];

      setMoonPhase(mockMoonPhase);
      setTransits(mockTransits);
    } catch (error) {
      console.error('Error fetching cosmic data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <motion.div
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <SEO
        title="Daily Cosmos"
        description="Get your daily cosmic forecast with current moon phases, planetary transits, and spiritual guidance. Free daily horoscope and astrology insights."
        canonical="/daily-cosmos"
        keywords="daily horoscope, moon phase today, planetary transits, daily astrology, cosmic forecast, daily affirmation"
      />
      <motion.div
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Daily Cosmos</h1>
          <p className="page-subtitle">Today's celestial energies</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {moonPhase && <MoonPhaseCard moonPhase={moonPhase} />}
          <DailyAffirmation />
        </div>

        <PlanetaryTransits transits={transits} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(26, 26, 29, 0.8)',
            borderRadius: '12px',
            border: '1px solid var(--purple-lavender)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: 'var(--green-sage)', marginBottom: '1rem' }}>
            🌟 Cosmic Meditation Corner
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Take a moment to align with today's celestial energies. Close your eyes,
            breathe deeply, and feel the cosmic currents flowing through you.
          </p>
          <button
            className="glow-button"
            onClick={() => window.location.href = '/meditation'}
            style={{ marginRight: '1rem' }}
          >
            Start Meditation
          </button>
          <button
            className="glow-button"
            onClick={fetchCosmicData}
            style={{ background: 'linear-gradient(135deg, var(--green-forest) 0%, var(--green-emerald) 100%)' }}
          >
            Refresh Cosmos
          </button>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default DailyCosmosPage;