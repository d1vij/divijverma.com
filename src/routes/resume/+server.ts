import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const PDF_URL =
    'https://github.com/d1vij/resume/releases/download/latest/resume.pdf';

export const GET: RequestHandler = async ({ fetch, request }) => {
    const headers = new Headers();
    const inm = request.headers.get('if-none-match');
    const ims = request.headers.get('if-modified-since');
    if (inm) headers.set('If-None-Match', inm);
    if (ims) headers.set('If-Modified-Since', ims);

    const upstream = await fetch(PDF_URL, {
        headers,
        cache: 'no-store',
        cf: { cacheTtl: 0, cacheEverything: false }
    });

    const resHeaders = new Headers({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"',
        'Cache-Control': 'public, no-cache'
    });

    const etag = upstream.headers.get('etag');
    const lastModified = upstream.headers.get('last-modified');
    if (etag) resHeaders.set('ETag', etag);
    if (lastModified) resHeaders.set('Last-Modified', lastModified);

    if (upstream.status === 304) {
        return new Response(null, { status: 304, headers: resHeaders });
    }

    if (!upstream.ok || !upstream.body) {
        error(502, 'Could not fetch resume');
    }

    return new Response(upstream.body, { headers: resHeaders });
};
