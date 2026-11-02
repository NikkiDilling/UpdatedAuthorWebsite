export interface ICampaignEmail {
    subject: string;
    preview_url: string;
    plain_text: string;
    preheader: string;
}

export interface ICampaign {
    id: string;
    name: string;
    status: string;
    created_at: string;
    scheduled_for: string;
    started_at: string;
    emails: ICampaignEmail[];
    // Who the campaign was sent to, e.g. [["In any group: Newsletter"]].
    filter_for_humans?: string[][];
}
