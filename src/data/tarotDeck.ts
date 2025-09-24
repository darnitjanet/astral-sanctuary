import { TarotCard } from '../types/tarot';

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: 'The Fool',
    arcana: 'major',
    uprightMeaning: 'New beginnings, innocence, spontaneity, free spirit',
    reversedMeaning: 'Recklessness, risk-taking, foolishness',
    description: 'The Fool represents new beginnings and having faith in the future.',
    keywords: ['beginnings', 'innocence', 'leap of faith', 'originality'],
    element: 'Air',
    planet: 'Uranus',
    numerology: 0
  },
  {
    id: 1,
    name: 'The Magician',
    arcana: 'major',
    uprightMeaning: 'Manifestation, resourcefulness, power, inspired action',
    reversedMeaning: 'Manipulation, poor planning, untapped talents',
    description: 'The Magician card represents manifestation and using your gifts.',
    keywords: ['willpower', 'desire', 'creation', 'manifestation'],
    element: 'Air',
    planet: 'Mercury',
    numerology: 1
  },
  {
    id: 2,
    name: 'The High Priestess',
    arcana: 'major',
    uprightMeaning: 'Intuition, sacred knowledge, divine feminine, subconscious',
    reversedMeaning: 'Secrets, disconnected from intuition, withdrawal',
    description: 'The High Priestess represents wisdom, intuition, and secret knowledge.',
    keywords: ['intuition', 'mystery', 'wisdom', 'spirituality'],
    element: 'Water',
    planet: 'Moon',
    numerology: 2
  },
  {
    id: 3,
    name: 'The Empress',
    arcana: 'major',
    uprightMeaning: 'Femininity, beauty, nature, nurturing, abundance',
    reversedMeaning: 'Creative block, dependence on others',
    description: 'The Empress signifies abundance, nurturing, and creation.',
    keywords: ['motherhood', 'fertility', 'nature', 'abundance'],
    element: 'Earth',
    planet: 'Venus',
    zodiac: 'Taurus',
    numerology: 3
  },
  {
    id: 4,
    name: 'The Emperor',
    arcana: 'major',
    uprightMeaning: 'Authority, establishment, structure, father figure',
    reversedMeaning: 'Tyranny, rigidity, coldness',
    description: 'The Emperor represents authority, structure, and control.',
    keywords: ['authority', 'structure', 'control', 'father'],
    element: 'Fire',
    zodiac: 'Aries',
    numerology: 4
  },
  {
    id: 5,
    name: 'The Hierophant',
    arcana: 'major',
    uprightMeaning: 'Spiritual wisdom, tradition, conformity, institutions',
    reversedMeaning: 'Personal beliefs, freedom, challenging the status quo',
    description: 'The Hierophant represents traditional values and institutions.',
    keywords: ['tradition', 'conformity', 'morality', 'ethics'],
    element: 'Earth',
    zodiac: 'Taurus',
    numerology: 5
  },
  {
    id: 6,
    name: 'The Lovers',
    arcana: 'major',
    uprightMeaning: 'Love, harmony, relationships, values alignment',
    reversedMeaning: 'Disharmony, imbalance, misalignment of values',
    description: 'The Lovers represents relationships, choices, and harmony.',
    keywords: ['love', 'union', 'relationships', 'choices'],
    element: 'Air',
    zodiac: 'Gemini',
    numerology: 6
  },
  {
    id: 7,
    name: 'The Chariot',
    arcana: 'major',
    uprightMeaning: 'Control, willpower, success, determination',
    reversedMeaning: 'Lack of control, lack of direction, aggression',
    description: 'The Chariot represents conquest, victory, and overcoming obstacles.',
    keywords: ['control', 'willpower', 'success', 'determination'],
    element: 'Water',
    zodiac: 'Cancer',
    numerology: 7
  },
  {
    id: 8,
    name: 'Strength',
    arcana: 'major',
    uprightMeaning: 'Inner strength, courage, patience, control',
    reversedMeaning: 'Self-doubt, weakness, insecurity',
    description: 'Strength represents inner strength, courage, and patience.',
    keywords: ['strength', 'courage', 'patience', 'control'],
    element: 'Fire',
    zodiac: 'Leo',
    numerology: 8
  },
  {
    id: 9,
    name: 'The Hermit',
    arcana: 'major',
    uprightMeaning: 'Soul searching, introspection, inner guidance',
    reversedMeaning: 'Isolation, loneliness, withdrawal',
    description: 'The Hermit represents soul searching and inner guidance.',
    keywords: ['introspection', 'searching', 'guidance', 'solitude'],
    element: 'Earth',
    zodiac: 'Virgo',
    numerology: 9
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    arcana: 'major',
    uprightMeaning: 'Good luck, karma, life cycles, destiny',
    reversedMeaning: 'Bad luck, lack of control, clinging to control',
    description: 'The Wheel of Fortune represents cycles, luck, and change.',
    keywords: ['change', 'cycles', 'fate', 'luck'],
    element: 'Fire',
    planet: 'Jupiter',
    numerology: 10
  },
  {
    id: 11,
    name: 'Justice',
    arcana: 'major',
    uprightMeaning: 'Justice, fairness, truth, law',
    reversedMeaning: 'Unfairness, lack of accountability, dishonesty',
    description: 'Justice represents fairness, truth, and law.',
    keywords: ['justice', 'fairness', 'truth', 'balance'],
    element: 'Air',
    zodiac: 'Libra',
    numerology: 11
  },
  {
    id: 12,
    name: 'The Hanged Man',
    arcana: 'major',
    uprightMeaning: 'Surrender, new perspective, enlightenment',
    reversedMeaning: 'Stalling, resistance, indecision',
    description: 'The Hanged Man represents surrender and new perspectives.',
    keywords: ['sacrifice', 'release', 'perspective', 'suspension'],
    element: 'Water',
    planet: 'Neptune',
    numerology: 12
  },
  {
    id: 13,
    name: 'Death',
    arcana: 'major',
    uprightMeaning: 'Endings, beginnings, change, transformation',
    reversedMeaning: 'Resistance to change, inability to move on',
    description: 'Death represents transformation, endings, and new beginnings.',
    keywords: ['ending', 'transformation', 'transition', 'renewal'],
    element: 'Water',
    zodiac: 'Scorpio',
    numerology: 13
  },
  {
    id: 14,
    name: 'Temperance',
    arcana: 'major',
    uprightMeaning: 'Balance, moderation, patience, purpose',
    reversedMeaning: 'Imbalance, excess, lack of long-term vision',
    description: 'Temperance represents balance, moderation, and patience.',
    keywords: ['balance', 'moderation', 'patience', 'harmony'],
    element: 'Fire',
    zodiac: 'Sagittarius',
    numerology: 14
  },
  {
    id: 15,
    name: 'The Devil',
    arcana: 'major',
    uprightMeaning: 'Bondage, materialism, addiction, sexuality',
    reversedMeaning: 'Freedom, release, overcoming addiction',
    description: 'The Devil represents bondage, materialism, and temptation.',
    keywords: ['bondage', 'materialism', 'ignorance', 'hopelessness'],
    element: 'Earth',
    zodiac: 'Capricorn',
    numerology: 15
  },
  {
    id: 16,
    name: 'The Tower',
    arcana: 'major',
    uprightMeaning: 'Sudden upheaval, chaos, revelation, awakening',
    reversedMeaning: 'Personal transformation, fear of change',
    description: 'The Tower represents sudden upheaval and revelation.',
    keywords: ['upheaval', 'chaos', 'revelation', 'awakening'],
    element: 'Fire',
    planet: 'Mars',
    numerology: 16
  },
  {
    id: 17,
    name: 'The Star',
    arcana: 'major',
    uprightMeaning: 'Hope, faith, renewal, spirituality',
    reversedMeaning: 'Lack of faith, despair, discouragement',
    description: 'The Star represents hope, faith, and renewal.',
    keywords: ['hope', 'faith', 'renewal', 'spirituality'],
    element: 'Air',
    zodiac: 'Aquarius',
    numerology: 17
  },
  {
    id: 18,
    name: 'The Moon',
    arcana: 'major',
    uprightMeaning: 'Illusion, fear, anxiety, intuition',
    reversedMeaning: 'Release of fear, repressed emotion',
    description: 'The Moon represents illusions, intuition, and the unconscious.',
    keywords: ['illusion', 'fear', 'intuition', 'dreams'],
    element: 'Water',
    zodiac: 'Pisces',
    numerology: 18
  },
  {
    id: 19,
    name: 'The Sun',
    arcana: 'major',
    uprightMeaning: 'Joy, success, vitality, positivity',
    reversedMeaning: 'Temporary depression, lack of success',
    description: 'The Sun represents success, joy, and vitality.',
    keywords: ['joy', 'success', 'vitality', 'enlightenment'],
    element: 'Fire',
    planet: 'Sun',
    numerology: 19
  },
  {
    id: 20,
    name: 'Judgement',
    arcana: 'major',
    uprightMeaning: 'Reflection, reckoning, inner calling',
    reversedMeaning: 'Self-doubt, inability to forgive',
    description: 'Judgement represents rebirth, inner calling, and absolution.',
    keywords: ['judgement', 'rebirth', 'absolution', 'inner calling'],
    element: 'Fire',
    planet: 'Pluto',
    numerology: 20
  },
  {
    id: 21,
    name: 'The World',
    arcana: 'major',
    uprightMeaning: 'Completion, accomplishment, travel, fulfillment',
    reversedMeaning: 'Lack of closure, incomplete goals',
    description: 'The World represents completion, fulfillment, and wholeness.',
    keywords: ['completion', 'accomplishment', 'fulfillment', 'wholeness'],
    element: 'Earth',
    planet: 'Saturn',
    numerology: 21
  }
];

const createMinorArcana = (): TarotCard[] => {
  const suits: Array<'wands' | 'cups' | 'swords' | 'pentacles'> = ['wands', 'cups', 'swords', 'pentacles'];
  const courtCards = ['Page', 'Knight', 'Queen', 'King'];
  const minorCards: TarotCard[] = [];
  let id = 22;

  const suitMeanings = {
    wands: {
      element: 'Fire',
      keywords: ['creativity', 'inspiration', 'energy', 'passion'],
      ace: { upright: 'Inspiration, new opportunities, growth', reversed: 'Lack of energy, delays, lack of passion' },
      two: { upright: 'Planning, progress, decisions', reversed: 'Lack of planning, overwhelmed' },
      three: { upright: 'Expansion, foresight, leadership', reversed: 'Obstacles, delays, frustration' },
      four: { upright: 'Celebration, harmony, homecoming', reversed: 'Lack of support, transience' },
      five: { upright: 'Competition, conflict, challenges', reversed: 'Avoiding conflict, diversity' },
      six: { upright: 'Victory, success, recognition', reversed: 'Egotism, self-importance' },
      seven: { upright: 'Perseverance, defensive, challenge', reversed: 'Give up, overwhelmed' },
      eight: { upright: 'Speed, action, air travel', reversed: 'Delays, frustration' },
      nine: { upright: 'Resilience, persistence, boundaries', reversed: 'Exhaustion, overwhelmed' },
      ten: { upright: 'Burden, responsibility, obligation', reversed: 'Release, delegate' },
      page: { upright: 'Inspiration, discovery, limitless potential', reversed: 'Lack of direction, procrastination' },
      knight: { upright: 'Energy, passion, adventure', reversed: 'Anger, impulsiveness' },
      queen: { upright: 'Courage, confidence, independence', reversed: 'Selfishness, jealousy' },
      king: { upright: 'Leadership, vision, entrepreneur', reversed: 'Impulsiveness, ruthlessness' }
    },
    cups: {
      element: 'Water',
      keywords: ['emotions', 'relationships', 'intuition', 'creativity'],
      ace: { upright: 'Love, new relationships, compassion', reversed: 'Self-love, intuition, repressed emotions' },
      two: { upright: 'Unity, partnership, connection', reversed: 'Imbalance, broken communication' },
      three: { upright: 'Friendship, community, celebration', reversed: 'Overindulgence, gossip' },
      four: { upright: 'Meditation, contemplation, apathy', reversed: 'Retreat, withdrawal' },
      five: { upright: 'Loss, grief, disappointment', reversed: 'Acceptance, moving on' },
      six: { upright: 'Nostalgia, memories, childhood', reversed: 'Living in the past, forgiveness' },
      seven: { upright: 'Choices, illusions, wishful thinking', reversed: 'Clarity, choice' },
      eight: { upright: 'Walking away, disappointment', reversed: 'Trying one more time' },
      nine: { upright: 'Wishes fulfilled, satisfaction', reversed: 'Greed, dissatisfaction' },
      ten: { upright: 'Harmony, happiness, family', reversed: 'Misalignment of values' },
      page: { upright: 'Creative opportunities, curiosity', reversed: 'Emotional immaturity' },
      knight: { upright: 'Romance, charm, imagination', reversed: 'Jealousy, moodiness' },
      queen: { upright: 'Compassion, calm, comfort', reversed: 'Martyrdom, insecurity' },
      king: { upright: 'Emotional balance, diplomacy', reversed: 'Manipulation, moodiness' }
    },
    swords: {
      element: 'Air',
      keywords: ['thoughts', 'communication', 'conflict', 'intellect'],
      ace: { upright: 'Mental clarity, breakthrough', reversed: 'Confusion, chaos' },
      two: { upright: 'Indecision, choices, stalemate', reversed: 'Indecision, confusion' },
      three: { upright: 'Heartbreak, grief, sorrow', reversed: 'Recovery, forgiveness' },
      four: { upright: 'Rest, contemplation, peace', reversed: 'Restlessness, burnout' },
      five: { upright: 'Conflict, disagreement, competition', reversed: 'Resolution, acceptance' },
      six: { upright: 'Transition, moving on, rite of passage', reversed: 'Resistance to change' },
      seven: { upright: 'Deception, betrayal, trickery', reversed: 'Coming clean' },
      eight: { upright: 'Restriction, imprisonment', reversed: 'Release, freedom' },
      nine: { upright: 'Anxiety, worry, fear', reversed: 'Hope, reaching out' },
      ten: { upright: 'Painful endings, betrayal', reversed: 'Recovery, regeneration' },
      page: { upright: 'Curiosity, restlessness, mental energy', reversed: 'Deception, manipulation' },
      knight: { upright: 'Ambition, fast thinking', reversed: 'No direction, disregard' },
      queen: { upright: 'Perceptive, clear boundaries', reversed: 'Cold-hearted, cruel' },
      king: { upright: 'Mental clarity, intellectual power', reversed: 'Manipulative, tyrannical' }
    },
    pentacles: {
      element: 'Earth',
      keywords: ['material', 'finances', 'career', 'manifestation'],
      ace: { upright: 'New opportunity, manifestation', reversed: 'Lost opportunity, lack of planning' },
      two: { upright: 'Balance, adaptability', reversed: 'Imbalance, overcommitted' },
      three: { upright: 'Teamwork, collaboration', reversed: 'Disorganization, conflict' },
      four: { upright: 'Saving, security, conservatism', reversed: 'Greed, materialism' },
      five: { upright: 'Financial loss, poverty mindset', reversed: 'Recovery, spiritual poverty' },
      six: { upright: 'Generosity, charity, sharing', reversed: 'Selfishness, debt' },
      seven: { upright: 'Patience, perseverance, reward', reversed: 'Lack of growth, impatience' },
      eight: { upright: 'Apprenticeship, skill development', reversed: 'Lack of focus, perfectionism' },
      nine: { upright: 'Abundance, luxury, self-sufficiency', reversed: 'Overindulgence, hustling' },
      ten: { upright: 'Wealth, family, legacy', reversed: 'Financial failure' },
      page: { upright: 'Manifestation, financial opportunity', reversed: 'Lack of progress' },
      knight: { upright: 'Efficiency, routine, conservatism', reversed: 'Laziness, boredom' },
      queen: { upright: 'Nurturing, practical, homely', reversed: 'Self-care, work-life balance' },
      king: { upright: 'Wealth, business, leadership', reversed: 'Corruption, materialism' }
    }
  };

  suits.forEach(suit => {
    const suitData = suitMeanings[suit];

    for (let i = 1; i <= 14; i++) {
      let cardName: string;
      let number: number | string;
      let meanings: { upright: string; reversed: string };

      if (i === 1) {
        cardName = `Ace of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
        number = 'Ace';
        meanings = suitData.ace;
      } else if (i <= 10) {
        cardName = `${i} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
        number = i;
        const key = ['', 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][i];
        meanings = suitData[key as keyof typeof suitData] as { upright: string; reversed: string };
      } else {
        const courtIndex = i - 11;
        cardName = `${courtCards[courtIndex]} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
        number = courtCards[courtIndex];
        const key = courtCards[courtIndex].toLowerCase();
        meanings = suitData[key as keyof typeof suitData] as { upright: string; reversed: string };
      }

      minorCards.push({
        id: id++,
        name: cardName,
        arcana: 'minor',
        suit,
        number,
        uprightMeaning: meanings.upright,
        reversedMeaning: meanings.reversed,
        description: `The ${cardName} represents aspects of ${suitData.keywords.join(', ')}.`,
        keywords: suitData.keywords,
        element: suitData.element,
        numerology: typeof number === 'number' ? number : undefined
      });
    }
  });

  return minorCards;
};

export const minorArcana = createMinorArcana();
export const fullDeck = [...majorArcana, ...minorArcana];