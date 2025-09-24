export interface TarotCard {
  id: number;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  number?: number | string;
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
  keywords: string[];
  element?: string;
  zodiac?: string;
  planet?: string;
  numerology?: number;
}

export interface TarotReading {
  id: string;
  timestamp: Date;
  spread: SpreadType;
  cards: DrawCard[];
  question?: string;
  notes?: string;
  deckStyle: DeckStyle;
}

export interface DrawCard {
  card: TarotCard;
  position: number;
  positionMeaning: string;
  isReversed: boolean;
}

export type SpreadType =
  | 'single'
  | 'three-card'
  | 'celtic-cross'
  | 'horseshoe'
  | 'relationship'
  | 'career'
  | 'month-ahead'
  | 'chakra'
  | 'yes-no'
  | 'shadow-work';

export type DeckStyle =
  | 'rider-waite'
  | 'marseilles'
  | 'thoth'
  | 'cosmic'
  | 'botanical'
  | 'minimalist';

export interface SpreadLayout {
  name: string;
  type: SpreadType;
  cardCount: number;
  positions: SpreadPosition[];
  description: string;
}

export interface SpreadPosition {
  index: number;
  name: string;
  meaning: string;
  x?: number;
  y?: number;
}