"use client";
import classes from './../css/BlogPage.module.scss';
import axios from "axios";
import settings from "../settings.json";
import { useEffect, useState } from "react";
import BlogPostPreview from '../components/BlogPostPreview';
import NewsletterForm from '../components/NewsLetterForm';
import divider from "../../public/assets/divider.webp";
import Image from 'next/image';

export interface ICampaign {
  id: string;
  name: string;
  status: string;
  created_at: string;
  scheduled_for: string;
  started_at: string;
  emails: ICampaignEmail[];
}

export interface ICampaignEmail {
  preview_url: string;
  plain_text: string;
}

export default function BlogPage() {
  const [campaigns, setCampaigns] = useState<ICampaign[] | null>(null);
  const token = process.env.NEXT_PUBLIC_NewsletterToken;

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {

      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + token
      };

      const res = await axios.get((settings.baseUrl + "/campaigns"), { headers: headers });

      const data: ICampaign[] = await res?.data?.data;
      const filteredData = data.filter(campaign => campaign.status === "sent");
      console.log(data);
      setCampaigns(filteredData);


    } catch (error) {
      console.error("Error submitting form:", error);
    }

  };

  return (
    <div className={classes.container}>

      <h3>Newsletter Archive</h3>

      <div className={classes.description}>Read previous newsletters where I share my writing progress, exclusive book content, writing advice and life updates. </div>

      <div className={classes.body}>

        {(campaigns === null || campaigns.length <= 0) ? (
          <div className={classes.postsContainer}>
            <div>There are no posts yet. Come back later</div>
          </div>

        ) : (
          <div className={classes.postsContainer}>
            {
              campaigns.map((campaign: any) => (
                <BlogPostPreview key={campaign.id} campaign={campaign} />

              ))
            }
          </div>

        )}

        <Image src={divider} className={classes.divider} alt="divider" />

        <div className={classes.newsletterSignup}>
          <h3>Sign up for the newsletter</h3>
          <NewsletterForm />
        </div>
      </div>

    </div>
  );
}