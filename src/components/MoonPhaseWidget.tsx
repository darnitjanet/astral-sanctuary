import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MoonData {
  phase: string;
  illumination: number;
  emoji: string;
}

const MoonPhaseWidget: React.FC = () => {
  const [moonData, setMoonData] = useState<MoonData>({
    phase: 'Waxing Crescent',
    illumination: 25,
    emoji: '🌒'
  });
  const [showModal, setShowModal] = useState(false);

  const getMoonPhaseInterpretation = (phase: string) => {
    const interpretations: { [key: string]: { meaning: string; energy: string; guidance: string } } = {
      'New Moon': {
        meaning: 'A time of new beginnings, fresh starts, and setting intentions. The moon\'s energy is turned inward, perfect for planning and planting seeds for the future.',
        energy: 'Introspective, manifestation, renewal',
        guidance: 'Set new goals, start new projects, meditate on your desires, and practice self-reflection. This is the perfect time to manifest your dreams.'
      },
      'Waxing Crescent': {
        meaning: 'The moon is growing in light, symbolizing growth, development, and taking action. Your intentions from the new moon begin to take shape.',
        energy: 'Building, determination, courage',
        guidance: 'Take the first steps toward your goals, overcome obstacles with determination, and stay committed to your path. Small actions lead to big results.'
      },
      'First Quarter': {
        meaning: 'A time of decision-making and overcoming challenges. The moon\'s half-light represents the need to push through resistance and make important choices.',
        energy: 'Challenge, decision, strength',
        guidance: 'Face your fears, make tough decisions, and push through obstacles. This is a time for action and breaking through barriers.'
      },
      'Waxing Gibbous': {
        meaning: 'Refinement and adjustment phase. You\'re close to your goal but need to fine-tune your approach and stay patient as things develop.',
        energy: 'Refinement, patience, perseverance',
        guidance: 'Adjust your plans, be patient with the process, and trust that your efforts will pay off. Focus on the details and stay committed.'
      },
      'Full Moon': {
        meaning: 'The peak of lunar energy brings completion, manifestation, and heightened emotions. What you\'ve been working toward reaches its culmination.',
        energy: 'Completion, manifestation, celebration',
        guidance: 'Celebrate your achievements, express gratitude, release what no longer serves you, and embrace your full potential. Your efforts come to fruition.'
      },
      'Waning Gibbous': {
        meaning: 'A time of gratitude, sharing wisdom, and giving back. The moon\'s light is diminishing, encouraging you to share what you\'ve learned.',
        energy: 'Gratitude, wisdom, generosity',
        guidance: 'Share your knowledge with others, practice gratitude for what you\'ve received, and give back to your community. Teach and mentor others.'
      },
      'Last Quarter': {
        meaning: 'Time for release, forgiveness, and letting go. The moon\'s waning energy supports breaking bad habits and clearing away the old.',
        energy: 'Release, forgiveness, letting go',
        guidance: 'Forgive yourself and others, release old patterns that no longer serve you, and clear space for new opportunities. Break free from limitations.'
      },
      'Waning Crescent': {
        meaning: 'The final phase of the lunar cycle focused on rest, reflection, and preparation for renewal. It\'s time to surrender and trust the process.',
        energy: 'Surrender, rest, reflection',
        guidance: 'Rest and recharge, reflect on lessons learned, and prepare for the next cycle. Trust in the natural flow of life and practice self-care.'
      }
    };

    return interpretations[phase] || {
      meaning: 'A unique lunar energy awaits your discovery.',
      energy: 'Mystery, intuition, cosmic flow',
      guidance: 'Trust your intuition and connect with the moon\'s energy through meditation and reflection.'
    };
  };

  useEffect(() => {
    const calculateMoonPhase = () => {
      const lunarCycle = 29.53059;
      const knownNewMoon = new Date('2024-01-11');
      const today = new Date();
      const daysSinceNewMoon = (today.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
      const daysIntoCycle = daysSinceNewMoon % lunarCycle;
      const illumination = Math.round((1 - Math.cos((daysIntoCycle / lunarCycle) * 2 * Math.PI)) * 50);

      let phase = '';
      let emoji = '';

      if (daysIntoCycle < 1.84) {
        phase = 'New Moon';
        emoji = '🌑';
      } else if (daysIntoCycle < 5.53) {
        phase = 'Waxing Crescent';
        emoji = '🌒';
      } else if (daysIntoCycle < 9.22) {
        phase = 'First Quarter';
        emoji = '🌓';
      } else if (daysIntoCycle < 12.91) {
        phase = 'Waxing Gibbous';
        emoji = '🌔';
      } else if (daysIntoCycle < 16.61) {
        phase = 'Full Moon';
        emoji = '🌕';
      } else if (daysIntoCycle < 20.30) {
        phase = 'Waning Gibbous';
        emoji = '🌖';
      } else if (daysIntoCycle < 23.99) {
        phase = 'Last Quarter';
        emoji = '🌗';
      } else if (daysIntoCycle < 27.68) {
        phase = 'Waning Crescent';
        emoji = '🌘';
      } else {
        phase = 'New Moon';
        emoji = '🌑';
      }

      setMoonData({ phase, illumination, emoji });
    };

    calculateMoonPhase();
    const interval = setInterval(calculateMoonPhase, 3600000);
    return () => clearInterval(interval);
  }, []);

  const interpretation = getMoonPhaseInterpretation(moonData.phase);

  return (
    <>
      <motion.div
        className="moon-phase-widget"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer' }}
      >
        <div style={{ fontSize: '2.5rem' }}>{moonData.emoji}</div>
        <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>{moonData.phase}</div>
        <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>{moonData.illumination}%</div>
      </motion.div>

      {/* Moon Phase Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, var(--bg-charcoal) 0%, var(--purple-deep) 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '2px solid var(--gold-accent)',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: 'var(--glow-purple)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{moonData.emoji}</div>
              <h2 style={{
                color: 'var(--gold-accent)',
                margin: '0 0 0.5rem 0',
                fontSize: '1.8rem'
              }}>
                {moonData.phase}
              </h2>
              <div style={{
                color: 'var(--purple-lavender)',
                fontSize: '1rem',
                opacity: 0.9
              }}>
                {moonData.illumination}% Illuminated
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                color: 'var(--green-sage)',
                margin: '0 0 0.75rem 0',
                fontSize: '1.2rem'
              }}>
                ✨ Meaning
              </h3>
              <p style={{
                color: 'var(--text-primary)',
                lineHeight: '1.6',
                margin: '0 0 1rem 0'
              }}>
                {interpretation.meaning}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                color: 'var(--purple-lavender)',
                margin: '0 0 0.75rem 0',
                fontSize: '1.2rem'
              }}>
                🔮 Energy
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                margin: 0
              }}>
                {interpretation.energy}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                color: 'var(--green-sage)',
                margin: '0 0 0.75rem 0',
                fontSize: '1.2rem'
              }}>
                🌙 Guidance
              </h3>
              <p style={{
                color: 'var(--text-primary)',
                lineHeight: '1.6',
                margin: 0
              }}>
                {interpretation.guidance}
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'linear-gradient(135deg, var(--purple-deep) 0%, var(--green-forest) 100%)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--gold-accent)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLElement).style.boxShadow = 'var(--glow-purple)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MoonPhaseWidget;