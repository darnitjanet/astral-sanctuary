interface DreamData {
  content: string;
  mood: string;
  symbols: string[];
  lucid: boolean;
}

interface DreamInterpretation {
  interpretation: string;
  symbolMeanings?: { [key: string]: string };
  suggestions?: string[];
}

// Predefined interpretations for common dream elements
const symbolMeanings = {
  water: "represents emotions, subconscious, and flow of life",
  flying: "symbolizes freedom, ambition, and transcending limitations",
  animals: "represent instincts, natural desires, and aspects of personality",
  falling: "indicates feelings of losing control or fear of failure",
  death: "symbolizes transformation, endings, and new beginnings",
  house: "represents the self, different rooms showing different aspects of psyche",
  car: "symbolizes direction in life, personal drive, and control",
  fire: "represents passion, destruction, purification, or anger",
  snake: "symbolizes transformation, healing, or hidden fears",
  baby: "represents new beginnings, innocence, or nurturing aspects",
  money: "indicates values, self-worth, or resource management",
  food: "represents nourishment, desires, or emotional fulfillment",
  school: "symbolizes learning, testing, or revisiting past experiences",
  mirror: "represents self-reflection and self-perception",
  bridge: "indicates transition, connection, or overcoming obstacles"
};

const moodInterpretations = {
  peaceful: "suggests inner harmony and acceptance of your current life situation",
  exciting: "indicates enthusiasm for new opportunities and positive energy",
  mysterious: "reflects unknown aspects of yourself that are ready to be explored",
  anxious: "shows concerns or fears that your subconscious is processing",
  joyful: "represents fulfillment and positive emotional states in your waking life",
  dark: "may indicate shadow aspects of personality or repressed emotions",
  neutral: "suggests a balanced state but may indicate emotional detachment"
};

// Simulated AI interpretation service
export const interpretDream = async (dreamData: DreamData): Promise<DreamInterpretation> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2500));

  const moodMeaning = moodInterpretations[dreamData.mood as keyof typeof moodInterpretations];

  // Find symbol meanings
  const dreamSymbolMeanings: { [key: string]: string } = {};
  dreamData.symbols.forEach(symbol => {
    const lowerSymbol = symbol.toLowerCase();
    if (symbolMeanings[lowerSymbol as keyof typeof symbolMeanings]) {
      dreamSymbolMeanings[symbol] = symbolMeanings[lowerSymbol as keyof typeof symbolMeanings];
    }
  });

  // Generate interpretation based on dream content, mood, and symbols
  let interpretation = "";

  // Base interpretation templates
  const interpretationTemplates = [
    `Your dream reveals deep insights about your current life journey. The ${dreamData.mood} emotional tone ${moodMeaning}. `,

    `This dream appears to be your psyche's way of processing important life themes. The ${dreamData.mood} nature of the dream ${moodMeaning}. `,

    `Your subconscious is communicating significant messages through this dream. The ${dreamData.mood} mood ${moodMeaning}. `
  ];

  interpretation += interpretationTemplates[Math.floor(Math.random() * interpretationTemplates.length)];

  // Add symbol-specific interpretations
  if (dreamData.symbols.length > 0) {
    interpretation += `The symbols in your dream carry special significance: `;

    dreamData.symbols.slice(0, 3).forEach((symbol, index) => {
      const meaning = dreamSymbolMeanings[symbol];
      if (meaning) {
        interpretation += `${symbol} ${meaning}`;
        if (index < Math.min(dreamData.symbols.length, 3) - 1) {
          interpretation += "; ";
        } else {
          interpretation += ". ";
        }
      }
    });

    if (dreamData.symbols.length > 3) {
      interpretation += `The additional symbols you mentioned also contribute to the dream's deeper meaning. `;
    }
  }

  // Add lucid dream specific interpretation
  if (dreamData.lucid) {
    interpretation += `The lucid nature of this dream is particularly significant - it suggests you're developing greater conscious awareness and may be ready to take more active control in areas of your waking life. Lucid dreams often occur during periods of personal growth and self-discovery.`;
  } else {
    interpretation += `This dream emerged from your unconscious mind, revealing themes that may benefit from conscious reflection and integration into your daily life.`;
  }

  // Generate suggestions based on dream content
  const suggestions = [
    "Keep a dream journal to track recurring themes and symbols",
    "Reflect on how these dream themes might relate to your current life situations",
    "Consider what emotions or situations in your waking life might have triggered this dream",
    "Practice mindfulness or meditation to better connect with your subconscious messages"
  ];

  return {
    interpretation,
    symbolMeanings: dreamSymbolMeanings,
    suggestions
  };
};

// OpenAI-powered dream interpretation
export const interpretDreamWithOpenAI = async (dreamData: DreamData): Promise<DreamInterpretation> => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  if (!apiKey) {
    console.warn('OpenAI API key not found, falling back to local interpretation');
    return await interpretDream(dreamData);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a wise and insightful dream interpreter with deep knowledge of psychology, symbolism, and spiritual traditions. Provide thoughtful, compassionate interpretations that help people understand their subconscious messages. Focus on personal growth, self-discovery, and practical insights.`
          },
          {
            role: 'user',
            content: `Please provide a thoughtful dream interpretation for the following dream:

Dream Description: ${dreamData.content}
Dream Mood: ${dreamData.mood}
Dream Symbols: ${dreamData.symbols.join(', ')}
Lucid Dream: ${dreamData.lucid ? 'Yes' : 'No'}

Please provide a comprehensive interpretation (2-3 paragraphs) that explores:
1. The psychological and symbolic meaning of key elements
2. How the dream relates to the dreamer's current life journey
3. Insights for personal growth and reflection

Be sensitive, wise, and focus on empowering the dreamer with meaningful insights.`
          }
        ],
        max_tokens: 800,
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const interpretation = data.choices[0].message.content;

    return {
      interpretation,
      symbolMeanings: {},
      suggestions: [
        "Reflect on how these insights relate to your current life situation",
        "Consider keeping a dream journal to track recurring themes",
        "Meditate on the emotions and symbols that stood out most to you",
        "Think about what changes or growth this dream might be encouraging"
      ]
    };

  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    // Fallback to local interpretation
    return await interpretDream(dreamData);
  }
};

export default { interpretDream };