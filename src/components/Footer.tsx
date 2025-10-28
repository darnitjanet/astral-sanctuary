import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(13, 13, 15, 0.95)',
      borderTop: '1px solid var(--purple-lavender)',
      padding: '2rem 1rem',
      marginTop: '4rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              color: 'var(--gold-accent)',
              marginBottom: '1rem',
              fontSize: '1.2rem'
            }}>
              Astral Sanctuary
            </h3>
            <p style={{
              color: 'var(--purple-lavender)',
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Your sacred space for mystical exploration, tarot wisdom, and cosmic guidance.
              Discover the magic within and connect with the universe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              color: 'var(--gold-accent)',
              marginBottom: '1rem',
              fontSize: '1.2rem'
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/" style={{
                  color: 'var(--purple-lavender)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--purple-lavender)'}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/tarot" style={{
                  color: 'var(--purple-lavender)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--purple-lavender)'}
                >
                  Tarot Reading
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/birth-chart" style={{
                  color: 'var(--purple-lavender)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--purple-lavender)'}
                >
                  Birth Chart
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/blog" style={{
                  color: 'var(--purple-lavender)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--purple-lavender)'}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{
              color: 'var(--gold-accent)',
              marginBottom: '1rem',
              fontSize: '1.2rem'
            }}>
              Legal
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/privacy-policy" style={{
                  color: 'var(--purple-lavender)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--purple-lavender)'}
                >
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/terms-of-service" style={{
                  color: 'var(--purple-lavender)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--purple-lavender)'}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(147, 112, 219, 0.3)',
          paddingTop: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{
            color: 'var(--purple-lavender)',
            fontSize: '0.8rem',
            textAlign: 'center',
            marginBottom: '1rem',
            opacity: 0.8
          }}>
            ⚠️ For Entertainment Purposes Only - All content including tarot readings, birth charts, and horoscopes
            are intended for entertainment and educational purposes only. Not a substitute for professional advice.
          </p>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(147, 112, 219, 0.3)'
        }}>
          <p style={{
            color: 'var(--purple-lavender)',
            fontSize: '0.85rem',
            margin: 0
          }}>
            © {currentYear} Astral Sanctuary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
