import { NextResponse } from 'next/server';
import axios from 'axios';
import settings from '../../settings.json';
import type { ICampaign } from '../../lib/newsletter';

// Checked on the server so the word never ships in the page's JavaScript and the
// newsletters are only fetched for someone who knows it. Override with NEWSLETTER_SECRET_WORD.
const SECRET_WORD = (process.env.NEWSLETTER_SECRET_WORD?.trim() || 'imtheelementalmaster').toLowerCase();

// MailerLite's campaigns endpoint has no group query param. The groups a campaign was sent to
// are in `filter_for_humans`, e.g. [["In any group: Newsletter"]] or [["In any group: ARCs, ARC 2"]].
const GROUP_PREFIX = 'In any group: ';

const isSentToGroup = (campaign: ICampaign, groupName: string): boolean => {
    const conditions = (campaign.filter_for_humans ?? []).flat();

    return conditions.some((condition) => {
        if (!condition.startsWith(GROUP_PREFIX)) {
            return false;
        }

        const groupNames = condition.slice(GROUP_PREFIX.length).split(',').map((name) => {
            return name.trim();
        });

        return groupNames.includes(groupName);
    });
};


async function fetchCampaigns(): Promise<ICampaign[]> {
    const token = process.env.NEXT_PUBLIC_NewsletterToken;

    if (!token) {
        throw new Error('NEXT_PUBLIC_NewsletterToken is not set. Add it to .env.local (see .env.example) and restart the dev server.');
    }

    const res = await axios.get<{ data?: ICampaign[] }>(`${settings.baseUrl}/campaigns`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        params: { 'filter[status]': 'sent' },
    });


    const data = (res.data.data ?? [])
        .filter((campaign) => {
            return isSentToGroup(campaign, 'Newsletter');
        })
        .sort((a, b) => {
            return (b.started_at ?? '').localeCompare(a.started_at ?? '');
        });

    return data;
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
