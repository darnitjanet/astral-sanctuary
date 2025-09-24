import React, { useState, useEffect } from 'react';
import { TarotCard, DeckStyle } from '../types/tarot';

interface CardImageProps {
  card: TarotCard;
  deckStyle: DeckStyle;
  isReversed?: boolean;
  isBack?: boolean;
}

const getImageFileName = (cardName: string): string => {
  // Convert card names to match image file names
  const nameMap: { [key: string]: string } = {
    // Major Arcana
    'The Fool': 'Fool',
    'The Magician': 'Magician',
    'The High Priestess': 'HighPriestess',
    'The Empress': 'Empress',
    'The Emperor': 'Emperor',
    'The Hierophant': 'Hierophant',
    'The Lovers': 'Lovers',
    'The Chariot': 'Chariot',
    'Strength': 'Strength',
    'The Hermit': 'Hermit',
    'Wheel of Fortune': 'WheelOfFortune',
    'Justice': 'Justice',
    'The Hanged Man': 'HangedMan',
    'Death': 'Death',
    'Temperance': 'Temperance',
    'The Devil': 'Devil',
    'The Tower': 'Tower',
    'The Star': 'Star',
    'The Moon': 'Moon',
    'The Sun': 'Sun',
    'Judgement': 'Judgement',
    'The World': 'World'
  };

  // If it's in the explicit mapping, use that
  if (nameMap[cardName]) {
    return nameMap[cardName];
  }

  // For minor arcana, handle the capitalized "Of" convention
  // Examples: "King of Swords" -> "KingOfSwords", "10 of Pentacles" -> "10OfPentacles"
  return cardName
    .replace(/\s+of\s+/gi, 'Of') // "of" or "Of" -> "Of" (case insensitive)
    .replace(/\s+/g, '')         // Remove all other spaces
    .replace(/^The/, '');        // Remove "The" prefix if present
};

// List of cards that have images available
const hasImageAvailable = (cardName: string): boolean => {
  // Major Arcana - we know these exist
  const majorArcana = [
    'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
    'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit',
    'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
    'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'
  ];

  // For now, try to load all cards - we'll gracefully handle missing ones
  return true;
};

const CardImageGenerator: React.FC<CardImageProps> = ({
  card,
  deckStyle,
  isReversed = false,
  isBack = false
}) => {
  const [hasImage, setHasImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!isBack && hasImageAvailable(card.name)) {
      const fileName = getImageFileName(card.name);

      // Try both extensions - first .png, then .PNG if that fails
      const imagePath = `/cards/rider-waite-smith/${fileName}.png`;

      console.log(`🎴 LOADING: "${card.name}" -> "${fileName}.png"`);

      // Reset states
      setHasImage(false);
      setImageError(false);

      // Test if image exists
      const img = new Image();
      img.onload = () => {
        console.log(`✅ SUCCESS: ${fileName}.png loaded`);
        setHasImage(true);
        setImageError(false);
      };
      img.onerror = (error) => {
        console.error(`❌ FAILED: ${fileName}.png could not load`, error);
        console.error('Full error details:', error);
        console.error('Image src was:', img.src);
        setHasImage(false);
        setImageError(true);
      };

      console.log('Setting image src to:', imagePath);
      img.src = imagePath;
    } else if (!isBack && !hasImageAvailable(card.name)) {
      console.log(`⏭️ SKIPPED: "${card.name}" (not in available list)`);
      setHasImage(false);
      setImageError(false);
    }
  }, [card.name, isBack]);

  // Card back design
  if (isBack) {
    return (
      <div style={{
        width: '120px',
        height: '200px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, var(--purple-deep) 0%, var(--green-forest) 100%)',
        border: '2px solid var(--gold-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Mystical pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
          opacity: 0.6
        }} />

        {/* Central mystical symbol */}
        <div style={{
          color: 'var(--gold-accent)',
          fontSize: '2rem',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          zIndex: 2
        }}>
          🔮
        </div>

        {/* Corner decorations */}
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          color: 'var(--gold-accent)',
          fontSize: '0.8rem',
          opacity: 0.8
        }}>✦</div>
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          color: 'var(--gold-accent)',
          fontSize: '0.8rem',
          opacity: 0.8
        }}>✦</div>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          color: 'var(--gold-accent)',
          fontSize: '0.8rem',
          opacity: 0.8
        }}>✦</div>
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          color: 'var(--gold-accent)',
          fontSize: '0.8rem',
          opacity: 0.8
        }}>✦</div>
      </div>
    );
  }

  // Use actual card image if available
  if (hasImage) {
    const fileName = getImageFileName(card.name);
    const imagePath = `/cards/rider-waite-smith/${fileName}.png`;

    return (
      <div style={{
        width: '120px',
        height: '200px',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <img
          src={imagePath}
          alt={card.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isReversed ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.3s ease'
          }}
          onError={() => {
            console.error(`Image failed to load in component: ${imagePath}`);
            setHasImage(false);
            setImageError(true);
          }}
        />

        {/* Subtle overlay for better text visibility */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
          color: 'white',
          padding: '0.5rem',
          fontSize: '0.7rem',
          textAlign: 'center',
          fontWeight: 'bold',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
        }}>
          {card.name}
        </div>
      </div>
    );
  }

  // Debug indicator for image loading state
  if (imageError && card.arcana === 'major') {
    const fileName = getImageFileName(card.name);
    console.log(`Debug: Image error for ${card.name} -> ${fileName}`);
  }

  // Fallback to generated card design for minor arcana or missing images
  const isMajor = card.arcana === 'major';
  const suitColors = {
    wands: '#DC2626',
    cups: '#2563EB',
    swords: '#64748B',
    pentacles: '#F59E0B'
  };

  const suitColor = card.suit ? suitColors[card.suit] : '#6B46C1';

  return (
    <div style={{
      width: '120px',
      height: '200px',
      borderRadius: '12px',
      background: '#F9FAFB',
      border: `2px solid ${suitColor}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem',
      position: 'relative',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
      transform: isReversed ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s ease'
    }}>
      {/* Card name at top */}
      <div style={{
        color: suitColor,
        fontSize: '0.6rem',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '1.2'
      }}>
        {card.name.length > 15 ? card.name.substring(0, 15) + '...' : card.name}
      </div>

      {/* Central symbol area */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: suitColor
      }}>
        {isMajor ? (
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: `2px solid ${suitColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            {typeof card.number === 'number' ? card.number : card.id}
          </div>
        ) : (
          <div style={{ fontSize: '1.5rem' }}>
            {card.suit === 'wands' && '🪄'}
            {card.suit === 'cups' && '🏆'}
            {card.suit === 'swords' && '⚔️'}
            {card.suit === 'pentacles' && '⭐'}
            {!card.suit && '🔮'}
          </div>
        )}
      </div>

      {/* Number/rank at bottom */}
      <div style={{
        color: suitColor,
        fontSize: '0.7rem',
        fontWeight: 'bold'
      }}>
        {typeof card.number === 'string' ? card.number : card.number || 'Major'}
      </div>

      {/* Element indicator */}
      {card.element && (
        <div style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          fontSize: '0.5rem',
          color: suitColor,
          opacity: 0.7
        }}>
          {card.element}
        </div>
      )}
    </div>
  );
};

export default CardImageGenerator;