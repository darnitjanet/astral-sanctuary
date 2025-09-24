import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DailyAffirmation: React.FC = () => {
  const [affirmation, setAffirmation] = useState('');

  const affirmations = [
    "I am aligned with the cosmic flow of abundance and wisdom.",
    "The universe guides me towards my highest good in every moment.",
    "I trust in the divine timing of my life's unfolding journey.",
    "My intuition is my compass, leading me to truth and clarity.",
    "I am a vessel of light, radiating love and positive energy.",
    "The stars whisper secrets of strength and resilience within me.",
    "I embrace change as the universe's gift of growth and evolution.",
    "My soul remembers its purpose and I walk confidently on my path.",
    "I am connected to all beings through the web of cosmic consciousness.",
    "Today, I open my heart to receive the universe's infinite blessings."
  ];

  useEffect(() => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem('dailyAffirmation');

    if (savedData) {
      const { date, affirmation: saved } = JSON.parse(savedData);
      if (date === today) {
        setAffirmation(saved);
        return;
      }
    }

    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(randomAffirmation);
    localStorage.setItem('dailyAffirmation', JSON.stringify({
      date: today,
      affirmation: randomAffirmation
    }));
  }, [affirmations]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      style={{
        background: 'rgba(26, 26, 29, 0.8)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--gold-accent)',
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✨</div>
      <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1.5rem' }}>
        Today's Affirmation
      </h3>
      <blockquote style={{
        fontSize: '1.1rem',
        fontStyle: 'italic',
        color: 'var(--text-primary)',
        lineHeight: '1.6',
        margin: '0 0 1.5rem 0',
        position: 'relative',
        paddingLeft: '1rem',
        borderLeft: '3px solid var(--gold-accent)'
      }}>
        {affirmation}
      </blockquote>
      <div style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontStyle: 'italic'
      }}>
        Repeat this throughout your day to align with cosmic energy
      </div>
    </motion.div>
  );
};

export default DailyAffirmation;