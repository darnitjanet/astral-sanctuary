import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import TarotGuide from '../components/TarotGuide';
import AstrologyGuide from '../components/AstrologyGuide';
import CrystalGuide from '../components/CrystalGuide';
import NumerologyCalculator from '../components/NumerologyCalculator';

const LearnPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'tarot' | 'astrology' | 'crystals' | 'numerology'>('tarot');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section && ['tarot', 'astrology', 'crystals', 'numerology'].includes(section)) {
      setActiveSection(section as 'tarot' | 'astrology' | 'crystals' | 'numerology');
    }
  }, [location]);

  const sections = [
    { id: 'tarot', name: 'Tarot Guide', icon: '🎴' },
    { id: 'astrology', name: 'Astrology', icon: '⭐' },
    { id: 'crystals', name: 'Crystals', icon: '💎' },
    { id: 'numerology', name: 'Numerology', icon: '🔢' }
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Mystical Learning</h1>
          <p className="page-subtitle">Deepen your spiritual knowledge</p>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {sections.map(section => (
            <button
              key={section.id}
              className={`glow-button ${activeSection === section.id ? '' : 'secondary'}`}
              onClick={() => setActiveSection(section.id as any)}
              style={{
                background: activeSection === section.id
                  ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)'
                  : 'rgba(26, 26, 29, 0.8)',
                border: activeSection === section.id
                  ? '2px solid var(--gold-accent)'
                  : '1px solid var(--purple-lavender)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{section.icon}</span>
              {section.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === 'tarot' && <TarotGuide />}
          {activeSection === 'astrology' && <AstrologyGuide />}
          {activeSection === 'crystals' && <CrystalGuide />}
          {activeSection === 'numerology' && <NumerologyCalculator />}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LearnPage;