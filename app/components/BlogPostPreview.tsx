import Link from "next/link";
import classes from "../css/BlogPost.module.scss";
import type { ICampaign } from "../lib/newsletter";

export default function BlogPostPreview(props: { campaign: ICampaign }) {
    const { campaign } = props;
    const previewUrl = campaign.emails?.[0]?.preview_url;
    const date = new Date(campaign.started_at.replace(' ', 'T')).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={classes.containerPreview}>
            <div className={classes.title}>{campaign.emails[0].subject}</div>
            <div className={classes.subtitle}>{campaign.emails[0].preheader || "^_____^"}</div>
            <div className={classes.footer}>
                <div className={classes.date}>{date}</div>
                {previewUrl && (
                    <Link className={classes.btn} href={previewUrl} target="_blank" rel="noopener noreferrer">Read post</Link>
                )}
            </div>

        </div>
    );
}
