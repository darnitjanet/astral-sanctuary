import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ZodiacSign {
  name: string;
  symbol: string;
  element: string;
  quality: string;
  dates: string;
  ruler: string;
  traits: string[];
  description: string;
}

interface Planet {
  name: string;
  symbol: string;
  meaning: string;
  influence: string;
  keywords: string[];
}

interface House {
  number: number;
  name: string;
  meaning: string;
  themes: string[];
}

const AstrologyGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'zodiac' | 'planets' | 'houses'>('zodiac');

  const zodiacSigns: ZodiacSign[] = [
    {
      name: 'Aries',
      symbol: '♈',
      element: 'Fire',
      quality: 'Cardinal',
      dates: 'Mar 21 - Apr 19',
      ruler: 'Mars',
      traits: ['Independent', 'Energetic', 'Pioneering', 'Impulsive', 'Leadership'],
      description: 'The first sign of the zodiac, Aries are natural born leaders with boundless energy and enthusiasm. They love to start new projects and blaze trails.'
    },
    {
      name: 'Taurus',
      symbol: '♉',
      element: 'Earth',
      quality: 'Fixed',
      dates: 'Apr 20 - May 20',
      ruler: 'Venus',
      traits: ['Reliable', 'Patient', 'Practical', 'Sensual', 'Stubborn'],
      description: 'Taurus values stability and comfort. They appreciate beauty, luxury, and the finer things in life. Known for their persistence and determination.'
    },
    {
      name: 'Gemini',
      symbol: '♊',
      element: 'Air',
      quality: 'Mutable',
      dates: 'May 21 - Jun 20',
      ruler: 'Mercury',
      traits: ['Curious', 'Adaptable', 'Witty', 'Communicative', 'Restless'],
      description: 'Gemini are the communicators of the zodiac. They love learning, sharing ideas, and connecting with others. Always seeking new experiences and knowledge.'
    },
    {
      name: 'Cancer',
      symbol: '♋',
      element: 'Water',
      quality: 'Cardinal',
      dates: 'Jun 21 - Jul 22',
      ruler: 'Moon',
      traits: ['Nurturing', 'Intuitive', 'Emotional', 'Protective', 'Home-loving'],
      description: 'Cancer is deeply intuitive and sentimental. They value family, home, and emotional security above all else. Natural caregivers with strong protective instincts.'
    },
    {
      name: 'Leo',
      symbol: '♌',
      element: 'Fire',
      quality: 'Fixed',
      dates: 'Jul 23 - Aug 22',
      ruler: 'Sun',
      traits: ['Confident', 'Generous', 'Creative', 'Dramatic', 'Loyal'],
      description: 'Leo loves to be in the spotlight and inspire others. They are natural performers with big hearts and creative spirits. Born leaders who radiate warmth and confidence.'
    },
    {
      name: 'Virgo',
      symbol: '♍',
      element: 'Earth',
      quality: 'Mutable',
      dates: 'Aug 23 - Sep 22',
      ruler: 'Mercury',
      traits: ['Analytical', 'Practical', 'Helpful', 'Perfectionist', 'Humble'],
      description: 'Virgo pays attention to detail and strives for perfection. They are service-oriented, practical, and always looking for ways to improve and help others.'
    },
    {
      name: 'Libra',
      symbol: '♎',
      element: 'Air',
      quality: 'Cardinal',
      dates: 'Sep 23 - Oct 22',
      ruler: 'Venus',
      traits: ['Diplomatic', 'Charming', 'Fair', 'Social', 'Indecisive'],
      description: 'Libra seeks balance and harmony in all things. They are natural diplomats who appreciate beauty, art, and meaningful relationships.'
    },
    {
      name: 'Scorpio',
      symbol: '♏',
      element: 'Water',
      quality: 'Fixed',
      dates: 'Oct 23 - Nov 21',
      ruler: 'Pluto/Mars',
      traits: ['Intense', 'Passionate', 'Mysterious', 'Transformative', 'Loyal'],
      description: 'Scorpio is the most intense sign of the zodiac. They have incredible depth, transformative power, and the ability to see beneath the surface.'
    },
    {
      name: 'Sagittarius',
      symbol: '♐',
      element: 'Fire',
      quality: 'Mutable',
      dates: 'Nov 22 - Dec 21',
      ruler: 'Jupiter',
      traits: ['Adventurous', 'Optimistic', 'Philosophical', 'Freedom-loving', 'Honest'],
      description: 'Sagittarius is the eternal seeker, always looking for adventure and higher meaning. They love travel, learning, and expanding their horizons.'
    },
    {
      name: 'Capricorn',
      symbol: '♑',
      element: 'Earth',
      quality: 'Cardinal',
      dates: 'Dec 22 - Jan 19',
      ruler: 'Saturn',
      traits: ['Ambitious', 'Disciplined', 'Responsible', 'Traditional', 'Patient'],
      description: 'Capricorn is focused on achievement and building lasting structures. They are natural leaders who value tradition, hard work, and success.'
    },
    {
      name: 'Aquarius',
      symbol: '♒',
      element: 'Air',
      quality: 'Fixed',
      dates: 'Jan 20 - Feb 18',
      ruler: 'Uranus/Saturn',
      traits: ['Independent', 'Innovative', 'Humanitarian', 'Eccentric', 'Detached'],
      description: 'Aquarius is the humanitarian of the zodiac. They are forward-thinking, innovative, and deeply concerned with making the world a better place.'
    },
    {
      name: 'Pisces',
      symbol: '♓',
      element: 'Water',
      quality: 'Mutable',
      dates: 'Feb 19 - Mar 20',
      ruler: 'Neptune/Jupiter',
      traits: ['Intuitive', 'Compassionate', 'Artistic', 'Dreamy', 'Sensitive'],
      description: 'Pisces is deeply intuitive and compassionate. They are natural artists and healers with strong connection to the spiritual realm.'
    }
  ];

  const planets: Planet[] = [
    {
      name: 'Sun',
      symbol: '☉',
      meaning: 'Core Self & Identity',
      influence: 'Your ego, vitality, and life purpose. Represents your conscious mind and how you express your individuality.',
      keywords: ['Identity', 'Ego', 'Vitality', 'Leadership', 'Creativity']
    },
    {
      name: 'Moon',
      symbol: '☽',
      meaning: 'Emotions & Subconscious',
      influence: 'Your emotional nature, intuition, and subconscious patterns. Governs your inner world and instinctive responses.',
      keywords: ['Emotions', 'Intuition', 'Habits', 'Nurturing', 'Security']
    },
    {
      name: 'Mercury',
      symbol: '☿',
      meaning: 'Communication & Mind',
      influence: 'How you think, communicate, and process information. Rules your rational mind and learning style.',
      keywords: ['Communication', 'Intelligence', 'Learning', 'Travel', 'Technology']
    },
    {
      name: 'Venus',
      symbol: '♀',
      meaning: 'Love & Beauty',
      influence: 'Your approach to love, relationships, and aesthetics. Governs what you value and find beautiful.',
      keywords: ['Love', 'Beauty', 'Harmony', 'Values', 'Relationships']
    },
    {
      name: 'Mars',
      symbol: '♂',
      meaning: 'Action & Drive',
      influence: 'Your energy, passion, and how you assert yourself. Rules your motivation and fighting spirit.',
      keywords: ['Energy', 'Action', 'Passion', 'Courage', 'Competition']
    },
    {
      name: 'Jupiter',
      symbol: '♃',
      meaning: 'Expansion & Wisdom',
      influence: 'Your growth, optimism, and search for meaning. Brings opportunities and broadens your perspective.',
      keywords: ['Growth', 'Wisdom', 'Luck', 'Philosophy', 'Adventure']
    },
    {
      name: 'Saturn',
      symbol: '♄',
      meaning: 'Structure & Discipline',
      influence: 'Your responsibilities, limitations, and life lessons. Teaches discipline through challenges.',
      keywords: ['Discipline', 'Structure', 'Responsibility', 'Lessons', 'Authority']
    },
    {
      name: 'Uranus',
      symbol: '♅',
      meaning: 'Innovation & Freedom',
      influence: 'Your need for independence and unique expression. Brings sudden changes and revolutionary insights.',
      keywords: ['Innovation', 'Freedom', 'Rebellion', 'Technology', 'Originality']
    },
    {
      name: 'Neptune',
      symbol: '♆',
      meaning: 'Dreams & Spirituality',
      influence: 'Your imagination, spirituality, and connection to the divine. Rules dreams, illusions, and psychic abilities.',
      keywords: ['Dreams', 'Spirituality', 'Imagination', 'Compassion', 'Illusion']
    },
    {
      name: 'Pluto',
      symbol: '♇',
      meaning: 'Transformation & Power',
      influence: 'Your capacity for deep transformation and regeneration. Rules hidden powers and profound change.',
      keywords: ['Transformation', 'Power', 'Rebirth', 'Intensity', 'Hidden']
    }
  ];

  const houses: House[] = [
    { number: 1, name: 'House of Self', meaning: 'Your identity, appearance, and first impressions', themes: ['Personality', 'Physical body', 'First impressions', 'Initiative'] },
    { number: 2, name: 'House of Values', meaning: 'Your money, possessions, and personal values', themes: ['Money', 'Possessions', 'Self-worth', 'Material security'] },
    { number: 3, name: 'House of Communication', meaning: 'Your communication, siblings, and immediate environment', themes: ['Communication', 'Learning', 'Siblings', 'Local travel'] },
    { number: 4, name: 'House of Home', meaning: 'Your family, roots, and emotional foundation', themes: ['Home', 'Family', 'Roots', 'Emotional security'] },
    { number: 5, name: 'House of Creativity', meaning: 'Your creativity, romance, and self-expression', themes: ['Creativity', 'Romance', 'Children', 'Fun'] },
    { number: 6, name: 'House of Service', meaning: 'Your work, health, and daily routines', themes: ['Work', 'Health', 'Service', 'Daily routines'] },
    { number: 7, name: 'House of Partnerships', meaning: 'Your relationships and partnerships', themes: ['Marriage', 'Business partnerships', 'Open enemies', 'Cooperation'] },
    { number: 8, name: 'House of Transformation', meaning: 'Your shared resources and transformation', themes: ['Shared resources', 'Death/rebirth', 'Taxes', 'Occult'] },
    { number: 9, name: 'House of Philosophy', meaning: 'Your beliefs, higher learning, and distant travel', themes: ['Philosophy', 'Higher education', 'Foreign travel', 'Religion'] },
    { number: 10, name: 'House of Career', meaning: 'Your career, reputation, and public image', themes: ['Career', 'Reputation', 'Authority', 'Social status'] },
    { number: 11, name: 'House of Community', meaning: 'Your friendships, groups, and hopes', themes: ['Friends', 'Groups', 'Hopes', 'Social causes'] },
    { number: 12, name: 'House of Spirituality', meaning: 'Your subconscious, spirituality, and hidden things', themes: ['Spirituality', 'Hidden enemies', 'Subconscious', 'Sacrifice'] }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          color: 'var(--green-sage)',
          fontSize: '2rem',
          marginBottom: '0.5rem'
        }}>
          ⭐ Astrology Learning Guide
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Discover the ancient wisdom of the stars and unlock the secrets of your cosmic blueprint
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {[
          { id: 'zodiac', name: '♈ Zodiac Signs', desc: '12 Signs' },
          { id: 'planets', name: '☉ Planets', desc: '10 Celestial Bodies' },
          { id: 'houses', name: '🏠 Houses', desc: '12 Life Areas' }
        ].map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id as any)}
            style={{
              padding: '1rem 1.5rem',
              background: activeSection === section.id
                ? 'linear-gradient(135deg, var(--green-forest) 0%, var(--green-emerald) 100%)'
                : 'rgba(26, 26, 29, 0.8)',
              color: 'var(--text-primary)',
              border: activeSection === section.id
                ? '2px solid var(--green-sage)'
                : '1px solid var(--green-sage)',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              textAlign: 'center',
              minWidth: '150px'
            }}
          >
            <div style={{ marginBottom: '0.25rem' }}>{section.name}</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{section.desc}</div>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeSection === 'zodiac' && (
          <motion.div
            key="zodiac"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(26, 26, 29, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--green-sage)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--green-sage)', marginBottom: '1rem' }}>
                  The Twelve Zodiac Signs
                </h3>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  Each zodiac sign represents a unique personality archetype with distinct traits, elements, and ruling planets.
                  Understanding your sun sign is the foundation of astrology.
                </p>
              </div>

              {zodiacSigns.map((sign, index) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--purple-lavender)'
                  }}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      background: 'linear-gradient(135deg, var(--green-forest), var(--green-emerald))',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '4rem',
                      height: '4rem'
                    }}>
                      {sign.symbol}
                    </div>

                    <div>
                      <h4 style={{
                        color: 'var(--green-sage)',
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        {sign.name}
                      </h4>
                      <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '0.75rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <span><strong>Element:</strong> {sign.element}</span>
                        <span><strong>Quality:</strong> {sign.quality}</span>
                        <span><strong>Ruler:</strong> {sign.ruler}</span>
                      </div>
                      <p style={{
                        color: 'var(--text-primary)',
                        lineHeight: '1.5',
                        marginBottom: '1rem'
                      }}>
                        {sign.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {sign.traits.map(trait => (
                          <span
                            key={trait}
                            style={{
                              background: 'var(--green-sage)',
                              color: 'var(--bg-dark)',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.8rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      textAlign: 'center',
                      color: 'var(--purple-lavender)',
                      fontSize: '0.9rem'
                    }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                        Dates
                      </div>
                      {sign.dates}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'planets' && (
          <motion.div
            key="planets"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(26, 26, 29, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--purple-royal)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--purple-royal)', marginBottom: '1rem' }}>
                  The Ten Planets
                </h3>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  In astrology, planets represent different aspects of your personality and life experience.
                  Each planet governs specific themes and influences how you express those energies.
                </p>
              </div>

              {planets.map((planet, index) => (
                <motion.div
                  key={planet.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--purple-royal)'
                  }}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '1.5rem',
                    alignItems: 'start'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      background: 'linear-gradient(135deg, var(--purple-royal), var(--purple-lavender))',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '4rem',
                      height: '4rem'
                    }}>
                      {planet.symbol}
                    </div>

                    <div>
                      <h4 style={{
                        color: 'var(--purple-royal)',
                        fontSize: '1.5rem',
                        marginBottom: '0.25rem'
                      }}>
                        {planet.name}
                      </h4>
                      <div style={{
                        color: 'var(--purple-lavender)',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                      }}>
                        {planet.meaning}
                      </div>
                      <p style={{
                        color: 'var(--text-primary)',
                        lineHeight: '1.6',
                        marginBottom: '1rem'
                      }}>
                        {planet.influence}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {planet.keywords.map(keyword => (
                          <span
                            key={keyword}
                            style={{
                              background: 'var(--purple-royal)',
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.8rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSection === 'houses' && (
          <motion.div
            key="houses"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(26, 26, 29, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--gold-accent)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>
                  The Twelve Houses
                </h3>
                <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  The twelve houses represent different areas of life experience. Each house governs specific themes
                  and shows where planetary energies will manifest in your life.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {houses.map((house, index) => (
                  <motion.div
                    key={house.number}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    style={{
                      background: 'rgba(26, 26, 29, 0.8)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid var(--gold-accent)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, var(--gold-accent), #F59E0B)',
                        color: 'var(--bg-dark)',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        minWidth: '3rem',
                        textAlign: 'center'
                      }}>
                        {house.number}
                      </div>
                      <div>
                        <h4 style={{
                          color: 'var(--gold-accent)',
                          fontSize: '1.2rem',
                          marginBottom: '0.25rem'
                        }}>
                          {house.name}
                        </h4>
                      </div>
                    </div>

                    <p style={{
                      color: 'var(--text-primary)',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}>
                      {house.meaning}
                    </p>

                    <div>
                      <h5 style={{
                        color: 'var(--gold-accent)',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        fontWeight: 'bold'
                      }}>
                        Key Themes:
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {house.themes.map(theme => (
                          <span
                            key={theme}
                            style={{
                              background: 'var(--gold-accent)',
                              color: 'var(--bg-dark)',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '8px',
                              fontSize: '0.8rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AstrologyGuide;