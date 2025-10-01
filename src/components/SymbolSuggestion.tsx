import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitSymbolSuggestion } from '../services/symbolDatabase';

interface SymbolSuggestionProps {
  onClose: () => void;
}

const SymbolSuggestion: React.FC<SymbolSuggestionProps> = ({ onClose }) => {
  const [symbol, setSymbol] = useState('');
  const [meaning, setMeaning] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!symbol.trim() || !meaning.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitSymbolSuggestion(symbol, meaning);

    setIsSubmitting(false);
    setSubmitStatus(success ? 'success' : 'error');

    if (success) {
      // Clear form after successful submission
      setTimeout(() => {
        setSymbol('');
        setMeaning('');
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    }
  };

  return (
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
        zIndex: 1000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(26, 26, 29, 0.95)',
          padding: '2rem',
          borderRadius: '12px',
          border: '2px solid var(--purple-lavender)',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(107, 70, 193, 0.3)'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{
            color: 'var(--purple-lavender)',
            fontSize: '1.5rem',
            margin: 0
          }}>
            ✨ Suggest a New Symbol
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            ×
          </button>
        </div>

        <p style={{
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem',
          fontSize: '0.9rem'
        }}>
          Help build the community dream symbol library! Your contribution will be available to all users.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              color: 'var(--text-primary)',
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Symbol Name:
            </label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="e.g., tornado, UFO, chocolate..."
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--purple-lavender)',
                background: 'rgba(26, 26, 29, 0.8)',
                color: 'var(--text-primary)',
                fontSize: '1rem'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              color: 'var(--text-primary)',
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              Symbol Meaning:
            </label>
            <textarea
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="Describe what this symbol represents in dreams..."
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--purple-lavender)',
                background: 'rgba(26, 26, 29, 0.8)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              required
            />
          </div>

          <AnimatePresence mode="wait">
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'rgba(134, 239, 172, 0.2)',
                  color: 'var(--green-emerald)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  border: '1px solid var(--green-emerald)'
                }}
              >
                ✓ Symbol added successfully! Thank you for contributing!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#ef4444',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  border: '1px solid #ef4444'
                }}
              >
                ✗ Error submitting symbol. Please try again.
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end'
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid var(--purple-lavender)',
                background: 'transparent',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !symbol.trim() || !meaning.trim()}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                background: isSubmitting
                  ? 'var(--purple-royal)'
                  : 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
                color: 'white',
                cursor: isSubmitting || !symbol.trim() || !meaning.trim() ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                opacity: isSubmitting || !symbol.trim() || !meaning.trim() ? 0.6 : 1
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Symbol'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default SymbolSuggestion;
