import axios from 'axios';

export interface GeoLocation {
  latitude: number;
  longitude: number;
  timezone: string;
  formattedAddress: string;
}

export class GeocodingService {
  private static readonly NOMINATIM_API = 'https://nominatim.openstreetmap.org/search';
  private static readonly TIMEZONE_API = 'https://timeapi.io/api/timezone/coordinate';

  static async geocodeLocation(query: string): Promise<GeoLocation | null> {
    try {
      const response = await axios.get(this.NOMINATIM_API, {
        params: {
          q: query,
          format: 'json',
          limit: 1,
          addressdetails: 1
        },
        headers: {
          'User-Agent': 'MysticSanctuary/1.0'
        }
      });

      if (response.data && response.data.length > 0) {
        const location = response.data[0];
        const latitude = parseFloat(location.lat);
        const longitude = parseFloat(location.lon);

        const timezone = await this.getTimezone(latitude, longitude);

        return {
          latitude,
          longitude,
          timezone: timezone || 'UTC',
          formattedAddress: location.display_name
        };
      }

      return null;
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  }

  static async getTimezone(latitude: number, longitude: number): Promise<string | null> {
    try {
      const response = await axios.get(this.TIMEZONE_API, {
        params: {
          latitude,
          longitude
        }
      });

      return response.data?.timeZone || null;
    } catch (error) {
      console.error('Timezone lookup error:', error);
      return this.estimateTimezone(longitude);
    }
  }

  private static estimateTimezone(longitude: number): string {
    const offset = Math.round(longitude / 15);
    if (offset === 0) return 'UTC';
    const sign = offset > 0 ? '+' : '';
    return `UTC${sign}${offset}`;
  }

  static parseLocationInput(input: string): {
    query: string;
    isHospital: boolean;
    isAddress: boolean;
  } {
    const hospitalKeywords = ['hospital', 'medical center', 'clinic', 'health center'];
    const isHospital = hospitalKeywords.some(keyword =>
      input.toLowerCase().includes(keyword)
    );

    const addressPattern = /^\d+\s+[\w\s]+(?:street|st|avenue|ave|road|rd|boulevard|blvd|lane|ln|drive|dr|court|ct|place|pl|way)/i;
    const isAddress = addressPattern.test(input);

    return {
      query: input,
      isHospital,
      isAddress
    };
  }

  static async geocodeWithFallback(
    primary: string,
    city?: string,
    state?: string,
    country?: string
  ): Promise<GeoLocation | null> {
    const queries = [
      primary,
      `${primary}, ${city}`,
      `${primary}, ${city}, ${state}`,
      `${primary}, ${city}, ${state}, ${country}`,
      `${city}, ${state}, ${country}`,
      `${city}, ${state}`
    ].filter(Boolean);

    for (const query of queries) {
      const result = await this.geocodeLocation(query);
      if (result) return result;
    }

    return null;
  }
}