import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigationCards = [
    {
      title: 'Tarot Reading',
      description: 'Divine guidance through sacred cards',
      icon: '🔮',
      path: '/tarot',
      gradient: 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
      border: 'var(--purple-lavender)'
    },
    {
      title: 'Birth Chart',
      description: 'Discover your celestial blueprint',
      icon: '⭐',
      path: '/birth-chart',
      gradient: 'linear-gradient(135deg, var(--green-forest) 0%, var(--green-emerald) 100%)',
      border: 'var(--green-sage)'
    },
    {
      title: 'Daily Cosmos',
      description: 'Today\'s mystical influences',
      icon: '🌙',
      path: '/daily-cosmos',
      gradient: 'linear-gradient(135deg, var(--purple-royal) 0%, var(--green-forest) 100%)',
      border: 'var(--gold-accent)'
    },
    {
      title: 'Numerology',
      description: 'Discover your life path through sacred numbers',
      icon: '🔢',
      path: '/learn?section=numerology',
      gradient: 'linear-gradient(135deg, var(--green-emerald) 0%, var(--purple-deep) 100%)',
      border: 'var(--green-sage)'
    },
    {
      title: 'Dream Journal',
      description: 'Record and decode messages from your subconscious',
      icon: '💭',
      path: '/journal',
      gradient: 'linear-gradient(135deg, var(--purple-lavender) 20%, var(--purple-deep) 80%)',
      border: 'var(--purple-lavender)'
    },
    {
      title: 'Learn',
      description: 'Expand your mystical knowledge',
      icon: '📚',
      path: '/learn',
      gradient: 'linear-gradient(135deg, var(--gold-accent) 0%, var(--green-forest) 100%)',
      border: 'var(--gold-accent)'
    }
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header" style={{ marginBottom: '4rem' }}>
          <motion.h1
            className="page-title"
            style={{ fontSize: '4rem', marginBottom: '1rem' }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to the Astral Sanctuary
          </motion.h1>
          <motion.p
            className="page-subtitle"
            style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your celestial space for divination, cosmic wisdom, and spiritual discovery.
            Choose your path to enlightenment.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {navigationCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(card.path)}
              style={{
                background: card.gradient,
                padding: '2rem',
                borderRadius: '16px',
                border: `2px solid ${card.border}`,
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Mystical overlay effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {card.icon}
                </div>

                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  {card.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  textAlign: 'center',
                  opacity: 0.9
                }}>
                  {card.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${card.border}, transparent)`
              }} />
            </motion.div>
          ))}
        </div>

        {/* Mystical quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(26, 26, 29, 0.6)',
            borderRadius: '12px',
            border: '1px solid var(--purple-lavender)',
            maxWidth: '600px',
            margin: '4rem auto 0'
          }}
        >
          <p style={{
            color: 'var(--purple-lavender)',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            "The universe is not outside of you. Look inside yourself; everything that you want, you already are."
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            — Rumi
          </p>
        </motion.div>

        {/* SEO Content Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: '4rem',
            padding: '3rem 0',
            textAlign: 'left'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(26, 26, 29, 0.6)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid var(--purple-lavender)'
            }}>
              <h2 style={{ color: 'var(--purple-lavender)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                Free Tarot Card Readings Online
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Experience authentic tarot readings with our comprehensive collection of spreads. From simple three-card readings to complex Celtic Cross layouts, discover divine guidance for love, career, and spiritual growth. Our interactive tarot cards provide instant insights into your past, present, and future.
              </p>
            </div>

            <div style={{
              background: 'rgba(26, 26, 29, 0.6)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid var(--green-sage)'
            }}>
              <h2 style={{ color: 'var(--green-sage)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                Astrology Birth Charts & Horoscopes
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Unlock your celestial blueprint with detailed birth chart analysis. Calculate your sun, moon, and rising signs, planetary positions, and houses. Get daily horoscopes, track moon phases, and understand how cosmic events influence your life path and relationships.
              </p>
            </div>

            <div style={{
              background: 'rgba(26, 26, 29, 0.6)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid var(--gold-accent)'
            }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                Dream Interpretation & Spiritual Guidance
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Decode the hidden messages in your dreams with our comprehensive dream journal and interpretation tools. Explore numerology calculations, track synchronicities, and discover your life path number. Connect with your higher self through meditation and spiritual practices.
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '3rem',
            textAlign: 'center',
            background: 'rgba(76, 29, 149, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid var(--purple-deep)'
          }}>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '2rem' }}>
              Your Sacred Space for Divination & Mystical Discovery
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Astral Sanctuary offers completely free spiritual tools and guidance for seekers on their mystical journey. Whether you're new to tarot and astrology or an experienced practitioner, our platform provides accurate, insightful divination experiences. Join thousands of users discovering their spiritual path through our sacred digital sanctuary.
            </p>
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <span style={{
                background: 'var(--purple-deep)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                ✨ 100% Free Forever
              </span>
              <span style={{
                background: 'var(--green-forest)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                🌙 Daily Updates
              </span>
              <span style={{
                background: 'var(--gold-accent)',
                color: 'black',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                🔮 Authentic Readings
              </span>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default HomePage;