import { NextResponse } from 'next/server';
import axios from 'axios';
import settings from '../../settings.json';
import type { ICampaign } from '../../lib/newsletter';

// Checked on the server so the word never ships in the page's JavaScript and the
// newsletters are only fetched for someone who knows it. Override with NEWSLETTER_SECRET_WORD.
const SECRET_WORD = (process.env.NEWSLETTER_SECRET_WORD?.trim() || 'melon').toLowerCase();

// MailerLite's campaigns endpoint has no group query param. The group a campaign was
// sent to lives in its `filter` field, e.g. [[{ operator: 'in_any', args: ['groups', ['42']] }]].
const isSentToGroup = (campaign: ICampaign, groupId: string): boolean =>
    (campaign.filter ?? [])
        .flat()
        .some((condition) =>
            condition.args?.[0] === 'groups' &&
            Array.isArray(condition.args[1]) &&
            condition.args[1].map(String).includes(groupId));

async function fetchCampaigns(): Promise<ICampaign[]> {
    const token = process.env.NEXT_PUBLIC_NewsletterToken;
    const groupId = process.env.NEXT_PUBLIC_GroupId;
    if (!token) {
        throw new Error('NEXT_PUBLIC_NewsletterToken is not set. Add it to .env.local (see .env.example) and restart the dev server.');
    }
    if (!groupId) {
        throw new Error('NEXT_PUBLIC_GroupId is not set. Add it to .env.local (see .env.example) and restart the dev server.');
    }

    const res = await axios.get<{ data?: ICampaign[] }>(`${settings.baseUrl}/campaigns`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        params: { 'filter[status]': 'sent' },
    });

    return (res.data.data ?? [])
        .filter((campaign) => isSentToGroup(campaign, groupId))
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
        return NextResponse.json({ campaigns: await fetchCampaigns() });
    } catch (error) {
        // Log the status/message only: a full AxiosError includes the request headers, i.e. the API token.
        console.error('Could not load newsletters:', axios.isAxiosError(error)
            ? `${error.response?.status ?? error.code} ${error.message}`
            : error);
        return NextResponse.json({ error: 'unavailable' }, { status: 502 });
    }
}
