export interface ICampaignEmail {
    preview_url: string;
    plain_text: string;
}

export interface ICampaign {
    id: string;
    name: string;
    status: string;
    created_at: string;
    scheduled_for: string;
    started_at: string;
    emails: ICampaignEmail[];
}
