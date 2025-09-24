import React from 'react';
import { motion } from 'framer-motion';
import { MoonPhase } from '../types/astrology';

interface MoonPhaseCardProps {
  moonPhase: MoonPhase;
}

const MoonPhaseCard: React.FC<MoonPhaseCardProps> = ({ moonPhase }) => {
  const getMoonEmoji = (phase: string) => {
    const phases: { [key: string]: string } = {
      'New Moon': '🌑',
      'Waxing Crescent': '🌒',
      'First Quarter': '🌓',
      'Waxing Gibbous': '🌔',
      'Full Moon': '🌕',
      'Waning Gibbous': '🌖',
      'Last Quarter': '🌗',
      'Waning Crescent': '🌘'
    };
    return phases[phase] || '🌙';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: 'rgba(26, 26, 29, 0.8)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--purple-lavender)',
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        {getMoonEmoji(moonPhase.phase)}
      </div>
      <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '1rem' }}>
        {moonPhase.phase}
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        fontSize: '0.9rem'
      }}>
        <div>
          <div style={{ color: 'var(--text-secondary)' }}>Illumination</div>
          <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
            {moonPhase.illumination}%
          </div>
        </div>
        <div>
          <div style={{ color: 'var(--text-secondary)' }}>Age</div>
          <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
            {moonPhase.age.toFixed(1)} days
          </div>
        </div>
      </div>
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: 'rgba(167, 139, 250, 0.1)',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
      }}>
        Next Full Moon: {moonPhase.nextFull.toLocaleDateString()}
      </div>
    </motion.div>
  );
};

export default MoonPhaseCard;