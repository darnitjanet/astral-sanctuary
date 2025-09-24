import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanetaryData {
  planet: string;
  sign: string;
  degree: string;
  meaning: string;
  influence: string;
}

const PlanetaryTicker: React.FC = () => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetaryData | null>(null);

  const planetaryData: PlanetaryData[] = [
    {
      planet: '☉ Sun',
      sign: 'Capricorn',
      degree: '3°',
      meaning: 'The Sun represents your core self, ego, and life purpose',
      influence: 'In Capricorn: Focus on ambition, structure, and practical achievements. Time for discipline and long-term planning.'
    },
    {
      planet: '☽ Moon',
      sign: 'Pisces',
      degree: '17°',
      meaning: 'The Moon governs emotions, intuition, and subconscious patterns',
      influence: 'In Pisces: Heightened psychic abilities, emotional sensitivity, and spiritual connection. Dreams may be especially vivid.'
    },
    {
      planet: '☿ Mercury',
      sign: 'Sagittarius',
      degree: '25°',
      meaning: 'Mercury rules communication, thinking, and information processing',
      influence: 'In Sagittarius: Expansive thinking, philosophical discussions, and desire for truth. Communication may be more direct.'
    },
    {
      planet: '♀ Venus',
      sign: 'Aquarius',
      degree: '12°',
      meaning: 'Venus governs love, beauty, values, and relationships',
      influence: 'In Aquarius: Unconventional attractions, friendship-based love, and appreciation for uniqueness and innovation.'
    },
    {
      planet: '♂ Mars',
      sign: 'Aries',
      degree: '8°',
      meaning: 'Mars represents action, drive, passion, and how you assert yourself',
      influence: 'In Aries: Strong willpower, initiative, and courage. Perfect time for new beginnings and taking decisive action.'
    },
    {
      planet: '♃ Jupiter',
      sign: 'Taurus',
      degree: '5°',
      meaning: 'Jupiter brings expansion, luck, wisdom, and opportunities',
      influence: 'In Taurus: Growth through practical matters, financial opportunities, and appreciation of earthly pleasures.'
    },
    {
      planet: '♄ Saturn',
      sign: 'Pisces',
      degree: '3°',
      meaning: 'Saturn teaches discipline, responsibility, and life lessons through challenges',
      influence: 'In Pisces: Learning to structure spiritual practices, setting boundaries with empathy, and practical mysticism.'
    },
    {
      planet: '♅ Uranus',
      sign: 'Taurus',
      degree: '19°',
      meaning: 'Uranus brings sudden change, innovation, and liberation',
      influence: 'In Taurus: Revolutionary changes in values, money, and material security. Unexpected financial developments.'
    },
    {
      planet: '♆ Neptune',
      sign: 'Pisces',
      degree: '25°',
      meaning: 'Neptune governs dreams, spirituality, illusion, and psychic abilities',
      influence: 'In Pisces: Heightened spiritual awareness, artistic inspiration, but beware of confusion or deception.'
    },
    {
      planet: '♇ Pluto',
      sign: 'Capricorn',
      degree: '29°',
      meaning: 'Pluto represents transformation, power, death/rebirth, and hidden truths',
      influence: 'In Capricorn: Deep transformation of structures, authority, and traditional systems. Intense changes in career/status.'
    },
  ];

  const tickerContent = [...planetaryData, ...planetaryData];

  const handlePlanetClick = (planet: PlanetaryData) => {
    setSelectedPlanet(planet);
    setShowExplanation(true);
  };

  const handleTickerClick = () => {
    if (!showExplanation) {
      setShowExplanation(true);
      setSelectedPlanet(null);
    }
  };

  return (
    <>
      <div className="planetary-ticker" onClick={handleTickerClick} style={{ cursor: 'pointer' }}>
        <div className="ticker-content">
          {tickerContent.map((item, index) => (
            <span
              key={index}
              className="ticker-item"
              onClick={(e) => {
                e.stopPropagation();
                handlePlanetClick(item);
              }}
              style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(107, 70, 193, 0.2)';
                e.currentTarget.style.color = 'var(--purple-lavender)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'inherit';
              }}
            >
              {item.planet} in {item.sign} {item.degree}
            </span>
          ))}
        </div>
      </div>

      {/* Explanation Modal */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '1rem'
            }}
            onClick={() => setShowExplanation(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 29, 0.95), rgba(107, 70, 193, 0.1))',
                borderRadius: '16px',
                border: '2px solid var(--gold-accent)',
                padding: '2rem',
                maxWidth: '800px',
                maxHeight: '80vh',
                overflowY: 'auto',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{
                  color: 'var(--gold-accent)',
                  fontSize: '1.8rem',
                  marginBottom: '0.5rem'
                }}>
                  ✨ Current Planetary Transits ✨
                </h3>
                <p style={{ color: 'var(--purple-lavender)' }}>
                  Understanding the cosmic influences affecting us right now
                </p>
              </div>

              {selectedPlanet ? (
                // Individual Planet Details
                <div>
                  <div style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--purple-lavender)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{
                      color: 'var(--green-sage)',
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      {selectedPlanet.planet} in {selectedPlanet.sign} at {selectedPlanet.degree}
                    </h4>

                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
                        What this planet represents:
                      </h5>
                      <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                        {selectedPlanet.meaning}
                      </p>
                    </div>

                    <div>
                      <h5 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
                        Current influence:
                      </h5>
                      <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                        {selectedPlanet.influence}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // General Explanation
                <div>
                  <div style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--green-sage)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ color: 'var(--green-sage)', marginBottom: '1rem' }}>
                      🌟 What are Planetary Transits?
                    </h4>
                    <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                      Planetary transits show where each planet is currently located in the zodiac.
                      These positions influence the collective energy and can affect your personal life
                      depending on your birth chart.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--purple-lavender)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ color: 'var(--purple-lavender)', marginBottom: '1rem' }}>
                      🔢 Understanding Degrees
                    </h4>
                    <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                      Each zodiac sign spans 30 degrees (0° to 29°). The degree shows exactly where
                      in that sign the planet is positioned. Higher degrees mean the planet is further
                      along in expressing that sign's energy.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--gold-accent)'
                  }}>
                    <h4 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>
                      💫 How to Use This Information
                    </h4>
                    <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                      Click on any individual planet in the ticker to learn about its current influence.
                      Use this knowledge to align your actions with cosmic timing and understand the
                      energetic themes affecting your life right now.
                    </p>
                  </div>
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  onClick={() => setShowExplanation(false)}
                  style={{
                    background: 'linear-gradient(135deg, var(--purple-deep), var(--purple-royal))',
                    color: 'white',
                    border: 'none',
                    padding: '0.8rem 2rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(107, 70, 193, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(107, 70, 193, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 70, 193, 0.3)';
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlanetaryTicker;