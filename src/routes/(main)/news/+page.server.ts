import type { PageServerLoad } from './$types';
import newsData from '$lib/assets/news.json';

export const load: PageServerLoad = async () => {
  return { items: newsData };
};