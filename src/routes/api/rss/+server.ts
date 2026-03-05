import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  try {
    const res = await fetch('https://nagoyouth.ti-da.net/index.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SvelteKit)',
        'Accept': 'application/rss+xml, application/xml, text/xml'
      }
    });

    if (!res.ok) {
      return new Response('fetch failed', { status: 500 });
    }

    const xml = await res.text();

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300'
      }
    });
  } catch (e) {
    return new Response('error', { status: 500 });
  }
};