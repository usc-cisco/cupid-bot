import axios from 'axios';
import { env } from '../config/env';
import type { TenorApiResponse, GifResult } from '../types/TenorApiResponse';

export class GifService {
  /**
   * Returns gif URLs based on a `q` search parameter.
   *
   * @param q the search query
   * @param limit the number of gif URLs to return
   */
  public static async searchGifs(
    q: string,
    limit: number = 1
  ): Promise<string[]> {
    const BASE_URL = 'https://tenor.googleapis.com/v2/search';

    try {
      const { data } = await axios.get<TenorApiResponse>(BASE_URL, {
        params: {
          q,
          key: env.TENOR_API_KEY,
          limit,
        },
      });

      return data.results.map((result: GifResult) => result.url);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
      throw error;
    }
  }
}
