import { RequestHandler } from '@sveltejs/kit';
import { getColdest } from '$lib/serverUtils';

export const get: RequestHandler = async () => {
  const weatherData = await getColdest(false);

  return {
    body: {
      weatherData
    }
  };
};
