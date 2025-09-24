import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Crystal {
  name: string;
  color: string;
  chakra: string;
  element: string;
  zodiac: string[];
  properties: string[];
  healing: string;
  uses: string[];
  affirmation: string;
  description: string;
}

interface CrystalCategory {
  name: string;
  description: string;
  crystals: Crystal[];
  color: string;
}

const CrystalGuide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('protection');
  const [selectedCrystal, setSelectedCrystal] = useState<Crystal | null>(null);

  const crystalCategories: CrystalCategory[] = [
    {
      name: 'Protection',
      description: 'Crystals for shielding, grounding, and psychic protection',
      color: '#1E293B',
      crystals: [
        {
          name: 'Black Tourmaline',
          color: 'Black',
          chakra: 'Root',
          element: 'Earth',
          zodiac: ['Capricorn', 'Scorpio'],
          properties: ['Protection', 'Grounding', 'Purification', 'EMF Shield'],
          healing: 'Shields against negative energy, electromagnetic fields, and psychic attacks. Grounds chaotic energy and promotes emotional stability.',
          uses: ['Wear for daily protection', 'Place near electronics', 'Meditate for grounding', 'Keep in car for safe travel'],
          affirmation: 'I am safe, grounded, and protected from all negative energies',
          description: 'One of the most powerful protective stones, Black Tourmaline creates an energetic shield around you.'
        },
        {
          name: 'Hematite',
          color: 'Metallic Silver/Black',
          chakra: 'Root',
          element: 'Earth',
          zodiac: ['Aries', 'Aquarius'],
          properties: ['Grounding', 'Focus', 'Protection', 'Confidence'],
          healing: 'Strengthens connection to Earth, improves concentration, and dissolves negative energy patterns.',
          uses: ['Hold during meditation', 'Wear as jewelry', 'Place on desk for focus', 'Use in grounding rituals'],
          affirmation: 'I am grounded, focused, and strongly connected to the Earth',
          description: 'A powerful grounding stone that helps you stay centered and focused in challenging situations.'
        },
        {
          name: 'Obsidian',
          color: 'Black',
          chakra: 'Root',
          element: 'Fire/Earth',
          zodiac: ['Scorpio', 'Sagittarius'],
          properties: ['Protection', 'Truth', 'Grounding', 'Psychic Shield'],
          healing: 'Reveals hidden truths, protects during spiritual work, and helps process deep emotions.',
          uses: ['Scrying and divination', 'Shadow work meditation', 'Protection rituals', 'Emotional healing'],
          affirmation: 'I face truth with courage and am protected in all spiritual work',
          description: 'A volcanic glass that serves as a powerful mirror, reflecting inner truths and providing strong protection.'
        }
      ]
    },
    {
      name: 'Love & Heart',
      description: 'Crystals for love, relationships, and heart chakra healing',
      color: '#BE185D',
      crystals: [
        {
          name: 'Rose Quartz',
          color: 'Pink',
          chakra: 'Heart',
          element: 'Water',
          zodiac: ['Taurus', 'Libra'],
          properties: ['Unconditional Love', 'Self-Love', 'Compassion', 'Healing'],
          healing: 'Opens the heart to all forms of love, promotes self-acceptance, and heals emotional wounds.',
          uses: ['Place in bedroom', 'Carry for self-love', 'Meditate for heart healing', 'Gift to loved ones'],
          affirmation: 'I am worthy of love and give love freely from my open heart',
          description: 'The quintessential stone of love, Rose Quartz radiates gentle, nurturing energy that heals the heart.'
        },
        {
          name: 'Green Aventurine',
          color: 'Green',
          chakra: 'Heart',
          element: 'Earth',
          zodiac: ['Aries', 'Leo'],
          properties: ['Heart Healing', 'Luck', 'Opportunity', 'Emotional Balance'],
          healing: 'Soothes emotional trauma, attracts luck and prosperity, and promotes optimism.',
          uses: ['Carry for luck', 'Place on heart chakra', 'Use in manifestation', 'Garden meditation'],
          affirmation: 'My heart is healed, and I attract positive opportunities with ease',
          description: 'Known as the "Stone of Opportunity," Green Aventurine brings luck while healing the heart.'
        },
        {
          name: 'Rhodonite',
          color: 'Pink with Black',
          chakra: 'Heart',
          element: 'Fire',
          zodiac: ['Taurus'],
          properties: ['Emotional Healing', 'Forgiveness', 'Self-Love', 'Compassion'],
          healing: 'Heals emotional wounds, promotes forgiveness, and helps release resentment.',
          uses: ['Emotional healing work', 'Forgiveness meditation', 'Self-love practices', 'Relationship healing'],
          affirmation: 'I forgive freely and allow my heart to heal with compassion',
          description: 'A powerful heart healer that specializes in emotional rescue and forgiveness work.'
        }
      ]
    },
    {
      name: 'Intuition & Spirituality',
      description: 'Crystals for psychic abilities, meditation, and spiritual growth',
      color: '#7C3AED',
      crystals: [
        {
          name: 'Amethyst',
          color: 'Purple',
          chakra: 'Third Eye/Crown',
          element: 'Air',
          zodiac: ['Pisces', 'Virgo', 'Aquarius'],
          properties: ['Intuition', 'Spiritual Growth', 'Protection', 'Clarity'],
          healing: 'Enhances psychic abilities, promotes spiritual awareness, and provides protective energy during meditation.',
          uses: ['Place under pillow for dreams', 'Meditate for intuition', 'Wear for protection', 'Cleanse other crystals'],
          affirmation: 'I trust my intuition and am open to spiritual guidance and wisdom',
          description: 'The master healer for spiritual development, Amethyst opens the third eye and crown chakras.'
        },
        {
          name: 'Labradorite',
          color: 'Gray with Iridescent Flashes',
          chakra: 'Third Eye/Throat',
          element: 'Water',
          zodiac: ['Leo', 'Scorpio', 'Sagittarius'],
          properties: ['Magic', 'Transformation', 'Psychic Protection', 'Intuition'],
          healing: 'Awakens magical abilities, protects aura during psychic work, and facilitates spiritual transformation.',
          uses: ['Wear during spiritual work', 'Meditation for psychic abilities', 'Dream work', 'Aura protection'],
          affirmation: 'I embrace my magical abilities and trust in my power of transformation',
          description: 'The stone of magic and transformation, Labradorite reveals hidden truths and enhances psychic gifts.'
        },
        {
          name: 'Clear Quartz',
          color: 'Clear/White',
          chakra: 'All Chakras',
          element: 'All Elements',
          zodiac: ['All Signs'],
          properties: ['Amplification', 'Clarity', 'Healing', 'Programming'],
          healing: 'Amplifies energy of other crystals, brings clarity to thoughts, and can be programmed for any purpose.',
          uses: ['Amplify other crystals', 'Meditation for clarity', 'Energy cleansing', 'Program with intentions'],
          affirmation: 'I am clear in my intentions and my energy is amplified for my highest good',
          description: 'The "Master Healer" that amplifies energy and can be programmed for any healing purpose.'
        }
      ]
    },
    {
      name: 'Abundance & Success',
      description: 'Crystals for prosperity, success, and manifestation',
      color: '#059669',
      crystals: [
        {
          name: 'Citrine',
          color: 'Yellow/Golden',
          chakra: 'Solar Plexus',
          element: 'Fire',
          zodiac: ['Aries', 'Gemini', 'Leo', 'Libra'],
          properties: ['Abundance', 'Success', 'Confidence', 'Manifestation'],
          healing: 'Attracts wealth and prosperity, boosts confidence, and manifests goals into reality.',
          uses: ['Place in cash register', 'Carry in wallet', 'Manifestation rituals', 'Confidence boost'],
          affirmation: 'I attract abundance and success flows to me easily and naturally',
          description: 'Known as the "Merchant\'s Stone," Citrine attracts wealth, success, and prosperity.'
        },
        {
          name: 'Pyrite',
          color: 'Gold/Brass',
          chakra: 'Solar Plexus',
          element: 'Earth/Fire',
          zodiac: ['Leo'],
          properties: ['Wealth', 'Confidence', 'Protection', 'Willpower'],
          healing: 'Attracts wealth and good luck, boosts confidence, and protects from negative energy.',
          uses: ['Display in office', 'Carry for confidence', 'Money magic', 'Business success'],
          affirmation: 'I am confident, successful, and worthy of abundant prosperity',
          description: 'Fool\'s Gold that attracts real wealth, Pyrite boosts confidence and manifests success.'
        },
        {
          name: 'Green Jade',
          color: 'Green',
          chakra: 'Heart',
          element: 'Earth',
          zodiac: ['Aries', 'Taurus', 'Gemini', 'Libra'],
          properties: ['Prosperity', 'Wisdom', 'Balance', 'Good Fortune'],
          healing: 'Brings good luck and fortune, promotes wisdom in financial decisions, and balances emotions.',
          uses: ['Business ventures', 'Wise decision making', 'Luck charm', 'Emotional balance'],
          affirmation: 'I make wise decisions and attract good fortune in all my endeavors',
          description: 'A stone of wisdom and prosperity, Jade brings good luck and balanced judgment.'
        }
      ]
    },
    {
      name: 'Healing & Wellness',
      description: 'Crystals for physical healing, energy cleansing, and wellness',
      color: '#0891B2',
      crystals: [
        {
          name: 'Amazonite',
          color: 'Blue-Green',
          chakra: 'Throat/Heart',
          element: 'Water',
          zodiac: ['Virgo'],
          properties: ['Communication', 'Truth', 'Courage', 'Soothing'],
          healing: 'Enhances communication, promotes speaking truth, and soothes emotional trauma.',
          uses: ['Improve communication', 'Truth speaking', 'Emotional healing', 'Courage building'],
          affirmation: 'I speak my truth with courage and communicate with clarity and love',
          description: 'The stone of courage and truth, Amazonite empowers authentic communication and emotional healing.'
        },
        {
          name: 'Fluorite',
          color: 'Various (Purple, Green, Clear)',
          chakra: 'Third Eye',
          element: 'Air',
          zodiac: ['Capricorn', 'Pisces'],
          properties: ['Mental Clarity', 'Focus', 'Learning', 'Protection'],
          healing: 'Enhances mental clarity, improves concentration, and protects against mental manipulation.',
          uses: ['Study and learning', 'Mental focus', 'Meditation', 'Computer work'],
          affirmation: 'My mind is clear, focused, and open to learning and wisdom',
          description: 'The "Genius Stone" that enhances mental abilities and promotes learning and concentration.'
        },
        {
          name: 'Selenite',
          color: 'White/Clear',
          chakra: 'Crown',
          element: 'Air',
          zodiac: ['Taurus'],
          properties: ['Cleansing', 'Charging', 'Angels', 'Peace'],
          healing: 'Cleanses and charges other crystals, connects to angelic realm, and brings peace and clarity.',
          uses: ['Cleanse other crystals', 'Meditation', 'Angel connection', 'Space clearing'],
          affirmation: 'I am connected to divine light and my energy is pure and cleansed',
          description: 'A powerful cleansing stone that never needs cleansing itself and charges other crystals.'
        }
      ]
    }
  ];

  const getActiveCategory = () => {
    return crystalCategories.find(cat => cat.name.toLowerCase().replace(/\s+/g, '-').replace('&', '').trim() === activeCategory) || crystalCategories[0];
  };

  const handleCrystalClick = (crystal: Crystal) => {
    setSelectedCrystal(crystal);
  };

  const closeCrystalModal = () => {
    setSelectedCrystal(null);
  };

  return (
    <div>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          color: 'var(--purple-lavender)',
          fontSize: '2rem',
          marginBottom: '0.5rem'
        }}>
          💎 Crystal Healing Guide
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Discover the healing power of crystals and gemstones for transformation, protection, and spiritual growth
        </p>
      </div>

      {/* Category Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
        {crystalCategories.map(category => {
          const categoryId = category.name.toLowerCase().replace(/\s+/g, '-').replace('&', '').trim();
          return (
            <button
              key={categoryId}
              onClick={() => setActiveCategory(categoryId)}
              style={{
                padding: '0.75rem 1.25rem',
                background: activeCategory === categoryId
                  ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)'
                  : 'rgba(26, 26, 29, 0.8)',
                color: 'var(--text-primary)',
                border: activeCategory === categoryId
                  ? '2px solid var(--purple-lavender)'
                  : '1px solid var(--purple-lavender)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {(() => {
            const category = getActiveCategory();
            return (
              <div>
                {/* Category Header */}
                <div style={{
                  background: 'rgba(26, 26, 29, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--purple-lavender)',
                  textAlign: 'center',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{
                    color: 'var(--purple-lavender)',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {category.name} Crystals
                  </h3>
                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.6'
                  }}>
                    {category.description}
                  </p>
                </div>

                {/* Crystal Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {category.crystals.map((crystal, index) => (
                    <motion.div
                      key={crystal.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleCrystalClick(crystal)}
                      style={{
                        background: 'rgba(26, 26, 29, 0.8)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--purple-lavender)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--purple-lavender), var(--purple-royal))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem'
                        }}>
                          💎
                        </div>
                        <div>
                          <h4 style={{
                            color: 'var(--purple-lavender)',
                            fontSize: '1.3rem',
                            marginBottom: '0.25rem'
                          }}>
                            {crystal.name}
                          </h4>
                          <div style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem'
                          }}>
                            {crystal.color} • {crystal.chakra} Chakra
                          </div>
                        </div>
                      </div>

                      <p style={{
                        color: 'var(--text-primary)',
                        lineHeight: '1.5',
                        marginBottom: '1rem'
                      }}>
                        {crystal.description}
                      </p>

                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}>
                        {crystal.properties.slice(0, 3).map(property => (
                          <span
                            key={property}
                            style={{
                              background: 'var(--purple-lavender)',
                              color: 'var(--bg-dark)',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.8rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {property}
                          </span>
                        ))}
                      </div>

                      <div style={{
                        color: 'var(--purple-lavender)',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        padding: '0.5rem',
                        background: 'rgba(139, 92, 246, 0.1)',
                        borderRadius: '8px'
                      }}>
                        "Click to explore healing properties & uses"
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })()}
        </motion.div>
      </AnimatePresence>

      {/* Crystal Detail Modal */}
      <AnimatePresence>
        {selectedCrystal && (
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
            onClick={closeCrystalModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 29, 0.95), rgba(139, 92, 246, 0.1))',
                borderRadius: '16px',
                border: '2px solid var(--purple-lavender)',
                padding: '2rem',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--purple-lavender), var(--purple-royal))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}>
                  💎
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    color: 'var(--purple-lavender)',
                    fontSize: '2rem',
                    marginBottom: '0.5rem'
                  }}>
                    {selectedCrystal.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    <span><strong>Color:</strong> {selectedCrystal.color}</span>
                    <span><strong>Chakra:</strong> {selectedCrystal.chakra}</span>
                    <span><strong>Element:</strong> {selectedCrystal.element}</span>
                  </div>
                </div>
                <button
                  onClick={closeCrystalModal}
                  style={{
                    background: 'rgba(139, 92, 246, 0.2)',
                    border: '1px solid var(--purple-lavender)',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '1.2rem',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Content Sections */}
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Description */}
                <div style={{
                  background: 'rgba(26, 26, 29, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--purple-lavender)'
                }}>
                  <h4 style={{
                    color: 'var(--purple-lavender)',
                    marginBottom: '1rem'
                  }}>
                    ✨ Crystal Overview
                  </h4>
                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.6'
                  }}>
                    {selectedCrystal.healing}
                  </p>
                </div>

                {/* Properties */}
                <div style={{
                  background: 'rgba(26, 26, 29, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--green-sage)'
                }}>
                  <h4 style={{
                    color: 'var(--green-sage)',
                    marginBottom: '1rem'
                  }}>
                    🌟 Healing Properties
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    {selectedCrystal.properties.map(property => (
                      <span
                        key={property}
                        style={{
                          background: 'var(--green-sage)',
                          color: 'var(--bg-dark)',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {property}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Uses */}
                <div style={{
                  background: 'rgba(26, 26, 29, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--gold-accent)'
                }}>
                  <h4 style={{
                    color: 'var(--gold-accent)',
                    marginBottom: '1rem'
                  }}>
                    🔮 How to Use
                  </h4>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    {selectedCrystal.uses.map(use => (
                      <div
                        key={use}
                        style={{
                          color: 'var(--text-primary)',
                          padding: '0.5rem',
                          background: 'rgba(218, 165, 32, 0.1)',
                          borderRadius: '8px',
                          borderLeft: '3px solid var(--gold-accent)'
                        }}
                      >
                        • {use}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Affirmation */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--purple-lavender)',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    color: 'var(--purple-lavender)',
                    marginBottom: '1rem'
                  }}>
                    💫 Crystal Affirmation
                  </h4>
                  <p style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    lineHeight: '1.6'
                  }}>
                    "{selectedCrystal.affirmation}"
                  </p>
                </div>

                {/* Zodiac & Element */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  <div style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--purple-royal)',
                    textAlign: 'center'
                  }}>
                    <h5 style={{
                      color: 'var(--purple-royal)',
                      marginBottom: '0.5rem'
                    }}>
                      ♈ Zodiac Signs
                    </h5>
                    <p style={{ color: 'var(--text-primary)' }}>
                      {selectedCrystal.zodiac.join(', ')}
                    </p>
                  </div>
                  <div style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--green-emerald)',
                    textAlign: 'center'
                  }}>
                    <h5 style={{
                      color: 'var(--green-emerald)',
                      marginBottom: '0.5rem'
                    }}>
                      🌍 Element
                    </h5>
                    <p style={{ color: 'var(--text-primary)' }}>
                      {selectedCrystal.element}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div style={{
                textAlign: 'center',
                marginTop: '2rem'
              }}>
                <button
                  onClick={closeCrystalModal}
                  style={{
                    background: 'linear-gradient(135deg, var(--purple-deep), var(--purple-royal))',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  ✨ Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CrystalGuide;