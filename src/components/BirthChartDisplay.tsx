import React from 'react';
import { motion } from 'framer-motion';
import { BirthChart } from '../types/astrology';

interface BirthChartDisplayProps {
  chart: BirthChart;
}

const BirthChartDisplay: React.FC<BirthChartDisplayProps> = ({ chart }) => {
  const planetSymbols: { [key: string]: string } = {
    sun: '☉',
    moon: '☽',
    mercury: '☿',
    venus: '♀',
    mars: '♂',
    jupiter: '♃',
    saturn: '♄',
    uranus: '♅',
    neptune: '♆',
    pluto: '♇'
  };

  const signSymbols: { [key: string]: string } = {
    aries: '♈',
    taurus: '♉',
    gemini: '♊',
    cancer: '♋',
    leo: '♌',
    virgo: '♍',
    libra: '♎',
    scorpio: '♏',
    sagittarius: '♐',
    capricorn: '♑',
    aquarius: '♒',
    pisces: '♓'
  };

  const getSignInterpretation = (sign: string) => {
    const interpretations: { [key: string]: string } = {
      aries: "Dynamic, pioneering, and energetic. You lead with courage and enthusiasm, always ready to start new adventures and take on challenges head-first.",
      taurus: "Stable, practical, and sensual. You value security, beauty, and the finer things in life, with a strong connection to nature and material comfort.",
      gemini: "Curious, communicative, and adaptable. You thrive on mental stimulation, variety, and connection, with a natural talent for learning and sharing information.",
      cancer: "Nurturing, intuitive, and emotionally deep. You value home, family, and emotional security, with strong protective instincts and psychic sensitivity.",
      leo: "Creative, generous, and charismatic. You shine naturally and inspire others, with a need for recognition and a love of drama and self-expression.",
      virgo: "Analytical, helpful, and perfectionist. You excel at organization and service, with keen attention to detail and a desire to improve everything around you.",
      libra: "Harmonious, diplomatic, and aesthetic. You seek balance and beauty in all things, with natural charm and a strong sense of justice and fairness.",
      scorpio: "Intense, transformative, and mysterious. You dive deep into life's mysteries, with powerful intuition and the ability to regenerate through crisis.",
      sagittarius: "Adventurous, philosophical, and optimistic. You seek truth and meaning through exploration, with a love of freedom and higher learning.",
      capricorn: "Ambitious, disciplined, and practical. You build lasting structures through patience and hard work, with natural leadership and business acumen.",
      aquarius: "Innovative, humanitarian, and independent. You think outside the box and work for collective progress, with strong ideals and unique perspectives.",
      pisces: "Compassionate, intuitive, and artistic. You feel deeply and connect with universal consciousness, with natural healing abilities and creative gifts."
    };
    return interpretations[sign] || "A unique cosmic signature awaits interpretation.";
  };

  const getPlanetInterpretation = (planet: string, sign: string, house: number) => {
    const base = {
      sun: "Your core self, life purpose, and creative expression",
      moon: "Your emotional nature, instincts, and subconscious patterns",
      mercury: "Your communication style, thinking patterns, and learning approach",
      venus: "Your love style, values, and aesthetic preferences",
      mars: "Your energy, drive, and how you take action",
      jupiter: "Your expansion, luck, and philosophical outlook",
      saturn: "Your discipline, lessons, and areas of mastery",
      uranus: "Your innovation, rebellion, and unique gifts",
      neptune: "Your spirituality, dreams, and connection to the divine",
      pluto: "Your transformation, power, and regenerative abilities"
    };

    return base[planet as keyof typeof base] || "A significant planetary influence";
  };

  // Get the sun sign for prominent display
  const sunPlanet = chart.planets.find(p => p.planet === 'sun');
  const sunSign = sunPlanet?.sign || 'unknown';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{
        background: 'rgba(26, 26, 29, 0.9)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--purple-lavender)',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'var(--green-sage)', marginBottom: '0.5rem' }}>
          {chart.name}'s Birth Chart
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          <div><strong>Born:</strong> {chart.birthDate.toLocaleDateString()}</div>
          <div><strong>Time:</strong> {chart.birthTime || 'Unknown'}</div>
          <div><strong>Location:</strong> {chart.birthPlace.city}, {chart.birthPlace.country}</div>
          <div><strong>Coordinates:</strong> {chart.birthPlace.latitude.toFixed(2)}°, {chart.birthPlace.longitude.toFixed(2)}°</div>
        </div>
      </div>

      {/* Prominent Star Sign Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, var(--purple-deep) 0%, var(--green-forest) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          border: '2px solid var(--gold-accent)',
          marginBottom: '2rem',
          textAlign: 'center',
          boxShadow: 'var(--glow-purple)'
        }}
      >
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          {signSymbols[sunSign]}
        </div>
        <h2 style={{
          color: 'var(--gold-accent)',
          fontSize: '2rem',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          {sunSign.charAt(0).toUpperCase() + sunSign.slice(1)}
        </h2>
        <div style={{
          color: 'var(--text-primary)',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto',
          fontStyle: 'italic'
        }}>
          {getSignInterpretation(sunSign)}
        </div>
        <div style={{
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: 'var(--gold-accent)',
          opacity: 0.8
        }}>
          Your Sun Sign - The Core of Your Being
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'rgba(26, 26, 29, 0.8)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--green-sage)'
          }}
        >
          <h3 style={{ color: 'var(--green-sage)', marginBottom: '1rem' }}>Planetary Positions</h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {chart.planets.map(planet => (
              <div
                key={planet.planet}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem',
                  background: 'rgba(107, 70, 193, 0.1)',
                  borderRadius: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{planetSymbols[planet.planet]}</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                    {planet.planet.charAt(0).toUpperCase() + planet.planet.slice(1)}
                  </span>
                  {planet.isRetrograde && (
                    <span style={{ color: 'var(--gold-accent)', fontSize: '0.8rem' }}>℞</span>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'var(--purple-lavender)' }}>
                    {signSymbols[planet.sign]} {planet.sign.charAt(0).toUpperCase() + planet.sign.slice(1)} {planet.degree}°
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    House {planet.house}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'rgba(26, 26, 29, 0.8)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--purple-lavender)'
          }}
        >
          <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '1rem' }}>Lunar Nodes & Chiron</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '6px',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <h4 style={{ color: 'var(--green-sage)', margin: '0 0 0.5rem 0' }}>North Node (Life Purpose)</h4>
              <div style={{ color: 'var(--text-primary)' }}>
                {signSymbols[chart.nodes.north.sign]} {chart.nodes.north.sign.charAt(0).toUpperCase() + chart.nodes.north.sign.slice(1)} {chart.nodes.north.degree}°{chart.nodes.north.minute}'
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                Your soul's growth direction and life lessons to embrace.
              </p>
            </div>

            <div style={{
              padding: '1rem',
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: '6px',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              <h4 style={{ color: 'var(--gold-accent)', margin: '0 0 0.5rem 0' }}>Chiron (The Wounded Healer)</h4>
              <div style={{ color: 'var(--text-primary)' }}>
                {signSymbols[chart.chiron.sign]} {chart.chiron.sign.charAt(0).toUpperCase() + chart.chiron.sign.slice(1)} {chart.chiron.degree}°{chart.chiron.minute}'
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                Areas where you can heal others through your own healing journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BirthChartDisplay;