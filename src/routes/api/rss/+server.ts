import type { RequestHandler } from './$types';
import { RSS_URL } from '$env/static/private';

export const GET: RequestHandler = async () => {
  try {
    const res = await fetch(RSS_URL);

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
    return new Response(`error: ${String(e)}`, { status: 500 });
  }
};