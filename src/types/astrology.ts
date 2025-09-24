export interface BirthChart {
  id: string;
  name: string;
  birthDate: Date;
  birthTime: string;
  birthPlace: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
  };
  houses: House[];
  planets: PlanetPosition[];
  aspects: Aspect[];
  nodes: {
    north: ZodiacPosition;
    south: ZodiacPosition;
  };
  chiron: ZodiacPosition;
}

export interface House {
  number: number;
  sign: ZodiacSign;
  degree: number;
  ruler: string;
  interpretation: string;
}

export interface PlanetPosition {
  planet: Planet;
  sign: ZodiacSign;
  degree: number;
  house: number;
  isRetrograde: boolean;
  interpretation: string;
}

export interface Aspect {
  planet1: Planet;
  planet2: Planet;
  type: AspectType;
  degree: number;
  orb: number;
  interpretation: string;
}

export type Planet =
  | 'sun'
  | 'moon'
  | 'mercury'
  | 'venus'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'
  | 'pluto';

export type ZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export type AspectType =
  | 'conjunction'
  | 'sextile'
  | 'square'
  | 'trine'
  | 'opposition'
  | 'quincunx';

export interface ZodiacPosition {
  sign: ZodiacSign;
  degree: number;
  minute: number;
}

export interface MoonPhase {
  phase: string;
  illumination: number;
  age: number;
  distance: number;
  nextNew: Date;
  nextFull: Date;
}

export interface Transit {
  planet: Planet;
  currentSign: ZodiacSign;
  aspectTo: PlanetPosition;
  type: AspectType;
  exact: Date;
  interpretation: string;
}

export interface Synastry {
  person1: BirthChart;
  person2: BirthChart;
  aspects: SynastryAspect[];
  composite: BirthChart;
}

export interface SynastryAspect extends Aspect {
  person1Planet: Planet;
  person2Planet: Planet;
  harmonyScore: number;
}