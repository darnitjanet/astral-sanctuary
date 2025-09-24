import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TarotCard from './TarotCard';
import { SpreadType, DeckStyle, DrawCard, TarotReading } from '../types/tarot';
import { fullDeck } from '../data/tarotDeck';
import { spreads } from '../data/spreads';

interface TarotSpreadProps {
  spreadType: SpreadType;
  deckStyle: DeckStyle;
  question?: string;
}

const TarotSpread: React.FC<TarotSpreadProps> = ({
  spreadType,
  deckStyle,
  question
}) => {
  const [reading, setReading] = useState<DrawCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState(true);
  const [currentSpread, setCurrentSpread] = useState(spreads.find(s => s.type === spreadType)!);

  useEffect(() => {
    const spread = spreads.find(s => s.type === spreadType);
    if (spread) {
      setCurrentSpread(spread);
      generateReading(spread);
    }
  }, [spreadType]);

  const generateReading = (spread: typeof currentSpread) => {
    setIsShuffling(true);
    setFlippedCards([]);

    setTimeout(() => {
      const shuffledDeck = [...fullDeck].sort(() => Math.random() - 0.5);
      const selectedCards = shuffledDeck.slice(0, spread.cardCount);

      const newReading: DrawCard[] = selectedCards.map((card, index) => ({
        card,
        position: index,
        positionMeaning: spread.positions[index].meaning,
        isReversed: Math.random() < 0.3
      }));

      setReading(newReading);
      setIsShuffling(false);

      const savedReading: TarotReading = {
        id: Date.now().toString(),
        timestamp: new Date(),
        spread: spreadType,
        cards: newReading,
        question,
        deckStyle
      };

      const savedReadings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
      savedReadings.unshift(savedReading);
      localStorage.setItem('tarotReadings', JSON.stringify(savedReadings.slice(0, 50)));
    }, 2000);
  };

  const handleCardFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  if (isShuffling) {
    return (
      <motion.div
        className="shuffling-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '400px',
          textAlign: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}
        >
          🎴
        </motion.div>
        <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
          Shuffling the Cards...
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          The universe is aligning your reading
        </p>
      </motion.div>
    );
  }

  return (
    <div className="tarot-reading">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--green-sage)', marginBottom: '0.5rem' }}>
          {currentSpread.name}
        </h2>
        {question && (
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            \"{question}\"
          </p>
        )}
      </div>

      <div className="spread-container" style={{
        position: 'relative',
        minHeight: '800px',
        paddingBottom: '100px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        overflowX: 'auto'
      }}>
        {reading.map((drawCard, index) => {
          const position = currentSpread.positions[index];
          if (!position) return null;

          return (
            <motion.div
              key={index}
              className="spread-position"
              style={{
                position: 'absolute',
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
              initial={{ scale: 0, rotate: Math.random() * 360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Tarot Card Only */}
              <TarotCard
                card={drawCard.card}
                isReversed={drawCard.isReversed}
                isFlipped={flippedCards.includes(index)}
                deckStyle={deckStyle}
                onFlip={() => handleCardFlip(index)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Card Interpretations Display */}
      {flippedCards.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(26, 26, 29, 0.95)',
            borderRadius: '16px',
            border: '2px solid var(--purple-lavender)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
          }}
        >
          <h3 style={{
            color: 'var(--purple-lavender)',
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1.5rem'
          }}>
            🔮 Card Revelations
          </h3>

          <div style={{
            display: 'grid',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {flippedCards
              .sort((a, b) => a - b) // Show in position order (past → present → future)
              .map(cardIndex => {
                const drawCard = reading[cardIndex];
                const position = currentSpread.positions[cardIndex];

                return (
                  <motion.div
                    key={cardIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cardIndex * 0.1 }}
                    style={{
                      padding: '1.5rem',
                      background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.1), rgba(134, 239, 172, 0.1))',
                      borderRadius: '12px',
                      border: '1px solid var(--gold-accent)'
                    }}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: '1.5rem',
                      alignItems: 'start'
                    }}>
                      {/* Position Info */}
                      <div style={{
                        background: 'rgba(26, 26, 29, 0.8)',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '2px solid var(--gold-accent)',
                        minWidth: '180px'
                      }}>
                        <h4 style={{
                          color: 'var(--gold-accent)',
                          fontSize: '0.9rem',
                          margin: '0 0 0.5rem 0',
                          fontWeight: 'bold'
                        }}>
                          {position.name}
                        </h4>
                        <p style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.8rem',
                          margin: 0,
                          lineHeight: '1.3'
                        }}>
                          {position.meaning}
                        </p>
                      </div>

                      {/* Card Interpretation */}
                      <div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <h4 style={{
                            color: 'var(--green-sage)',
                            fontSize: '1.2rem',
                            margin: 0
                          }}>
                            {drawCard.card.name}
                          </h4>
                          {drawCard.isReversed && (
                            <span style={{
                              background: 'var(--purple-royal)',
                              color: 'white',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '12px',
                              fontSize: '0.7rem',
                              fontWeight: 'bold'
                            }}>
                              REVERSED
                            </span>
                          )}
                        </div>

                        <p style={{
                          color: 'var(--text-primary)',
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          marginBottom: '1rem'
                        }}>
                          {drawCard.isReversed ? drawCard.card.reversedMeaning : drawCard.card.uprightMeaning}
                        </p>

                        <div style={{
                          fontSize: '0.9rem',
                          color: 'var(--purple-lavender)',
                          fontWeight: '500'
                        }}>
                          <strong>Keywords:</strong> {drawCard.card.keywords.join(', ')}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      )}

      {/* Final Reading Synopsis */}
      {flippedCards.length > 0 && flippedCards.length === reading.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(26, 26, 29, 0.95), rgba(107, 70, 193, 0.1))',
            borderRadius: '16px',
            border: '2px solid var(--gold-accent)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{
              color: 'var(--gold-accent)',
              fontSize: '2rem',
              marginBottom: '0.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              ✨ Complete Reading Synopsis ✨
            </h3>
            <p style={{ color: 'var(--purple-lavender)', fontSize: '1.1rem' }}>
              The Universe Has Spoken - Here Is Your Guidance
            </p>
          </div>

          {/* Reading Summary */}
          <div style={{
            background: 'rgba(26, 26, 29, 0.8)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--purple-lavender)',
            marginBottom: '2rem'
          }}>
            <h4 style={{
              color: 'var(--green-sage)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🔮</span>
              Overall Message
            </h4>
            <p style={{
              color: 'var(--text-primary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Your {currentSpread.name.toLowerCase()} reading reveals a powerful narrative about your current journey.
              {reading.filter((_, index) => flippedCards.includes(index)).some(card => card.isReversed)
                ? " The presence of reversed cards indicates areas where transformation and inner work are calling for your attention. "
                : " The upright energy suggests you are moving in harmony with the universe's flow. "
              }
              {question
                ? `In response to your question "${question}", the cards offer profound insights for your consideration.`
                : "The universe has chosen this moment to share its wisdom with you."
              }
            </p>
          </div>

          {/* Key Themes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Past/Foundation Theme */}
            {currentSpread.type === 'celtic-cross' && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(134, 239, 172, 0.1), rgba(26, 26, 29, 0.8))',
                padding: '1.2rem',
                borderRadius: '10px',
                border: '1px solid var(--green-sage)'
              }}>
                <h5 style={{ color: 'var(--green-sage)', marginBottom: '0.8rem' }}>
                  🌱 Foundation & Past
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {reading[2] && flippedCards.includes(2) ? (
                    `The ${reading[2].card.name}${reading[2].isReversed ? ' (reversed)' : ''} as your foundation shows ${reading[2].isReversed ? reading[2].card.reversedMeaning.split('.')[0] : reading[2].card.uprightMeaning.split('.')[0]}.`
                  ) : (
                    "Your foundational influences are ready to be revealed."
                  )}
                </p>
              </div>
            )}

            {/* Present/Challenge Theme */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(26, 26, 29, 0.8))',
              padding: '1.2rem',
              borderRadius: '10px',
              border: '1px solid var(--gold-accent)'
            }}>
              <h5 style={{ color: 'var(--gold-accent)', marginBottom: '0.8rem' }}>
                ⚡ Present Energies
              </h5>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                {reading[0] && flippedCards.includes(0) ? (
                  `${reading[0].card.name}${reading[0].isReversed ? ' (reversed)' : ''} represents your current state: ${reading[0].isReversed ? reading[0].card.reversedMeaning.split('.')[0] : reading[0].card.uprightMeaning.split('.')[0]}.`
                ) : (
                  "Your present moment energies await discovery."
                )}
              </p>
            </div>

            {/* Future/Outcome Theme */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.1), rgba(26, 26, 29, 0.8))',
              padding: '1.2rem',
              borderRadius: '10px',
              border: '1px solid var(--purple-lavender)'
            }}>
              <h5 style={{ color: 'var(--purple-lavender)', marginBottom: '0.8rem' }}>
                🌟 Path Forward
              </h5>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                {currentSpread.type === 'celtic-cross' && reading[9] && flippedCards.includes(9) ? (
                  `The ${reading[9].card.name}${reading[9].isReversed ? ' (reversed)' : ''} as your final outcome suggests ${reading[9].isReversed ? reading[9].card.reversedMeaning.split('.')[0] : reading[9].card.uprightMeaning.split('.')[0]}.`
                ) : reading[reading.length - 1] && flippedCards.includes(reading.length - 1) ? (
                  `${reading[reading.length - 1].card.name}${reading[reading.length - 1].isReversed ? ' (reversed)' : ''} guides your path ahead with ${reading[reading.length - 1].isReversed ? reading[reading.length - 1].card.reversedMeaning.split('.')[0] : reading[reading.length - 1].card.uprightMeaning.split('.')[0]}.`
                ) : (
                  "Your future guidance is waiting to be unveiled."
                )}
              </p>
            </div>
          </div>

          {/* Action Items */}
          <div style={{
            background: 'rgba(26, 26, 29, 0.8)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--green-emerald)',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{
              color: 'var(--green-emerald)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>📝</span>
              Reflection & Action
            </h4>
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '0.8rem' }}>
                • <strong style={{ color: 'var(--text-primary)' }}>Meditate</strong> on the connections between the cards and how they relate to your current life situation
              </p>
              <p style={{ marginBottom: '0.8rem' }}>
                • <strong style={{ color: 'var(--text-primary)' }}>Journal</strong> about the emotions and insights this reading has brought to the surface
              </p>
              <p style={{ marginBottom: '0.8rem' }}>
                • <strong style={{ color: 'var(--text-primary)' }}>Trust your intuition</strong> - the cards are mirrors reflecting your inner wisdom
              </p>
              <p>
                • <strong style={{ color: 'var(--text-primary)' }}>Take inspired action</strong> based on the guidance you've received
              </p>
            </div>
          </div>

          {/* Closing Blessing */}
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.2), rgba(134, 239, 172, 0.1))',
            borderRadius: '8px',
            border: '1px solid var(--purple-lavender)'
          }}>
            <p style={{
              color: 'var(--purple-lavender)',
              fontStyle: 'italic',
              fontSize: '1rem',
              marginBottom: '0.5rem'
            }}>
              "The cards have opened a doorway to understanding. May this wisdom guide you with clarity and light on your journey ahead."
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              opacity: 0.8
            }}>
              ✨ Reading completed with love and light ✨
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TarotSpread;