import  Link from "next/link";
import classes from "../css/BlogPost.module.scss";
import type { ICampaign } from "../Blog/page";

export default function BlogPostPreview(props: { campaign: ICampaign }) {

    return (

        <div className={classes.containerPreview}>
            <div key={props.campaign.id} className={classes.title}>{props.campaign.name}</div>
            <div>{new Date(props.campaign.started_at).toLocaleDateString()}</div>
            <Link className={classes.btn} href={props.campaign.emails[0].preview_url} target="_blank" rel="noopener noreferrer">Read post</Link>
        </div>

    );
}