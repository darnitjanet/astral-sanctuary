import { SpreadLayout } from '../types/tarot';

export const spreads: SpreadLayout[] = [
  {
    name: 'Single Card Daily Draw',
    type: 'single',
    cardCount: 1,
    description: 'A single card for daily guidance and insight',
    positions: [
      {
        index: 0,
        name: 'Daily Insight',
        meaning: 'Your message for today',
        x: 50,
        y: 50
      }
    ]
  },
  {
    name: 'Three Card Spread',
    type: 'three-card',
    cardCount: 3,
    description: 'Past, Present, and Future insight',
    positions: [
      {
        index: 0,
        name: 'Past',
        meaning: 'Past influences affecting the situation',
        x: 25,
        y: 50
      },
      {
        index: 1,
        name: 'Present',
        meaning: 'Current energies and circumstances',
        x: 50,
        y: 50
      },
      {
        index: 2,
        name: 'Future',
        meaning: 'Potential outcome or what lies ahead',
        x: 75,
        y: 50
      }
    ]
  },
  {
    name: 'Celtic Cross',
    type: 'celtic-cross',
    cardCount: 10,
    description: 'The most comprehensive tarot spread for deep insight',
    positions: [
      {
        index: 0,
        name: 'Present Situation',
        meaning: 'Your current situation or state of mind',
        x: 40,
        y: 50
      },
      {
        index: 1,
        name: 'Cross/Challenge',
        meaning: 'What crosses you - challenges or opportunities',
        x: 40,
        y: 30
      },
      {
        index: 2,
        name: 'Distant Past',
        meaning: 'Foundation or root of the matter',
        x: 40,
        y: 70
      },
      {
        index: 3,
        name: 'Recent Past',
        meaning: 'Recent events leading to present',
        x: 20,
        y: 50
      },
      {
        index: 4,
        name: 'Possible Future',
        meaning: 'Potential future if path continues',
        x: 40,
        y: 10
      },
      {
        index: 5,
        name: 'Near Future',
        meaning: 'What will happen in the near future',
        x: 60,
        y: 50
      },
      {
        index: 6,
        name: 'Your Approach',
        meaning: 'Your approach to the situation',
        x: 80,
        y: 80
      },
      {
        index: 7,
        name: 'External Influences',
        meaning: 'External factors affecting the situation',
        x: 80,
        y: 65
      },
      {
        index: 8,
        name: 'Hopes and Fears',
        meaning: 'Your hopes and/or fears',
        x: 80,
        y: 50
      },
      {
        index: 9,
        name: 'Final Outcome',
        meaning: 'The final outcome if all continues',
        x: 80,
        y: 35
      }
    ]
  },
  {
    name: 'Horseshoe Spread',
    type: 'horseshoe',
    cardCount: 7,
    description: 'Provides insight into the near future',
    positions: [
      {
        index: 0,
        name: 'Past',
        meaning: 'Past influences',
        x: 15,
        y: 60
      },
      {
        index: 1,
        name: 'Present',
        meaning: 'Current situation',
        x: 25,
        y: 40
      },
      {
        index: 2,
        name: 'Hidden Influences',
        meaning: 'Hidden factors at play',
        x: 40,
        y: 25
      },
      {
        index: 3,
        name: 'Obstacles',
        meaning: 'Challenges to overcome',
        x: 50,
        y: 20
      },
      {
        index: 4,
        name: 'Environment',
        meaning: 'External influences',
        x: 60,
        y: 25
      },
      {
        index: 5,
        name: 'Advice',
        meaning: 'Best course of action',
        x: 75,
        y: 40
      },
      {
        index: 6,
        name: 'Outcome',
        meaning: 'Likely outcome',
        x: 85,
        y: 60
      }
    ]
  },
  {
    name: 'Relationship Spread',
    type: 'relationship',
    cardCount: 6,
    description: 'Explore dynamics in relationships',
    positions: [
      {
        index: 0,
        name: 'You',
        meaning: 'Your feelings and position',
        x: 30,
        y: 30
      },
      {
        index: 1,
        name: 'Partner',
        meaning: "Partner's feelings and position",
        x: 70,
        y: 30
      },
      {
        index: 2,
        name: 'Connection',
        meaning: 'The connection between you',
        x: 50,
        y: 40
      },
      {
        index: 3,
        name: 'Strengths',
        meaning: 'Relationship strengths',
        x: 30,
        y: 60
      },
      {
        index: 4,
        name: 'Challenges',
        meaning: 'Challenges to work through',
        x: 70,
        y: 60
      },
      {
        index: 5,
        name: 'Potential',
        meaning: 'Relationship potential',
        x: 50,
        y: 75
      }
    ]
  },
  {
    name: 'Career Path Spread',
    type: 'career',
    cardCount: 5,
    description: 'Guidance for professional development',
    positions: [
      {
        index: 0,
        name: 'Current Position',
        meaning: 'Where you are now professionally',
        x: 20,
        y: 50
      },
      {
        index: 1,
        name: 'Strengths',
        meaning: 'Your professional strengths',
        x: 35,
        y: 30
      },
      {
        index: 2,
        name: 'Challenges',
        meaning: 'Obstacles to overcome',
        x: 50,
        y: 50
      },
      {
        index: 3,
        name: 'Opportunities',
        meaning: 'Opportunities available',
        x: 65,
        y: 30
      },
      {
        index: 4,
        name: 'Outcome',
        meaning: 'Potential career outcome',
        x: 80,
        y: 50
      }
    ]
  },
  {
    name: 'Month Ahead Spread',
    type: 'month-ahead',
    cardCount: 5,
    description: 'Overview of the coming month',
    positions: [
      {
        index: 0,
        name: 'Theme',
        meaning: 'Overall theme for the month',
        x: 50,
        y: 20
      },
      {
        index: 1,
        name: 'Week 1',
        meaning: 'First week energy',
        x: 20,
        y: 60
      },
      {
        index: 2,
        name: 'Week 2',
        meaning: 'Second week energy',
        x: 40,
        y: 60
      },
      {
        index: 3,
        name: 'Week 3',
        meaning: 'Third week energy',
        x: 60,
        y: 60
      },
      {
        index: 4,
        name: 'Week 4',
        meaning: 'Fourth week energy',
        x: 80,
        y: 60
      }
    ]
  },
  {
    name: 'Chakra Spread',
    type: 'chakra',
    cardCount: 7,
    description: 'Align with your seven chakras',
    positions: [
      {
        index: 0,
        name: 'Root Chakra',
        meaning: 'Foundation, security, grounding',
        x: 50,
        y: 85
      },
      {
        index: 1,
        name: 'Sacral Chakra',
        meaning: 'Creativity, sexuality, emotions',
        x: 50,
        y: 72
      },
      {
        index: 2,
        name: 'Solar Plexus',
        meaning: 'Personal power, confidence',
        x: 50,
        y: 59
      },
      {
        index: 3,
        name: 'Heart Chakra',
        meaning: 'Love, compassion, relationships',
        x: 50,
        y: 46
      },
      {
        index: 4,
        name: 'Throat Chakra',
        meaning: 'Communication, self-expression',
        x: 50,
        y: 33
      },
      {
        index: 5,
        name: 'Third Eye',
        meaning: 'Intuition, wisdom, insight',
        x: 50,
        y: 20
      },
      {
        index: 6,
        name: 'Crown Chakra',
        meaning: 'Spiritual connection, enlightenment',
        x: 50,
        y: 7
      }
    ]
  },
  {
    name: 'Yes/No Spread',
    type: 'yes-no',
    cardCount: 5,
    description: 'Get clarity on a yes/no question',
    positions: [
      {
        index: 0,
        name: 'Current Energy',
        meaning: 'Present energy around the question',
        x: 20,
        y: 50
      },
      {
        index: 1,
        name: 'Yes Energy',
        meaning: 'Supporting yes factors',
        x: 35,
        y: 35
      },
      {
        index: 2,
        name: 'No Energy',
        meaning: 'Supporting no factors',
        x: 35,
        y: 65
      },
      {
        index: 3,
        name: 'Advice',
        meaning: 'Guidance for decision',
        x: 65,
        y: 50
      },
      {
        index: 4,
        name: 'Outcome',
        meaning: 'Most likely answer',
        x: 80,
        y: 50
      }
    ]
  },
  {
    name: 'Shadow Work Spread',
    type: 'shadow-work',
    cardCount: 4,
    description: 'Explore your shadow self',
    positions: [
      {
        index: 0,
        name: 'Conscious Self',
        meaning: 'What you show to the world',
        x: 30,
        y: 30
      },
      {
        index: 1,
        name: 'Shadow Self',
        meaning: 'Hidden aspects of yourself',
        x: 70,
        y: 30
      },
      {
        index: 2,
        name: 'Integration',
        meaning: 'How to integrate shadow aspects',
        x: 50,
        y: 60
      },
      {
        index: 3,
        name: 'Transformation',
        meaning: 'Potential for growth',
        x: 50,
        y: 80
      }
    ]
  }
];