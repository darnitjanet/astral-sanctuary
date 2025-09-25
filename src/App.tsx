import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import './styles/components.css';

import HomePage from './pages/HomePage';
import TarotPage from './pages/TarotPage';
import BirthChartPage from './pages/BirthChartPage';
import DailyCosmosPage from './pages/DailyCosmosPage';
import JournalPage from './pages/JournalPage';
import LearnPage from './pages/LearnPage';
import MoonPhaseWidget from './components/MoonPhaseWidget';
import PlanetaryTicker from './components/PlanetaryTicker';
import ParticleBackground from './components/ParticleBackground';
import AdsterraAd from './components/AdsterraAds';

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

        <div style={{
          display: 'flex',
          maxWidth: '1600px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Left Sidebar Ad - 300x250 */}
          <div style={{
            position: 'sticky',
            top: '180px',
            height: 'fit-content',
            width: '320px',
            padding: '10px'
          }} className="sidebar-ad-left">
            <AdsterraAd type="banner300x250" style={{ margin: 0 }} />
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, minHeight: 'calc(100vh - 200px)' }}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tarot" element={<TarotPage />} />
                <Route path="/birth-chart" element={<BirthChartPage />} />
                <Route path="/daily-cosmos" element={<DailyCosmosPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/learn" element={<LearnPage />} />
              </Routes>
            </AnimatePresence>
          </div>

          {/* Right Sidebar Ad - 300x250 */}
          <div style={{
            position: 'sticky',
            top: '180px',
            height: 'fit-content',
            width: '320px',
            padding: '10px'
          }} className="sidebar-ad-right">
            <AdsterraAd type="nativeBanner" style={{ margin: 0 }} />
            <div style={{ marginTop: '20px' }}>
              <AdsterraAd type="banner300x250" style={{ margin: 0 }} />
            </div>
          </div>
        </div>

        <PlanetaryTicker />
      </div>
    </Router>
  );
}

export default App;
