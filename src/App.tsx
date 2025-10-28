import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './styles/components.css';

import HomePage from './pages/HomePage';
import TarotPage from './pages/TarotPage';
import BirthChartPage from './pages/BirthChartPage';
import DailyCosmosPage from './pages/DailyCosmosPage';
import JournalPage from './pages/JournalPage';
import LearnPage from './pages/LearnPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AdminPanel from './components/AdminPanel';
import MoonPhaseWidget from './components/MoonPhaseWidget';
import PlanetaryTicker from './components/PlanetaryTicker';
import ParticleBackground from './components/ParticleBackground';
import AdsterraAd from './components/AdsterraAds';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
        <ParticleBackground />
        <div className="mystical-bg" />

        <nav className="navigation">
          <div className="nav-container">
            <NavLink to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
              Astral Sanctuary
            </NavLink>
            <ul className="nav-links">
              <li>
                <NavLink to="/tarot" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Tarot
                </NavLink>
              </li>
              <li>
                <NavLink to="/birth-chart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Birth Chart
                </NavLink>
              </li>
              <li>
                <NavLink to="/daily-cosmos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Daily Cosmos
                </NavLink>
              </li>
              <li>
                <NavLink to="/journal" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Dream Journal
                </NavLink>
              </li>
              <li>
                <NavLink to="/learn" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Learn
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <MoonPhaseWidget />

        {/* Top Banner Ad - 728x90 */}
        <div style={{
          position: 'sticky',
          top: '70px',
          zIndex: 900,
          background: 'rgba(13, 13, 15, 0.95)',
          padding: '10px 0',
          borderBottom: '1px solid var(--purple-lavender)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <AdsterraAd type="banner728x90" style={{ margin: 0, background: 'transparent', border: 'none' }} />
        </div>


        {/* Main Content - Normal layout */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tarot" element={<TarotPage />} />
              <Route path="/birth-chart" element={<BirthChartPage />} />
              <Route path="/daily-cosmos" element={<DailyCosmosPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </AnimatePresence>

          {/* Bottom Ad - Single horizontal ad */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
            marginBottom: '2rem'
          }}>
            {/* Horizontal 4x1 ad */}
            <AdsterraAd type="inPagePush" style={{ margin: 0 }} />
          </div>
        </div>

        <Footer />
        <PlanetaryTicker />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
