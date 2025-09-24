import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { interpretDream, interpretDreamWithOpenAI } from '../services/dreamInterpretation';

interface DreamEntry {
  content: string;
  mood: string;
  symbols: string[];
  lucid: boolean;
  interpretation?: string;
}

const DreamLogger: React.FC = () => {
  const [dreamData, setDreamData] = useState<DreamEntry>({
    content: '',
    mood: 'neutral',
    symbols: [],
    lucid: false,
    interpretation: ''
  });
  const [symbolInput, setSymbolInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const dreamMoods = [
    { value: 'peaceful', label: '😌 Peaceful', color: '#86EFAC' },
    { value: 'exciting', label: '✨ Exciting', color: '#F59E0B' },
    { value: 'mysterious', label: '🔮 Mysterious', color: '#A78BFA' },
    { value: 'anxious', label: '😰 Anxious', color: '#FCA5A5' },
    { value: 'joyful', label: '😊 Joyful', color: '#FDE047' },
    { value: 'dark', label: '🌑 Dark', color: '#64748B' },
    { value: 'neutral', label: '😐 Neutral', color: '#9CA3AF' }
  ];

  const addSymbol = () => {
    if (symbolInput.trim() && !dreamData.symbols.includes(symbolInput.trim())) {
      setDreamData(prev => ({
        ...prev,
        symbols: [...prev.symbols, symbolInput.trim()]
      }));
      setSymbolInput('');
    }
  };

  const removeSymbol = (symbol: string) => {
    setDreamData(prev => ({
      ...prev,
      symbols: prev.symbols.filter(s => s !== symbol)
    }));
  };

  const generateDreamInterpretation = async () => {
    if (!dreamData.content.trim()) return;

    setIsAnalyzing(true);

    try {
      const interpretation = await interpretDreamWithOpenAI({
        content: dreamData.content,
        mood: dreamData.mood,
        symbols: dreamData.symbols,
        lucid: dreamData.lucid
      });

      setDreamData(prev => ({
        ...prev,
        interpretation: interpretation.interpretation
      }));

      setShowAnalysis(true);
    } catch (error) {
      console.error('Error generating dream interpretation:', error);

      // Fallback interpretation
      setDreamData(prev => ({
        ...prev,
        interpretation: `Your dream reveals meaningful insights about your current life journey. The ${dreamData.mood} emotional tone and symbols like ${dreamData.symbols.slice(0, 2).join(', ')} suggest important themes for reflection. Dreams are a window into our subconscious wisdom.`
      }));

      setShowAnalysis(true);
    } finally {
      setIsAnalyzing(false);
    }
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
      <h3 style={{
        color: 'var(--purple-lavender)',
        marginBottom: '1rem',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}>
        🌙 Dream Analysis & Interpretation
      </h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          color: 'var(--text-primary)',
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 'bold'
        }}>
          Describe Your Dream:
        </label>
        <textarea
          value={dreamData.content}
          onChange={(e) => setDreamData(prev => ({ ...prev, content: e.target.value }))}
          placeholder="Share the details of your dream... What happened? Who was there? What did you see, hear, or feel?"
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid var(--purple-lavender)',
            background: 'rgba(26, 26, 29, 0.8)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        {/* Dream Mood */}
        <div>
          <label style={{
            color: 'var(--text-primary)',
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            Dream Mood:
          </label>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {dreamMoods.map(mood => (
              <button
                key={mood.value}
                onClick={() => setDreamData(prev => ({ ...prev, mood: mood.value }))}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: dreamData.mood === mood.value
                    ? `2px solid ${mood.color}`
                    : '1px solid var(--purple-lavender)',
                  background: dreamData.mood === mood.value
                    ? mood.color + '20'
                    : 'rgba(26, 26, 29, 0.8)',
                  color: dreamData.mood === mood.value
                    ? mood.color
                    : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: dreamData.mood === mood.value ? 'bold' : 'normal',
                  transition: 'all 0.3s ease'
                }}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dream Symbols */}
        <div>
          <label style={{
            color: 'var(--text-primary)',
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            Dream Symbols:
          </label>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '0.5rem'
          }}>
            <input
              type="text"
              value={symbolInput}
              onChange={(e) => setSymbolInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSymbol()}
              placeholder="Add a symbol (water, flying, animals...)"
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: '8px',
                border: '1px solid var(--purple-lavender)',
                background: 'rgba(26, 26, 29, 0.8)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}
            />
            <button
              onClick={addSymbol}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: 'none',
                background: 'var(--green-emerald)',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Add
            </button>
          </div>

          {/* Symbol Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {dreamData.symbols.map(symbol => (
              <span
                key={symbol}
                style={{
                  background: 'var(--purple-lavender)',
                  color: 'var(--bg-dark)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {symbol}
                <button
                  onClick={() => removeSymbol(symbol)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lucid Dream Toggle */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}>
          <input
            type="checkbox"
            checked={dreamData.lucid}
            onChange={(e) => setDreamData(prev => ({ ...prev, lucid: e.target.checked }))}
            style={{ transform: 'scale(1.2)' }}
          />
          <span>This was a lucid dream (I was aware I was dreaming)</span>
        </label>
      </div>

      {/* Analyze Button */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <motion.button
          className="glow-button"
          onClick={generateDreamInterpretation}
          disabled={!dreamData.content.trim() || isAnalyzing}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: isAnalyzing
              ? 'var(--purple-royal)'
              : 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            opacity: !dreamData.content.trim() ? 0.5 : 1,
            cursor: !dreamData.content.trim() || isAnalyzing ? 'not-allowed' : 'pointer'
          }}
        >
          {isAnalyzing ? (
            <>
              <span style={{ marginRight: '0.5rem' }}>🔮</span>
              Analyzing Dream...
            </>
          ) : (
            <>
              <span style={{ marginRight: '0.5rem' }}>✨</span>
              Interpret My Dream
            </>
          )}
        </motion.button>
      </div>

      {/* Loading Animation */}
      {isAnalyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(107, 70, 193, 0.1)',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ fontSize: '2rem', marginBottom: '0.5rem' }}
          >
            🌙
          </motion.div>
          <p style={{ color: 'var(--purple-lavender)' }}>
            Consulting the cosmic wisdom... Interpreting your dream symbols and emotions...
          </p>
        </motion.div>
      )}

      {/* Dream Interpretation Results */}
      {showAnalysis && dreamData.interpretation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.1), rgba(134, 239, 172, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '2px solid var(--green-sage)',
            marginTop: '1rem'
          }}
        >
          <h4 style={{
            color: 'var(--green-sage)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>🧿</span>
            Dream Interpretation
          </h4>

          <p style={{
            color: 'var(--text-primary)',
            lineHeight: '1.6',
            marginBottom: '1rem',
            fontSize: '1rem'
          }}>
            {dreamData.interpretation}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(26, 26, 29, 0.5)',
            borderRadius: '8px'
          }}>
            <div>
              <strong style={{ color: 'var(--purple-lavender)' }}>Emotional Tone:</strong>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                {dreamMoods.find(m => m.value === dreamData.mood)?.label}
              </span>
            </div>

            <div>
              <strong style={{ color: 'var(--purple-lavender)' }}>Consciousness Level:</strong>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                {dreamData.lucid ? '🌟 Lucid' : '😴 Regular'}
              </span>
            </div>

            {dreamData.symbols.length > 0 && (
              <div style={{ gridColumn: 'span 2' }}>
                <strong style={{ color: 'var(--purple-lavender)' }}>Key Symbols:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  {dreamData.symbols.map(symbol => (
                    <span
                      key={symbol}
                      style={{
                        background: 'var(--green-sage)',
                        color: 'var(--bg-dark)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        marginRight: '0.5rem',
                        marginBottom: '0.5rem',
                        display: 'inline-block'
                      }}
                    >
                      {symbol}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      <div style={{
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontStyle: 'italic'
      }}>
        💫 Dream interpretations are insights for reflection, not definitive answers
      </div>
    </motion.div>
  );
};

export default DreamLogger;