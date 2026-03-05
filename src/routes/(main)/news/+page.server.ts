import type { PageServerLoad } from './$types';

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image?: string;
}

export const load: PageServerLoad = async () => {
  const RSS_URL = 'https://nagoyouth.ti-da.net/index.xml';

  try {
    const res = await fetch(RSS_URL);
    const xml = await res.text();

    // XMLをパース
    const items: NewsItem[] = [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

    for (const match of itemMatches) {
      const item = match[1];

      const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '';
      const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? '';
      const description = item.match(/<description>([\s\S]*?)<\/description>/)?.[1]?.trim() ?? '';
      const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? '';
      const image = item.match(/<enclosure url="([^"]+)"/)?.[1] ?? undefined;

      // 日付フォーマット変換 (例: "Thu, 18 Dec 2025 21:46:09 +0900" → "2025/12/18")
      const dateObj = new Date(pubDate);
      const formattedDate = !isNaN(dateObj.getTime())
        ? `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`
        : pubDate;

      // descriptionのHTMLエンティティを簡易デコード
      const decodedDesc = description
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      // 100文字で切り詰め
      const shortDesc = decodedDesc.length > 100 ? decodedDesc.slice(0, 100) + '…' : decodedDesc;

      items.push({ title, link, description: shortDesc, pubDate: formattedDate, image });
    }

    return { items };
  } catch (e) {
    console.error('RSS fetch failed:', e);
    return { items: [] };
  }
};