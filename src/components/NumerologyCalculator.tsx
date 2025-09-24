import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NumerologyResults {
  lifePathNumber: number;
  expressionNumber: number;
  soulUrgeNumber: number;
  personalityNumber: number;
  birthdayNumber: number;
}

interface NumberMeaning {
  number: number;
  title: string;
  meaning: string;
  traits: string[];
  careers: string[];
  challenges: string[];
}

const NumerologyCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [results, setResults] = useState<NumerologyResults | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'meanings'>('calculator');
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const numberMeanings: NumberMeaning[] = [
    {
      number: 1,
      title: "The Leader",
      meaning: "You are a natural born leader with strong independence and pioneering spirit. You have the drive to initiate projects and lead others toward success.",
      traits: ["Independent", "Ambitious", "Creative", "Strong-willed", "Pioneering"],
      careers: ["CEO/Executive", "Entrepreneur", "Inventor", "Military Leader", "Politician"],
      challenges: ["Can be domineering", "Impatient with others", "Tendency to be self-centered"]
    },
    {
      number: 2,
      title: "The Cooperator",
      meaning: "You are a natural diplomat and peacemaker. You excel at working with others and have a gift for seeing all sides of a situation.",
      traits: ["Diplomatic", "Cooperative", "Sensitive", "Supportive", "Patient"],
      careers: ["Counselor", "Mediator", "Teacher", "Social Worker", "Team Member"],
      challenges: ["Can be overly sensitive", "Tendency to be indecisive", "May sacrifice own needs"]
    },
    {
      number: 3,
      title: "The Creative Communicator",
      meaning: "You are naturally artistic and expressive. You have a gift for communication and bringing joy to others through your creativity.",
      traits: ["Creative", "Optimistic", "Expressive", "Social", "Inspiring"],
      careers: ["Artist", "Writer", "Performer", "Designer", "Public Speaker"],
      challenges: ["Can scatter energy", "Tendency to be superficial", "May avoid serious topics"]
    },
    {
      number: 4,
      title: "The Builder",
      meaning: "You are practical, reliable, and hardworking. You excel at creating stable foundations and turning dreams into reality through persistent effort.",
      traits: ["Practical", "Reliable", "Organized", "Hardworking", "Loyal"],
      careers: ["Engineer", "Architect", "Accountant", "Manager", "Craftsperson"],
      challenges: ["Can be too rigid", "Resistance to change", "May work too hard"]
    },
    {
      number: 5,
      title: "The Freedom Seeker",
      meaning: "You crave freedom, adventure, and variety. You are naturally curious and have a strong desire to experience all that life has to offer.",
      traits: ["Adventurous", "Freedom-loving", "Curious", "Versatile", "Progressive"],
      careers: ["Travel Writer", "Sales", "Journalist", "Event Planner", "Consultant"],
      challenges: ["Can be restless", "Difficulty with commitment", "May lack focus"]
    },
    {
      number: 6,
      title: "The Nurturer",
      meaning: "You are naturally caring and responsible. You have a strong desire to help others and create harmony in your environment.",
      traits: ["Nurturing", "Responsible", "Caring", "Family-oriented", "Healing"],
      careers: ["Healthcare", "Teaching", "Counseling", "Social Work", "Interior Design"],
      challenges: ["Can be overprotective", "Tendency to worry", "May neglect own needs"]
    },
    {
      number: 7,
      title: "The Seeker",
      meaning: "You are naturally introspective and analytical. You have a deep desire to understand the mysteries of life and possess strong intuitive abilities.",
      traits: ["Analytical", "Introspective", "Spiritual", "Intuitive", "Perfectionist"],
      careers: ["Researcher", "Scientist", "Philosopher", "Analyst", "Spiritual Teacher"],
      challenges: ["Can be too withdrawn", "Tendency to overthink", "May seem aloof"]
    },
    {
      number: 8,
      title: "The Achiever",
      meaning: "You have natural business acumen and the ability to achieve material success. You are ambitious and have strong organizational skills.",
      traits: ["Ambitious", "Authoritative", "Business-minded", "Organized", "Efficient"],
      careers: ["Business Executive", "Banker", "Real Estate", "Law", "Politics"],
      challenges: ["Can be materialistic", "Workaholic tendencies", "May seem cold"]
    },
    {
      number: 9,
      title: "The Humanitarian",
      meaning: "You have a strong desire to serve humanity and make the world a better place. You are compassionate, generous, and wise.",
      traits: ["Humanitarian", "Compassionate", "Generous", "Wise", "Artistic"],
      careers: ["Non-profit work", "Healing arts", "Teaching", "Counseling", "Environmental work"],
      challenges: ["Can be overly emotional", "Tendency to be impractical", "May sacrifice too much"]
    },
    {
      number: 11,
      title: "The Intuitive Illuminator",
      meaning: "You are highly intuitive and spiritually aware. You have the potential to inspire and enlighten others through your insights and vision.",
      traits: ["Intuitive", "Inspirational", "Spiritual", "Visionary", "Sensitive"],
      careers: ["Spiritual teacher", "Artist", "Healer", "Counselor", "Inventor"],
      challenges: ["Can be overly sensitive", "Prone to nervous energy", "May struggle with practical matters"]
    },
    {
      number: 22,
      title: "The Master Builder",
      meaning: "You have the potential to achieve great things and create lasting impact. You combine spiritual insights with practical abilities to manifest your visions.",
      traits: ["Visionary", "Practical", "Ambitious", "Inspirational", "Organized"],
      careers: ["Large-scale projects", "International business", "Architecture", "Politics", "Humanitarian work"],
      challenges: ["High pressure to succeed", "May feel overwhelmed", "Tendency to be demanding"]
    },
    {
      number: 33,
      title: "The Master Teacher",
      meaning: "You are here to uplift humanity through teaching, healing, and service. You have the potential to be a spiritual guide and beacon of light for others.",
      traits: ["Compassionate", "Healing", "Teaching", "Inspiring", "Selfless"],
      careers: ["Teaching", "Healing", "Ministry", "Counseling", "Humanitarian work"],
      challenges: ["Can sacrifice personal needs", "May become a martyr", "Tendency to take on too much"]
    }
  ];

  const calculateLifePathNumber = (dateStr: string): number => {
    const digits = dateStr.replace(/\D/g, '').split('').map(Number);
    let sum = digits.reduce((acc, digit) => acc + digit, 0);

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }

    return sum;
  };

  const getLetterValue = (letter: string): number => {
    const values: { [key: string]: number } = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };
    return values[letter.toUpperCase()] || 0;
  };

  const reduceNumber = (num: number): number => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }
    return num;
  };

  const calculateNameNumbers = (name: string) => {
    const cleanName = name.toUpperCase().replace(/[^A-Z\s]/g, '');
    const vowels = 'AEIOU';

    let expressionSum = 0;
    let soulUrgeSum = 0;
    let personalitySum = 0;

    for (const letter of cleanName) {
      if (letter === ' ') continue;
      const value = getLetterValue(letter);
      expressionSum += value;

      if (vowels.includes(letter)) {
        soulUrgeSum += value;
      } else {
        personalitySum += value;
      }
    }

    return {
      expression: reduceNumber(expressionSum),
      soulUrge: reduceNumber(soulUrgeSum),
      personality: reduceNumber(personalitySum)
    };
  };

  const calculateNumerology = () => {
    if (!birthDate || !fullName) return;

    const lifePathNumber = calculateLifePathNumber(birthDate);
    const nameNumbers = calculateNameNumbers(fullName);

    const birthDay = new Date(birthDate).getDate();
    const birthdayNumber = reduceNumber(birthDay);

    setResults({
      lifePathNumber,
      expressionNumber: nameNumbers.expression,
      soulUrgeNumber: nameNumbers.soulUrge,
      personalityNumber: nameNumbers.personality,
      birthdayNumber
    });
  };

  const getNumberMeaning = (num: number): NumberMeaning => {
    return numberMeanings.find(m => m.number === num) || numberMeanings[0];
  };

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNumber(null);
  };

  return (
    <div>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          color: 'var(--gold-accent)',
          fontSize: '2rem',
          marginBottom: '0.5rem'
        }}>
          🔢 Numerology Calculator
        </h2>
        <p style={{
          color: 'var(--purple-lavender)',
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          Discover the hidden meanings in your numbers and unlock insights about your personality, purpose, and potential
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '1rem'
      }}>
        <button
          onClick={() => setActiveTab('calculator')}
          style={{
            padding: '0.75rem 1.5rem',
            background: activeTab === 'calculator'
              ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)'
              : 'rgba(26, 26, 29, 0.8)',
            color: 'var(--text-primary)',
            border: activeTab === 'calculator'
              ? '2px solid var(--gold-accent)'
              : '1px solid var(--purple-lavender)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          ✨ Calculator
        </button>
        <button
          onClick={() => setActiveTab('meanings')}
          style={{
            padding: '0.75rem 1.5rem',
            background: activeTab === 'meanings'
              ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)'
              : 'rgba(26, 26, 29, 0.8)',
            color: 'var(--text-primary)',
            border: activeTab === 'meanings'
              ? '2px solid var(--gold-accent)'
              : '1px solid var(--purple-lavender)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          📚 Number Meanings
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'calculator' && (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Calculator Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: results ? '1fr 1fr' : '1fr',
              gap: '2rem',
              alignItems: 'start'
            }}>
              {/* Input Form */}
              <div style={{
                background: 'rgba(26, 26, 29, 0.8)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid var(--purple-lavender)'
              }}>
                <h3 style={{
                  color: 'var(--green-sage)',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  📝 Enter Your Information
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--purple-lavender)',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    Birth Date
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(10, 10, 11, 0.8)',
                      border: '1px solid var(--purple-lavender)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--purple-lavender)',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    Full Name (as on birth certificate)
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full birth name..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(10, 10, 11, 0.8)',
                      border: '1px solid var(--purple-lavender)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <button
                  onClick={calculateNumerology}
                  disabled={!birthDate || !fullName}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: (!birthDate || !fullName)
                      ? 'rgba(107, 70, 193, 0.3)'
                      : 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: (!birthDate || !fullName) ? 'not-allowed' : 'pointer',
                    boxShadow: (!birthDate || !fullName) ? 'none' : '0 4px 12px rgba(107, 70, 193, 0.3)'
                  }}
                >
                  ✨ Calculate My Numbers
                </button>
              </div>

              {/* Results */}
              {results && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(26, 26, 29, 0.95), rgba(107, 70, 193, 0.1))',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '2px solid var(--gold-accent)',
                    boxShadow: '0 8px 25px rgba(107, 70, 193, 0.3)'
                  }}
                >
                  <h3 style={{
                    color: 'var(--gold-accent)',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                  }}>
                    🌟 Your Numerology Profile
                  </h3>
                  <p style={{
                    color: 'var(--purple-lavender)',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem'
                  }}>
                    💡 Click any number to see detailed meaning
                  </p>

                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      { label: 'Life Path Number', value: results.lifePathNumber, desc: 'Your life purpose and path' },
                      { label: 'Expression Number', value: results.expressionNumber, desc: 'Your talents and abilities' },
                      { label: 'Soul Urge Number', value: results.soulUrgeNumber, desc: 'Your inner desires' },
                      { label: 'Personality Number', value: results.personalityNumber, desc: 'How others see you' },
                      { label: 'Birthday Number', value: results.birthdayNumber, desc: 'Your special gifts' }
                    ].map((item, index) => (
                      <div
                        key={index}
                        style={{
                          background: 'rgba(26, 26, 29, 0.8)',
                          padding: '1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--purple-lavender)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <div style={{
                            color: 'var(--green-sage)',
                            fontWeight: 'bold',
                            marginBottom: '0.25rem'
                          }}>
                            {item.label}
                          </div>
                          <div style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem'
                          }}>
                            {item.desc}
                          </div>
                        </div>
                        <div
                          onClick={() => handleNumberClick(item.value)}
                          style={{
                            background: 'linear-gradient(135deg, var(--purple-deep), var(--purple-royal))',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '50%',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            minWidth: '3rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(107, 70, 193, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(107, 70, 193, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(107, 70, 193, 0.3)';
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(46, 125, 50, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid var(--green-sage)'
                  }}>
                    <h4 style={{
                      color: 'var(--green-sage)',
                      marginBottom: '0.5rem'
                    }}>
                      Your Life Path ({results.lifePathNumber}): {getNumberMeaning(results.lifePathNumber).title}
                    </h4>
                    <p style={{
                      color: 'var(--text-primary)',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}>
                      {getNumberMeaning(results.lifePathNumber).meaning}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'meanings' && (
          <motion.div
            key="meanings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Number Meanings Section */}
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
                <h3 style={{
                  color: 'var(--green-sage)',
                  marginBottom: '1rem'
                }}>
                  📖 Understanding Numerology Numbers
                </h3>
                <p style={{
                  color: 'var(--text-primary)',
                  lineHeight: '1.6'
                }}>
                  Each number carries unique energetic vibrations and meanings. Your personal numbers reveal different aspects of your personality,
                  life purpose, and spiritual path. Master numbers (11, 22, 33) carry heightened spiritual significance and potential.
                </p>
              </div>

              {numberMeanings.map((meaning, index) => (
                <motion.div
                  key={meaning.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--purple-lavender)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--purple-deep), var(--purple-royal))',
                      color: 'white',
                      padding: '0.75rem',
                      borderRadius: '50%',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      minWidth: '3.5rem',
                      textAlign: 'center'
                    }}>
                      {meaning.number}
                    </div>
                    <div>
                      <h4 style={{
                        color: 'var(--gold-accent)',
                        fontSize: '1.3rem',
                        marginBottom: '0.25rem'
                      }}>
                        {meaning.title}
                      </h4>
                    </div>
                  </div>

                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {meaning.meaning}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    <div>
                      <h5 style={{
                        color: 'var(--green-sage)',
                        marginBottom: '0.5rem'
                      }}>
                        ✨ Key Traits
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {meaning.traits.map(trait => (
                          <span
                            key={trait}
                            style={{
                              background: 'var(--green-sage)',
                              color: 'var(--bg-dark)',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '12px',
                              fontSize: '0.8rem'
                            }}
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 style={{
                        color: 'var(--purple-lavender)',
                        marginBottom: '0.5rem'
                      }}>
                        💼 Ideal Careers
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {meaning.careers.map(career => (
                          <span
                            key={career}
                            style={{
                              background: 'var(--purple-lavender)',
                              color: 'var(--bg-dark)',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '12px',
                              fontSize: '0.8rem'
                            }}
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 style={{
                        color: '#F59E0B',
                        marginBottom: '0.5rem'
                      }}>
                        ⚡ Challenges
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {meaning.challenges.map(challenge => (
                          <span
                            key={challenge}
                            style={{
                              background: '#F59E0B',
                              color: 'var(--bg-dark)',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '12px',
                              fontSize: '0.8rem'
                            }}
                          >
                            {challenge}
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
      </AnimatePresence>

      {/* Number Details Modal */}
      <AnimatePresence>
        {showModal && selectedNumber !== null && (
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
            onClick={closeModal}
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
                maxWidth: '600px',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)'
              }}
            >
              {(() => {
                const meaning = getNumberMeaning(selectedNumber);
                return (
                  <div>
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, var(--purple-deep), var(--purple-royal))',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '50%',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        minWidth: '4rem',
                        textAlign: 'center'
                      }}>
                        {meaning.number}
                      </div>
                      <div>
                        <h3 style={{
                          color: 'var(--gold-accent)',
                          fontSize: '1.8rem',
                          marginBottom: '0.25rem'
                        }}>
                          {meaning.title}
                        </h3>
                        <p style={{
                          color: 'var(--purple-lavender)',
                          fontSize: '1rem'
                        }}>
                          Number {meaning.number} Personality
                        </p>
                      </div>
                      <button
                        onClick={closeModal}
                        style={{
                          marginLeft: 'auto',
                          background: 'rgba(107, 70, 193, 0.2)',
                          border: '1px solid var(--purple-lavender)',
                          borderRadius: '50%',
                          width: '2.5rem',
                          height: '2.5rem',
                          color: 'var(--text-primary)',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Meaning */}
                    <div style={{
                      marginBottom: '2rem',
                      padding: '1.5rem',
                      background: 'rgba(26, 26, 29, 0.8)',
                      borderRadius: '12px',
                      border: '1px solid var(--green-sage)'
                    }}>
                      <h4 style={{
                        color: 'var(--green-sage)',
                        marginBottom: '1rem',
                        fontSize: '1.2rem'
                      }}>
                        🌟 Core Meaning
                      </h4>
                      <p style={{
                        color: 'var(--text-primary)',
                        lineHeight: '1.6',
                        fontSize: '1rem'
                      }}>
                        {meaning.meaning}
                      </p>
                    </div>

                    {/* Detailed Breakdown */}
                    <div style={{
                      display: 'grid',
                      gap: '1.5rem'
                    }}>
                      <div style={{
                        background: 'rgba(26, 26, 29, 0.8)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--green-sage)'
                      }}>
                        <h5 style={{
                          color: 'var(--green-sage)',
                          marginBottom: '1rem',
                          fontSize: '1.1rem'
                        }}>
                          ✨ Key Personality Traits
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                          {meaning.traits.map(trait => (
                            <span
                              key={trait}
                              style={{
                                background: 'var(--green-sage)',
                                color: 'var(--bg-dark)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                              }}
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{
                        background: 'rgba(26, 26, 29, 0.8)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--purple-lavender)'
                      }}>
                        <h5 style={{
                          color: 'var(--purple-lavender)',
                          marginBottom: '1rem',
                          fontSize: '1.1rem'
                        }}>
                          💼 Ideal Career Paths
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                          {meaning.careers.map(career => (
                            <span
                              key={career}
                              style={{
                                background: 'var(--purple-lavender)',
                                color: 'var(--bg-dark)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                              }}
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{
                        background: 'rgba(26, 26, 29, 0.8)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid #F59E0B'
                      }}>
                        <h5 style={{
                          color: '#F59E0B',
                          marginBottom: '1rem',
                          fontSize: '1.1rem'
                        }}>
                          ⚡ Growth Challenges
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                          {meaning.challenges.map(challenge => (
                            <span
                              key={challenge}
                              style={{
                                background: '#F59E0B',
                                color: 'var(--bg-dark)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                              }}
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      textAlign: 'center',
                      marginTop: '2rem'
                    }}>
                      <button
                        onClick={closeModal}
                        style={{
                          background: 'linear-gradient(135deg, var(--purple-deep), var(--purple-royal))',
                          color: 'white',
                          border: 'none',
                          padding: '1rem 2rem',
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
                        ✨ Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NumerologyCalculator;