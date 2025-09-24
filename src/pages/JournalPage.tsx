import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import JournalEntry from '../components/JournalEntry';
import DreamLogger from '../components/DreamLogger';

interface Journal {
  id: string;
  date: Date;
  type: 'dream';
  title: string;
  content: string;
  tags: string[];
  moonPhase?: string;
  dreamSymbols?: string[];
  dreamMood?: string;
  lucidLevel?: number;
}

const JournalPage: React.FC = () => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [showNewEntry, setShowNewEntry] = useState(false);

  useEffect(() => {
    const savedJournals = JSON.parse(localStorage.getItem('mysticDreamJournals') || '[]');
    setJournals(savedJournals.map((j: any) => ({ ...j, date: new Date(j.date) })));
  }, []);

  const handleNewJournal = (entry: {
    type: 'reflection' | 'dream' | 'reading';
    title: string;
    content: string;
    tags: string[];
    moonPhase?: string;
    astrologyNotes?: string;
  }) => {
    const newJournal: Journal = {
      id: Date.now().toString(),
      date: new Date(),
      type: 'dream',
      title: entry.title,
      content: entry.content,
      tags: entry.tags,
      moonPhase: entry.moonPhase,
      dreamSymbols: [],
      dreamMood: '',
      lucidLevel: 0
    };

    const updatedJournals = [newJournal, ...journals];
    setJournals(updatedJournals);
    localStorage.setItem('mysticDreamJournals', JSON.stringify(updatedJournals));
    setShowNewEntry(false);
  };

  const handleDeleteJournal = (id: string) => {
    const updatedJournals = journals.filter(j => j.id !== id);
    setJournals(updatedJournals);
    localStorage.setItem('mysticDreamJournals', JSON.stringify(updatedJournals));
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Dream Journal</h1>
          <p className="page-subtitle">Decode messages from your subconscious</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <button
              className="glow-button"
              onClick={() => setShowNewEntry(!showNewEntry)}
              style={{
                background: 'linear-gradient(135deg, var(--green-forest) 0%, var(--green-emerald) 100%)'
              }}
            >
              {showNewEntry ? 'Cancel' : '+ New Dream Entry'}
            </button>
          </div>

          {showNewEntry && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'rgba(26, 26, 29, 0.9)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid var(--green-sage)',
                marginBottom: '2rem'
              }}
            >
              <JournalEntry
                type="dream"
                onSave={handleNewJournal}
                onCancel={() => setShowNewEntry(false)}
              />
            </motion.div>
          )}
        </div>

        <DreamLogger />

        <div style={{
          display: 'grid',
          gap: '1.5rem'
        }}>
          {journals.map(journal => (
              <motion.div
                key={journal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(26, 26, 29, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--purple-lavender)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{ color: 'var(--green-sage)', margin: '0 0 0.5rem 0' }}>
                      {journal.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <span>{journal.date.toLocaleDateString()}</span>
                      <span>{journal.type}</span>
                      {journal.moonPhase && <span>🌙 {journal.moonPhase}</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteJournal(journal.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      fontSize: '1.2rem'
                    }}
                  >
                    ×
                  </button>
                </div>

                <p style={{
                  color: 'var(--text-primary)',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {journal.content}
                </p>

                {journal.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {journal.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          background: 'var(--purple-lavender)',
                          color: 'var(--bg-dark)',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
        </div>

        {journals.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'var(--text-secondary)'
          }}>
            <p>No entries yet. Start your mystical journey by creating your first entry!</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default JournalPage;