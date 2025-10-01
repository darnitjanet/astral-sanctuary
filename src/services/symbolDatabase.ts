import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  Timestamp,
  updateDoc,
  doc,
  increment
} from 'firebase/firestore';

export interface DreamSymbol {
  id?: string;
  symbol: string;
  meaning: string;
  submittedBy?: string; // 'system' or 'community'
  votes: number;
  dateAdded: Date | Timestamp;
  status: 'pending' | 'approved' | 'rejected';
}

const SYMBOLS_COLLECTION = 'dreamSymbols';

// Fetch all approved symbols from Firebase
export const fetchSymbolsFromFirebase = async (): Promise<{ [key: string]: string }> => {
  try {
    const symbolsRef = collection(db, SYMBOLS_COLLECTION);
    const q = query(symbolsRef, orderBy('votes', 'desc'));
    const querySnapshot = await getDocs(q);

    const symbols: { [key: string]: string } = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data() as DreamSymbol;
      // Only include approved symbols
      if (data.status === 'approved') {
        symbols[data.symbol.toLowerCase()] = data.meaning;
      }
    });

    return symbols;
  } catch (error) {
    console.error('Error fetching symbols from Firebase:', error);
    return {};
  }
};

// Submit a new symbol suggestion
export const submitSymbolSuggestion = async (
  symbol: string,
  meaning: string
): Promise<boolean> => {
  try {
    const symbolsRef = collection(db, SYMBOLS_COLLECTION);

    await addDoc(symbolsRef, {
      symbol: symbol.toLowerCase().trim(),
      meaning: meaning.trim(),
      submittedBy: 'community',
      votes: 1, // Start with 1 vote
      dateAdded: Timestamp.now(),
      status: 'approved' // Auto-approve for now (you can change to 'pending' if you want manual review)
    });

    return true;
  } catch (error) {
    console.error('Error submitting symbol:', error);
    return false;
  }
};

// Vote on a symbol (upvote)
export const voteOnSymbol = async (symbolId: string): Promise<boolean> => {
  try {
    const symbolRef = doc(db, SYMBOLS_COLLECTION, symbolId);
    await updateDoc(symbolRef, {
      votes: increment(1)
    });
    return true;
  } catch (error) {
    console.error('Error voting on symbol:', error);
    return false;
  }
};

// Get top symbols by votes
export const getTopSymbols = async (limitCount: number = 10): Promise<DreamSymbol[]> => {
  try {
    const symbolsRef = collection(db, SYMBOLS_COLLECTION);
    const q = query(
      symbolsRef,
      orderBy('votes', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);

    const symbols: DreamSymbol[] = [];
    querySnapshot.forEach((doc) => {
      symbols.push({
        id: doc.id,
        ...doc.data()
      } as DreamSymbol);
    });

    return symbols;
  } catch (error) {
    console.error('Error fetching top symbols:', error);
    return [];
  }
};

// Initialize Firebase with our existing symbols (one-time operation)
export const seedInitialSymbols = async (symbols: { [key: string]: string }): Promise<void> => {
  try {
    const symbolsRef = collection(db, SYMBOLS_COLLECTION);

    // Check if we already have symbols
    const querySnapshot = await getDocs(symbolsRef);
    if (!querySnapshot.empty) {
      console.log('Symbols already exist in Firebase, skipping seed');
      return;
    }

    // Add each symbol
    const promises = Object.entries(symbols).map(([symbol, meaning]) =>
      addDoc(symbolsRef, {
        symbol: symbol.toLowerCase(),
        meaning: meaning,
        submittedBy: 'system',
        votes: 0,
        dateAdded: Timestamp.now(),
        status: 'approved'
      })
    );

    await Promise.all(promises);
    console.log(`Successfully seeded ${promises.length} symbols to Firebase`);
  } catch (error) {
    console.error('Error seeding symbols:', error);
  }
};
