import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BirthChart } from '../types/astrology';
import { GeocodingService } from '../services/geocoding';

interface BirthChartFormProps {
  onChartGenerated: (chart: BirthChart) => void;
}

const BirthChartForm: React.FC<BirthChartFormProps> = ({ onChartGenerated }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthHour: '12',
    birthMinute: '00',
    birthAmPm: 'AM',
    birthPlace: '',
    city: '',
    state: '',
    country: 'United States'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };

      // Update birthTime when any time component changes
      if (field === 'birthHour' || field === 'birthMinute' || field === 'birthAmPm') {
        const hour = field === 'birthHour' ? value : prev.birthHour;
        const minute = field === 'birthMinute' ? value : prev.birthMinute;
        const amPm = field === 'birthAmPm' ? value : prev.birthAmPm;

        // Convert to 24-hour format for birthTime
        let hour24 = parseInt(hour);
        if (amPm === 'PM' && hour24 !== 12) {
          hour24 += 12;
        } else if (amPm === 'AM' && hour24 === 12) {
          hour24 = 0;
        }

        newData.birthTime = `${hour24.toString().padStart(2, '0')}:${minute}`;
      }

      return newData;
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let locationQuery = '';
      if (formData.birthPlace) {
        locationQuery = formData.birthPlace;
        if (formData.city) locationQuery += `, ${formData.city}`;
        if (formData.state) locationQuery += `, ${formData.state}`;
        locationQuery += `, ${formData.country}`;
      } else if (formData.city) {
        locationQuery = `${formData.city}, ${formData.state}, ${formData.country}`;
      } else {
        throw new Error('Please provide either a birth place or city/state');
      }

      const geoLocation = await GeocodingService.geocodeWithFallback(
        locationQuery,
        formData.city,
        formData.state,
        formData.country
      );

      if (!geoLocation) {
        throw new Error('Could not find location. Please try a different format.');
      }

      const mockChart: BirthChart = {
        id: Date.now().toString(),
        name: formData.name || 'Anonymous',
        birthDate: new Date(formData.birthDate),
        birthTime: formData.birthTime,
        birthPlace: {
          city: formData.city || 'Unknown',
          country: formData.country,
          latitude: geoLocation.latitude,
          longitude: geoLocation.longitude,
          timezone: geoLocation.timezone
        },
        houses: [],
        planets: [
          {
            planet: 'sun',
            sign: 'capricorn',
            degree: 3,
            house: 10,
            isRetrograde: false,
            interpretation: 'Strong leadership qualities and ambition'
          },
          {
            planet: 'moon',
            sign: 'pisces',
            degree: 17,
            house: 12,
            isRetrograde: false,
            interpretation: 'Deep intuition and emotional sensitivity'
          }
        ],
        aspects: [],
        nodes: {
          north: { sign: 'gemini', degree: 15, minute: 23 },
          south: { sign: 'sagittarius', degree: 15, minute: 23 }
        },
        chiron: { sign: 'aries', degree: 8, minute: 45 }
      };

      onChartGenerated(mockChart);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
            Name (Optional)
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'rgba(26, 26, 29, 0.8)',
              border: '1px solid var(--purple-lavender)',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              fontSize: '1rem'
            }}
            placeholder="Enter your name"
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
              Birth Date *
            </label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(26, 26, 29, 0.8)',
                border: '1px solid var(--purple-lavender)',
                borderRadius: '6px',
                color: 'var(--text-primary)',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
              Birth Time
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {/* Hour Dropdown */}
              <select
                value={formData.birthHour}
                onChange={(e) => handleInputChange('birthHour', e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  background: 'rgba(26, 26, 29, 0.8)',
                  border: '1px solid var(--purple-lavender)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              >
                {[...Array(12)].map((_, i) => {
                  const hour = i + 1;
                  return (
                    <option key={hour} value={hour.toString()}>
                      {hour}
                    </option>
                  );
                })}
              </select>

              {/* Minute Dropdown */}
              <select
                value={formData.birthMinute}
                onChange={(e) => handleInputChange('birthMinute', e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  background: 'rgba(26, 26, 29, 0.8)',
                  border: '1px solid var(--purple-lavender)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              >
                {[...Array(60)].map((_, i) => {
                  const minute = i.toString().padStart(2, '0');
                  return (
                    <option key={minute} value={minute}>
                      {minute}
                    </option>
                  );
                })}
              </select>

              {/* AM/PM Dropdown */}
              <select
                value={formData.birthAmPm}
                onChange={(e) => handleInputChange('birthAmPm', e.target.value)}
                style={{
                  flex: '0 0 80px',
                  padding: '0.75rem',
                  background: 'rgba(26, 26, 29, 0.8)',
                  border: '1px solid var(--purple-lavender)',
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
            City *
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'rgba(26, 26, 29, 0.8)',
              border: '1px solid var(--purple-lavender)',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              fontSize: '1rem'
            }}
            placeholder="City"
          />
        </div>

        {error && (
          <div style={{
            color: '#EF4444',
            background: 'rgba(239, 68, 68, 0.1)',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid rgba(239, 68, 68, 0.3)'
          }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="glow-button"
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Generating Chart...' : 'Generate Birth Chart'}
        </button>
      </form>
    </motion.div>
  );
};

export default BirthChartForm;