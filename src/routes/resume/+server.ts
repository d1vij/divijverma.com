import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const PDF_URL =
    'https://github.com/d1vij/resume/releases/download/latest/resume.pdf';

export const GET: RequestHandler = async ({ fetch }) => {
    const upstream = await fetch(PDF_URL);

    if (!upstream.ok || !upstream.body) {
        error(502, 'Could not fetch resume');
    }

    return new Response(upstream.body, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="resume.pdf"',
            'Cache-Control': 'public, max-age=300, s-maxage=3600'
        }
    });
};
