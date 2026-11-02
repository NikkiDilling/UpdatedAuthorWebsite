export interface ICampaignEmail {
    preview_url: string;
    plain_text: string;
}

export interface ICampaignFilterCondition {
    operator: string;
    args: unknown[];
}

export interface ICampaign {
    id: string;
    name: string;
    status: string;
    created_at: string;
    scheduled_for: string;
    started_at: string;
    emails: ICampaignEmail[];
    // Who the campaign was sent to; group targets look like args: ['groups', ['<group id>']].
    filter?: ICampaignFilterCondition[][];
}
