import { NextResponse } from 'next/server';
import settings from '../../settings.json';
import type { ICampaign } from '../../lib/newsletter';

// Checked on the server so the word never ships in the page's JavaScript and the
// newsletters are only fetched for someone who knows it. Override with NEWSLETTER_SECRET_WORD.
const SECRET_WORD = (process.env.NEWSLETTER_SECRET_WORD ?? 'melon').trim().toLowerCase();
const MAX_PAGES = 10;

async function fetchSentCampaigns(): Promise<ICampaign[]> {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_NewsletterToken,
    };

    const campaigns: ICampaign[] = [];
    let url: string | null = `${settings.baseUrl}/campaigns`;

    for (let page = 0; url && page < MAX_PAGES; page++) {
        const res: Response = await fetch(url, { headers, cache: 'no-store' });
        if (!res.ok) throw new Error(`MailerLite responded ${res.status}`);

        const body = await res.json();
        campaigns.push(...((body.data ?? []) as ICampaign[]));

        // Follow pagination, but never send the token anywhere other than MailerLite.
        const next: unknown = body.links?.next;
        url = typeof next === 'string' && next.startsWith(settings.baseUrl) ? next : null;
    }

    return campaigns
        .filter((campaign) => campaign.status === 'sent')
        .sort((a, b) => (b.started_at ?? '').localeCompare(a.started_at ?? ''));
}

export async function POST(request: Request) {
    let word = '';
    try {
        word = String((await request.json()).word ?? '');
    } catch {
        // Malformed body: treated as a wrong word below.
    }

    if (word.trim().toLowerCase() !== SECRET_WORD) {
        return NextResponse.json({ error: 'wrong word' }, { status: 401 });
    }

    try {
        return NextResponse.json({ campaigns: await fetchSentCampaigns() });
    } catch (error) {
        console.error('Could not load newsletters:', error);
        return NextResponse.json({ error: 'unavailable' }, { status: 502 });
    }
}
