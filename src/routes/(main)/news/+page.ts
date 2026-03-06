import type { PageLoad } from './$types';

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image?: string;
}

export const load: PageLoad = async ({ fetch }) => {
  try {
    const res = await fetch('/api/rss');

    if (!res.ok) {
      return { items: [] };
    }

    const xml = await res.text();
    const items: NewsItem[] = [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

    for (const match of itemMatches) {
      const item = match[1];

      const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '';
      const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? '';
      const description = item.match(/<description>([\s\S]*?)<\/description>/)?.[1]?.trim() ?? '';
      const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? '';
      const image = item.match(/<enclosure url="([^"]+)"/)?.[1] ?? undefined;

      const dateObj = new Date(pubDate);
      const formattedDate = !isNaN(dateObj.getTime())
        ? `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`
        : pubDate;

      const decodedDesc = description
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      const shortDesc = decodedDesc.length > 100 ? decodedDesc.slice(0, 100) + '…' : decodedDesc;

      items.push({ title, link, description: shortDesc, pubDate: formattedDate, image });
    }

    return { items };
  } catch (e) {
    return { items: [] };
  }
};

export const prerender = false;
export const ssr = false;