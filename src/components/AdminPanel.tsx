import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { seedFirebaseSymbols } from '../services/dreamInterpretation';
import { getTopSymbols } from '../services/symbolDatabase';
import type { DreamSymbol } from '../services/symbolDatabase';

const AdminPanel: React.FC = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedStatus, setSeedStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [topSymbols, setTopSymbols] = useState<DreamSymbol[]>([]);
  const [showTopSymbols, setShowTopSymbols] = useState(false);

  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    setSeedStatus('idle');

    try {
      await seedFirebaseSymbols();
      setSeedStatus('success');
    } catch (error) {
      console.error('Error seeding database:', error);
      setSeedStatus('error');
    } finally {
      setIsSeeding(false);
    }
  };

  const handleLoadTopSymbols = async () => {
    const symbols = await getTopSymbols(20);
    setTopSymbols(symbols);
    setShowTopSymbols(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: 'rgba(26, 26, 29, 0.9)',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid var(--purple-lavender)',
        marginBottom: '2rem',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
      }}
    >
      <h2 style={{
        color: 'var(--purple-lavender)',
        marginBottom: '1.5rem',
        textAlign: 'center',
        fontSize: '1.8rem'
      }}>
        🔧 Admin Panel
      </h2>

      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem',
        color: 'var(--text-secondary)'
      }}>
        <strong style={{ color: '#ef4444' }}>⚠️ Important:</strong> Only run "Seed Database" once when setting up Firebase for the first time. It will add all 140+ default symbols to your Firestore database.
      </div>

      <div style={{
        display: 'grid',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <button
          onClick={handleSeedDatabase}
          disabled={isSeeding || seedStatus === 'success'}
          style={{
            padding: '1rem 2rem',
            borderRadius: '8px',
            border: 'none',
            background: seedStatus === 'success'
              ? 'var(--green-emerald)'
              : isSeeding
              ? 'var(--purple-royal)'
              : 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
            color: 'white',
            cursor: isSeeding || seedStatus === 'success' ? 'not-allowed' : 'pointer',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            opacity: isSeeding || seedStatus === 'success' ? 0.6 : 1,
            transition: 'all 0.3s ease'
          }}
        >
          {isSeeding ? '🔄 Seeding Database...' : seedStatus === 'success' ? '✓ Database Seeded!' : '🌱 Seed Database with Default Symbols'}
        </button>

        <button
          onClick={handleLoadTopSymbols}
          style={{
            padding: '1rem 2rem',
            borderRadius: '8px',
            border: '1px solid var(--green-sage)',
            background: 'rgba(134, 239, 172, 0.1)',
            color: 'var(--green-sage)',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          📊 View Top 20 Symbols
        </button>
      </div>

      {seedStatus === 'error' && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.2)',
          color: '#ef4444',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          textAlign: 'center',
          border: '1px solid #ef4444'
        }}>
          ✗ Error seeding database. Make sure Firebase is configured correctly.
        </div>
      )}

      {showTopSymbols && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(107, 70, 193, 0.1)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--purple-lavender)'
          }}
        >
          <h3 style={{
            color: 'var(--purple-lavender)',
            marginBottom: '1rem',
            fontSize: '1.3rem'
          }}>
            Top Symbols by Votes
          </h3>

          {topSymbols.length === 0 ? (
            <p style={{ color: 'var(--text-secondary)' }}>
              No symbols found. Seed the database first.
            </p>
          ) : (
            <div style={{
              display: 'grid',
              gap: '0.75rem'
            }}>
              {topSymbols.map((symbol, index) => (
                <div
                  key={symbol.id}
                  style={{
                    background: 'rgba(26, 26, 29, 0.6)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(167, 139, 250, 0.2)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '0.5rem'
                  }}>
                    <strong style={{
                      color: 'var(--purple-lavender)',
                      fontSize: '1.1rem'
                    }}>
                      #{index + 1} {symbol.symbol}
                    </strong>
                    <span style={{
                      background: 'var(--green-emerald)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold'
                    }}>
                      ⬆ {symbol.votes} votes
                    </span>
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    margin: 0
                  }}>
                    {symbol.meaning}
                  </p>
                  <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    opacity: 0.7
                  }}>
                    Source: {symbol.submittedBy === 'system' ? '🔧 Default' : '👥 Community'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(134, 239, 172, 0.1)',
        borderRadius: '8px',
        border: '1px solid var(--green-sage)'
      }}>
        <h4 style={{
          color: 'var(--green-sage)',
          marginBottom: '0.75rem',
          fontSize: '1.1rem'
        }}>
          📖 Database Info
        </h4>
        <ul style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          lineHeight: '1.8',
          margin: 0,
          paddingLeft: '1.5rem'
        }}>
          <li>Default symbols: 140+</li>
          <li>Auto-approval: Enabled (all community symbols are instantly approved)</li>
          <li>Caching: 5 minutes (reduces Firebase reads)</li>
          <li>Status: {seedStatus === 'success' ? '✅ Ready' : '⏳ Needs seeding'}</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
