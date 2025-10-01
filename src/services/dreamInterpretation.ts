import { fetchSymbolsFromFirebase, seedInitialSymbols } from './symbolDatabase';

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

// Cache for Firebase symbols
let firebaseSymbolsCache: { [key: string]: string } | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Comprehensive symbol dictionary for dream interpretation (fallback/default)
const defaultSymbolMeanings: { [key: string]: string } = {
  // Nature & Elements
  water: "represents emotions, subconscious, and the flow of life energy. Clear water suggests emotional clarity, while murky water indicates confused feelings",
  ocean: "symbolizes the vast unconscious mind, deep emotions, and life's overwhelming vastness. Calm oceans suggest peace, while stormy seas indicate emotional turbulence",
  river: "indicates the flow of life, journey through time, and transitions. A flowing river suggests progress, while a blocked river may indicate obstacles",
  rain: "represents emotional release, cleansing, renewal, or sadness. Gentle rain suggests peaceful emotions, while storms indicate emotional upheaval",
  flood: "symbolizes being overwhelmed by emotions, loss of control, or major life changes that feel unmanageable",
  ice: "represents frozen emotions, emotional coldness, or a situation that's been put on hold",
  snow: "symbolizes purity, transformation, covering up emotions, or a need for a fresh start",
  fire: "represents passion, transformation, destruction, purification, anger, or creative energy. Controlled fire suggests harnessed power, while wildfire indicates loss of control",
  flames: "indicate intense emotions, passion, or destructive forces in your life that need attention",
  smoke: "suggests confusion, hidden truths, something being obscured, or the aftermath of conflict",
  earth: "symbolizes grounding, stability, fertility, and connection to physical reality and practical matters",
  mud: "represents feeling stuck, confusion between emotions and practicality, or messy situations",
  mountain: "indicates obstacles to overcome, goals to achieve, spiritual elevation, or life challenges that seem insurmountable",
  volcano: "represents repressed emotions ready to erupt, explosive anger, or powerful transformative forces building beneath the surface",
  wind: "symbolizes change, communication, inspiration, or forces beyond your control affecting your life",
  storm: "indicates emotional turmoil, conflict, dramatic changes, or the release of pent-up feelings",
  lightning: "represents sudden insights, shocking revelations, divine inspiration, or destructive sudden changes",
  thunder: "symbolizes powerful messages from the unconscious, warnings, or the voice of authority",
  cloud: "suggests unclear thinking, depression, or situations that are obscured and need clarification",
  sun: "represents consciousness, clarity, vitality, masculine energy, success, and enlightenment",
  moon: "symbolizes the unconscious, feminine energy, intuition, cycles, and hidden aspects of self",
  stars: "indicate hopes, dreams, guidance, destiny, and connection to something greater than yourself",
  sky: "represents limitless potential, spiritual aspirations, and your mental/spiritual state",

  // Animals
  snake: "symbolizes transformation, healing, sexuality, hidden fears, betrayal, or wisdom. A shedding snake suggests renewal",
  spider: "represents creativity, feminine energy, feeling trapped in a web of lies, or anxiety about being entangled in complex situations",
  dog: "indicates loyalty, friendship, protection, instincts, or aspects of yourself that are faithful and trustworthy",
  cat: "symbolizes independence, feminine power, intuition, mystery, or unpredictable aspects of your personality",
  bird: "represents freedom, transcendence, messages from the unconscious, or spiritual aspirations",
  eagle: "indicates vision, power, spiritual awareness, and the ability to rise above situations",
  owl: "symbolizes wisdom, intuition, seeing through deception, or messages from the unconscious mind",
  crow: "represents transformation, magic, mystery, or messages from the shadow self",
  dove: "indicates peace, love, spiritual messages, and harmony",
  wolf: "symbolizes instincts, social connections, leadership, or threatening aspects of the wild self",
  bear: "represents strength, protection, motherhood, hibernation, or powerful instinctual forces",
  lion: "indicates courage, strength, pride, leadership, or dominating masculine energy",
  tiger: "symbolizes raw power, passion, unpredictability, or dangerous aspects of sexuality and aggression",
  horse: "represents freedom, power, sexuality, or the drive and energy propelling you forward",
  rabbit: "indicates fertility, abundance, fear, or the need to escape from threatening situations",
  rat: "symbolizes guilt, disease, betrayal, or survival instincts in difficult circumstances",
  mouse: "represents timidity, attention to small details, or feeling small and insignificant",
  fish: "indicates insights from the unconscious, spiritual nourishment, or going with the flow",
  shark: "symbolizes ruthless aggression, predatory behavior, or dangerous aspects of the unconscious",
  whale: "represents deep emotional wisdom, ancient knowledge, or overwhelming emotional forces",
  butterfly: "indicates transformation, beauty, lightness of being, or the soul's journey",
  bee: "symbolizes productivity, community, working toward goals, or sometimes feeling stung by life",
  ant: "represents hard work, patience, community cooperation, or feeling insignificant",

  // People & Body
  baby: "represents new beginnings, innocence, vulnerability, new projects, or nurturing aspects of self",
  child: "symbolizes inner child, innocence, playfulness, or undeveloped aspects of personality",
  mother: "indicates nurturing, comfort, feminine energy, or your relationship with authority and care",
  father: "represents authority, protection, masculine energy, or your relationship with power and discipline",
  stranger: "symbolizes unknown aspects of yourself, new opportunities, or fear of the unfamiliar",
  celebrity: "indicates desires for recognition, projection of qualities you admire, or aspects you want to develop",
  death: "symbolizes transformation, endings, new beginnings, major life changes, or fear of loss",
  dying: "represents the end of a phase, transformation, or aspects of yourself you're letting go",
  pregnant: "indicates new ideas developing, creativity, potential, or actual pregnancy concerns",
  naked: "symbolizes vulnerability, authenticity, exposure of your true self, or fear of being seen",
  teeth: "represent power, confidence, aggression, or anxieties about appearance and capability. Losing teeth suggests loss of power",
  hair: "symbolizes strength, freedom, thoughts, or identity. Cutting hair represents major change",
  blood: "indicates life force, passion, sacrifice, family ties, or emotional wounds",
  eyes: "represent awareness, perception, insight, or how you see yourself and the world",
  hands: "symbolize capability, creation, giving, receiving, or control over your life",

  // Places & Structures
  house: "represents the self, with different rooms showing different aspects of psyche. Basement is unconscious, attic is higher mind",
  home: "symbolizes security, comfort, family, your sense of self, or where you feel you belong",
  bedroom: "indicates intimacy, privacy, rest, or personal aspects of self not shown to others",
  bathroom: "represents cleansing, release, privacy, or need to eliminate what no longer serves you",
  kitchen: "symbolizes nourishment, family, transformation, or preparation of emotional/spiritual sustenance",
  basement: "indicates the unconscious mind, repressed memories, hidden aspects of self, or deep-seated fears that you've been avoiding or suppressing",
  attic: "represents higher consciousness, memories, forgotten aspects of self, or spiritual awareness",
  shower: "symbolizes cleansing, purification, washing away negativity, emotional release, or the need to refresh and renew yourself",
  bath: "represents relaxation, self-care, emotional healing, or taking time to process and soothe difficult feelings",
  door: "symbolizes opportunities, transitions, new phases, or barriers between different aspects of life",
  window: "indicates perspective, how you view the world, opportunities to see things differently",
  stairs: "represent transitions between consciousness levels, progress, or connection between different life areas",
  elevator: "symbolizes rapid changes in consciousness, status, or life circumstances",
  school: "indicates learning, testing, evaluation, or revisiting past experiences for growth",
  classroom: "represents lessons you're learning, feeling judged, or areas where you're being tested",
  hospital: "symbolizes healing, vulnerability, sickness, or need for emotional/physical care",
  church: "indicates spirituality, morality, judgment, seeking guidance, or connection to higher power",
  prison: "represents feeling trapped, restricted, guilt, or self-imposed limitations",
  store: "symbolizes choices, opportunities, values, or shopping for new aspects of identity",

  // Objects & Vehicles
  car: "symbolizes direction in life, personal drive, control, and how you navigate your journey",
  driving: "represents being in control of your life direction, autonomy, or how you're steering your path",
  airplane: "indicates ambitions, rapid changes, rising above situations, or desire for freedom and escape",
  train: "symbolizes life journey, destiny, going along a predetermined path, or collective journey",
  boat: "represents emotional navigation, going with the flow, or how you handle emotional waters",
  bicycle: "indicates balance, personal effort, steady progress, or simpler approach to life",
  money: "symbolizes values, self-worth, power, resources, success, or anxieties about security",
  food: "represents nourishment, desires, emotional fulfillment, or what you're taking in from life",
  phone: "indicates communication, connection, messages you need to hear, or desire to reach out",
  computer: "symbolizes logic, information processing, connectivity, or how you organize thoughts",
  book: "represents knowledge, life story, lessons, or chapters of your life",
  key: "indicates solutions, access, secrets, or unlocking aspects of yourself or situations",
  lock: "symbolizes barriers, secrets, protection, or things you're keeping closed off",
  knife: "represents cutting through problems, aggression, division, or making clear separations",
  gun: "symbolizes power, aggression, defense, masculine energy, or feeling threatened",
  sword: "indicates mental clarity, cutting through confusion, power, or intellectual strength",
  mirror: "represents self-reflection, self-perception, truth, or how you see yourself",
  clock: "symbolizes time passing, deadlines, anxiety about aging, or awareness of mortality",

  // Actions & States
  flying: "symbolizes freedom, ambition, transcending limitations, rising above problems, or spiritual elevation",
  falling: "indicates loss of control, fear of failure, insecurity, or letting go of something",
  running: "represents escaping, pursuing goals, anxiety, or trying to get away from something",
  chasing: "symbolizes pursuing desires, or being pursued by aspects of yourself you're avoiding",
  swimming: "indicates navigating emotions, going with the flow, or working through emotional issues",
  drowning: "represents being overwhelmed by emotions, loss of control, or inability to cope",
  climbing: "symbolizes ambition, effort to reach goals, spiritual ascent, or overcoming obstacles",
  lost: "indicates confusion, lack of direction, searching for identity, or feeling disconnected from your path",
  trapped: "represents feeling stuck, limited, unable to escape a situation, or self-imposed restrictions",
  hiding: "symbolizes avoidance, shame, protection, or aspects of yourself you don't want seen",
  fighting: "indicates inner conflict, struggle with aspects of self, or external battles in waking life",
  vomiting: "represents purging, releasing toxic emotions or relationships, rejecting something harmful, or expressing disgust at a situation you can no longer tolerate",
  vomit: "symbolizes expulsion of negative emotions, getting rid of what doesn't serve you, or physical/emotional rejection of harmful influences",
  crying: "indicates emotional release, healing through expression, grief, or allowing yourself to feel vulnerable",
  laughing: "represents joy, relief, or sometimes nervous energy covering deeper emotions",
  screaming: "symbolizes unexpressed frustration, need to be heard, release of pent-up emotions, or feeling powerless",
  eating: "represents taking in experiences, nourishment of body or soul, or what you're absorbing from your environment",
  bleeding: "indicates loss of life force, emotional wounds, sacrifice, or energy being drained from you",

  // Abstract Concepts
  war: "symbolizes internal conflict, major life struggles, or battling aspects of yourself",
  wedding: "represents union of opposites, commitment, new beginnings, or integration of aspects of self",
  funeral: "indicates endings, grief, letting go, or transformation of old patterns",
  party: "symbolizes celebration, social needs, desire for connection, or aspects of life that bring joy",
  exam: "represents being tested, evaluation, fear of failure, or proving yourself",
  journey: "indicates life path, search for meaning, transition, or process of self-discovery",
  gift: "symbolizes talents, blessings, unexpected opportunities, or what life is offering you",
  darkness: "represents the unknown, fear, unconscious, or aspects of self not yet illuminated",
  light: "indicates awareness, understanding, hope, divine presence, or clarity"
};

const moodInterpretations = {
  peaceful: "suggests inner harmony and acceptance of your current life situation",
  exciting: "indicates enthusiasm for new opportunities and positive energy",
  mysterious: "reflects unknown aspects of yourself that are ready to be explored",
  anxious: "shows concerns or fears that your subconscious is processing",
  joyful: "represents fulfillment and positive emotional states in your waking life",
  dark: "may indicate shadow aspects of personality or repressed emotions",
  scary: "reveals deep fears or threats that your psyche is attempting to process and integrate",
  sad: "reflects grief, loss, or emotional pain that needs acknowledgment and healing",
  romantic: "expresses desires for connection, intimacy, or unresolved feelings about relationships",
  adventurous: "signals readiness for change, exploration, and stepping outside your comfort zone",
  confusing: "indicates you're processing complex situations or experiencing uncertainty about your path",
  surreal: "suggests your mind is exploring creative possibilities or breaking free from conventional thinking",
  neutral: "suggests a balanced state but may indicate emotional detachment"
};

// Get merged symbol meanings (Firebase + defaults)
const getMergedSymbolMeanings = async (): Promise<{ [key: string]: string }> => {
  try {
    // Use cache if it's still valid
    const now = Date.now();
    if (firebaseSymbolsCache && (now - lastFetchTime) < CACHE_DURATION) {
      return { ...defaultSymbolMeanings, ...firebaseSymbolsCache };
    }

    // Fetch from Firebase
    const firebaseSymbols = await fetchSymbolsFromFirebase();
    firebaseSymbolsCache = firebaseSymbols;
    lastFetchTime = now;

    // Merge: Firebase symbols override defaults
    return { ...defaultSymbolMeanings, ...firebaseSymbols };
  } catch (error) {
    console.error('Error fetching Firebase symbols, using defaults:', error);
    return defaultSymbolMeanings;
  }
};

// Extract keywords from dream content that match our symbol dictionary
const extractSymbolsFromContent = async (content: string): Promise<{ [key: string]: string }> => {
  const extractedSymbols: { [key: string]: string } = {};
  const lowerContent = content.toLowerCase();

  // Get the merged symbol dictionary
  const symbolMeanings = await getMergedSymbolMeanings();

  // Check each symbol in our dictionary
  Object.keys(symbolMeanings).forEach(symbol => {
    // Use word boundaries to match whole words
    const regex = new RegExp(`\\b${symbol}\\b`, 'i');
    if (regex.test(lowerContent)) {
      extractedSymbols[symbol] = symbolMeanings[symbol];
    }
  });

  return extractedSymbols;
};

// Analyze symbol combinations for deeper meanings
const analyzeSymbolCombinations = (symbols: string[]): string[] => {
  const insights: string[] = [];
  const lowerSymbols = symbols.map(s => s.toLowerCase());

  // Water + Fire combinations
  if ((lowerSymbols.includes('water') || lowerSymbols.includes('ocean') || lowerSymbols.includes('river')) &&
      (lowerSymbols.includes('fire') || lowerSymbols.includes('flames'))) {
    insights.push("The combination of water and fire elements suggests a conflict between emotions and passion, or the need to balance cooling emotions with transformative energy");
  }

  // Death + Baby/Birth combinations
  if (lowerSymbols.includes('death') && (lowerSymbols.includes('baby') || lowerSymbols.includes('birth') || lowerSymbols.includes('pregnant'))) {
    insights.push("Death appearing alongside birth symbols strongly emphasizes transformation and the cycle of endings leading to new beginnings");
  }

  // Animal + House combinations
  const animals = ['snake', 'dog', 'cat', 'spider', 'bird', 'wolf', 'bear', 'lion', 'tiger'];
  const hasAnimal = lowerSymbols.some(s => animals.includes(s));
  const hasHome = lowerSymbols.includes('house') || lowerSymbols.includes('home');
  if (hasAnimal && hasHome) {
    insights.push("Animals appearing in your home suggest that instinctual or primal aspects of yourself are entering your personal space and demanding attention");
  }

  // Flying + Falling combinations
  if (lowerSymbols.includes('flying') && lowerSymbols.includes('falling')) {
    insights.push("The contrast between flying and falling indicates fluctuating feelings about control and freedom in your life, possibly reflecting uncertainty about ambitions");
  }

  // Water + Drowning
  if ((lowerSymbols.includes('water') || lowerSymbols.includes('ocean')) && lowerSymbols.includes('drowning')) {
    insights.push("Drowning in water particularly emphasizes feeling overwhelmed by your emotions and possibly losing your sense of self in emotional situations");
  }

  // Vehicle + Lost/Trapped
  const vehicles = ['car', 'driving', 'airplane', 'train', 'boat'];
  const hasVehicle = lowerSymbols.some(s => vehicles.includes(s));
  const hasStuck = lowerSymbols.includes('lost') || lowerSymbols.includes('trapped');
  if (hasVehicle && hasStuck) {
    insights.push("Being lost or trapped with a vehicle suggests you feel unable to move forward in life despite having the means to do so, indicating internal rather than external obstacles");
  }

  // School + Exam
  if (lowerSymbols.includes('school') && lowerSymbols.includes('exam')) {
    insights.push("The school and exam combination often reflects feelings of being tested or judged in your waking life, possibly indicating impostor syndrome or fear of not measuring up");
  }

  // Mirror + Naked
  if (lowerSymbols.includes('mirror') && lowerSymbols.includes('naked')) {
    insights.push("Seeing yourself naked in a mirror suggests deep self-reflection and confronting your authentic self without any masks or pretenses");
  }

  return insights;
};

// Simulated AI interpretation service
export const interpretDream = async (dreamData: DreamData): Promise<DreamInterpretation> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2500));

  const moodMeaning = moodInterpretations[dreamData.mood as keyof typeof moodInterpretations];

  // Get merged symbol meanings
  const symbolMeanings = await getMergedSymbolMeanings();

  // Extract symbols from the dream content automatically
  const contentSymbols = await extractSymbolsFromContent(dreamData.content);

  // Combine manually entered symbols with extracted symbols
  const dreamSymbolMeanings: { [key: string]: string } = { ...contentSymbols };
  dreamData.symbols.forEach(symbol => {
    const lowerSymbol = symbol.toLowerCase();
    if (symbolMeanings[lowerSymbol as keyof typeof symbolMeanings]) {
      dreamSymbolMeanings[symbol] = symbolMeanings[lowerSymbol as keyof typeof symbolMeanings];
    }
  });

  // Get all symbols for combination analysis
  const allSymbols = [...Object.keys(contentSymbols), ...dreamData.symbols];
  const combinationInsights = analyzeSymbolCombinations(allSymbols);

  // Generate interpretation based on dream content, mood, and symbols
  let interpretation = "";

  // More varied interpretation templates based on mood
  const interpretationTemplates: { [key: string]: string[] } = {
    peaceful: [
      `This peaceful dream reflects a state of inner harmony and balance in your psyche. The tranquil ${dreamData.mood} quality ${moodMeaning}. `,
      `Your subconscious is expressing contentment through this ${dreamData.mood} dream, which ${moodMeaning}. `
    ],
    exciting: [
      `The vibrant, ${dreamData.mood} energy of this dream signals dynamic changes ahead. This energetic quality ${moodMeaning}. `,
      `Your psyche is buzzing with possibility in this ${dreamData.mood} dream, which ${moodMeaning}. `
    ],
    mysterious: [
      `This enigmatic dream holds secrets your unconscious is ready to reveal. The ${dreamData.mood} atmosphere ${moodMeaning}. `,
      `Shrouded in ${dreamData.mood} energy, this dream beckons you to explore deeper, as it ${moodMeaning}. `
    ],
    anxious: [
      `This ${dreamData.mood} dream is processing underlying concerns in your waking life. The tense emotional quality ${moodMeaning}. `,
      `Your unconscious is working through stress and worry in this ${dreamData.mood} dream, which ${moodMeaning}. `
    ],
    joyful: [
      `This ${dreamData.mood} dream radiates positive energy and emotional fulfillment. The uplifting mood ${moodMeaning}. `,
      `Brimming with ${dreamData.mood} energy, this dream celebrates aspects of your life that bring happiness, as it ${moodMeaning}. `
    ],
    dark: [
      `This ${dreamData.mood} dream explores shadow aspects of your psyche. The somber emotional tone ${moodMeaning}. `,
      `Venturing into ${dreamData.mood} territory, this dream confronts difficult emotions or repressed aspects, as it ${moodMeaning}. `
    ],
    scary: [
      `This ${dreamData.mood} dream brings fears to the surface for examination and healing. The frightening nature ${moodMeaning}. `,
      `Confronting terror in this ${dreamData.mood} dream is your psyche's way of building courage, as it ${moodMeaning}. `
    ],
    sad: [
      `This ${dreamData.mood} dream creates space for processing difficult emotions. The melancholic quality ${moodMeaning}. `,
      `Through this ${dreamData.mood} dream, your subconscious expresses sorrow that seeks acknowledgment, as it ${moodMeaning}. `
    ],
    romantic: [
      `This ${dreamData.mood} dream explores themes of love, connection, and desire. The tender emotional quality ${moodMeaning}. `,
      `Filled with ${dreamData.mood} energy, this dream reveals the heart's deepest longings, as it ${moodMeaning}. `
    ],
    adventurous: [
      `This ${dreamData.mood} dream reflects a spirit of exploration and possibility. The bold, daring quality ${moodMeaning}. `,
      `Brimming with ${dreamData.mood} energy, this dream encourages taking risks and embracing the unknown, as it ${moodMeaning}. `
    ],
    confusing: [
      `This ${dreamData.mood} dream mirrors the complexity you're navigating in waking life. The disorienting nature ${moodMeaning}. `,
      `Through ${dreamData.mood} imagery, your psyche is working to untangle complex thoughts and feelings, as it ${moodMeaning}. `
    ],
    surreal: [
      `This ${dreamData.mood} dream transcends ordinary logic to explore deeper truths. The dreamlike, otherworldly quality ${moodMeaning}. `,
      `Defying normal reality, this ${dreamData.mood} dream opens doorways to creative and symbolic understanding, as it ${moodMeaning}. `
    ],
    neutral: [
      `This ${dreamData.mood} dream presents information without strong emotional coloring. The balanced mood ${moodMeaning}. `,
      `The ${dreamData.mood} quality of this dream allows for objective observation, as it ${moodMeaning}. `
    ]
  };

  const moodTemplates = interpretationTemplates[dreamData.mood] || interpretationTemplates.neutral;
  interpretation += moodTemplates[Math.floor(Math.random() * moodTemplates.length)];

  // Count total symbols found
  const totalSymbols = Object.keys(dreamSymbolMeanings).length;

  if (totalSymbols > 0) {
    // Mention both manually entered and auto-detected symbols
    const autoDetected = Object.keys(contentSymbols);
    const manuallyEntered = dreamData.symbols;

    if (autoDetected.length > 0 && manuallyEntered.length === 0) {
      interpretation += `\n\nAnalyzing your dream description, I've identified ${autoDetected.length} significant symbol${autoDetected.length > 1 ? 's' : ''}: `;
    } else if (autoDetected.length > 0 && manuallyEntered.length > 0) {
      interpretation += `\n\nBeyond the symbols you noted, I've found additional meaningful elements in your dream: `;
    } else {
      interpretation += `\n\nThe symbols you've identified carry deep significance: `;
    }

    // Present the most important symbols with their meanings
    const symbolEntries = Object.entries(dreamSymbolMeanings).slice(0, 5);
    symbolEntries.forEach(([symbol, meaning], index) => {
      interpretation += `**${symbol.charAt(0).toUpperCase() + symbol.slice(1)}** ${meaning}`;
      if (index < symbolEntries.length - 1) {
        interpretation += "; ";
      } else {
        interpretation += ". ";
      }
    });

    if (totalSymbols > 5) {
      interpretation += `\n\nYour dream contains ${totalSymbols - 5} additional symbol${totalSymbols - 5 > 1 ? 's' : ''} that also contribute layers of meaning. `;
    }
  }

  // Add combination insights if any
  if (combinationInsights.length > 0) {
    interpretation += `\n\n**Symbol Interactions:** `;
    combinationInsights.forEach((insight, index) => {
      interpretation += insight;
      if (index < combinationInsights.length - 1) {
        interpretation += ". ";
      }
    });
    interpretation += ". ";
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

// Export function to seed Firebase with default symbols (one-time use)
export const seedFirebaseSymbols = async (): Promise<void> => {
  await seedInitialSymbols(defaultSymbolMeanings);
};

// Export the default symbols for reference
export { defaultSymbolMeanings };

export default { interpretDream, seedFirebaseSymbols };