import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TarotSpread from '../components/TarotSpread';
import SpreadSelector from '../components/SpreadSelector';
import { SpreadType } from '../types/tarot';

const TarotPage: React.FC = () => {
  const [selectedSpread, setSelectedSpread] = useState<SpreadType>('three-card');
  const [question, setQuestion] = useState('');
  const [showReading, setShowReading] = useState(false);

  const handleStartReading = () => {
    setShowReading(true);
  };

  const handleNewReading = () => {
    setShowReading(false);
    setQuestion('');
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
          <h1 className="page-title">Tarot Reading</h1>
          <p className="page-subtitle">Seek wisdom from the ancient cards</p>
        </div>

        {!showReading ? (
          <motion.div
            className="tarot-setup"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
                  Select a Spread
                </label>
                <SpreadSelector
                  selectedSpread={selectedSpread}
                  onSelectSpread={setSelectedSpread}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
                  Your Question (Optional)
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What guidance do you seek today?"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(26, 26, 29, 0.8)',
                    border: '1px solid var(--purple-lavender)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    minHeight: '100px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                className="glow-button"
                onClick={handleStartReading}
                style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
              >
                Begin Reading
              </button>
            </div>
          </motion.div>
        ) : (
          <div style={{ position: 'relative' }}>
            {/* New Reading Button - Fixed Position Upper Left */}
            <motion.button
              className="glow-button new-reading-button"
              onClick={handleNewReading}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: 'fixed',
                top: '120px',
                left: '20px',
                zIndex: 1000,
                padding: '12px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
                border: '2px solid var(--gold-accent)',
                borderRadius: '12px',
                boxShadow: '0 0 25px rgba(107, 70, 193, 0.6), 0 0 50px rgba(107, 70, 193, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              ✨ New Reading
            </motion.button>

            <TarotSpread
              spreadType={selectedSpread}
              deckStyle="rider-waite"
              question={question}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TarotPage;