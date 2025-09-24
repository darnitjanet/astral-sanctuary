import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface JournalEntryProps {
  type: 'reflection' | 'dream' | 'reading';
  onSave: (entry: {
    type: 'reflection' | 'dream' | 'reading';
    title: string;
    content: string;
    tags: string[];
    moonPhase?: string;
    astrologyNotes?: string;
  }) => void;
  onCancel: () => void;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ type, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [moonPhase] = useState('Waxing Crescent');

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onSave({
      type,
      title: title.trim(),
      content: content.trim(),
      tags,
      moonPhase
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ display: 'grid', gap: '1.5rem' }}
    >
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
          Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(10, 10, 11, 0.8)',
            border: '1px solid var(--purple-lavender)',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            fontSize: '1rem'
          }}
          placeholder="Enter title..."
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--purple-lavender)' }}>
          Content *
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={8}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(10, 10, 11, 0.8)',
            border: '1px solid var(--purple-lavender)',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            resize: 'vertical',
            lineHeight: '1.6'
          }}
          placeholder="Write your entry here..."
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            background: 'transparent',
            color: 'var(--text-secondary)',
            border: '1px solid var(--text-secondary)',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="glow-button"
          disabled={!title.trim() || !content.trim()}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            opacity: (!title.trim() || !content.trim()) ? 0.5 : 1
          }}
        >
          Save Entry
        </button>
      </div>
    </motion.form>
  );
};

export default JournalEntry;