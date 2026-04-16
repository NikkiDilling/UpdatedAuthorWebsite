"use client";
import classes from './../css/BlogPage.module.scss';
import axios from "axios";
import settings from "../settings.json";
import { useEffect, useState } from "react";
import BlogPostPreview from '../components/BlogPostPreview';
import NewsletterForm from '../components/NewsLetterForm';
import divider from "../../public/assets/divider.webp";
import Image from 'next/image';
import { Skeleton } from '@mui/material';

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
  const [dataLoaded, setDataLoaded] = useState(false);
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
      setDataLoaded(true);


    } catch (error) {
      console.error("Error submitting form:", error);
           setDataLoaded(true);
    }

  };

  return (
    <div className={classes.container}>

      <h3>Newsletter Archive</h3> {/* is not on 1 line in mobile view */}

      <div className={classes.bodyContainer}>
        <div>
          <div className={classes.description}>Read previous newsletters where I share my writing progress, exclusive book content, writing advice and life updates. </div>

          <div className={classes.body}>

            {dataLoaded === false && (
              <div className={classes.postsContainer}>
                <Skeleton
                  sx={{ bgcolor: 'grey.200', margin: "15px" }}
                  variant="rectangular"
                  width={210}
                  height={118}
                  
                />
                <Skeleton
                  sx={{ bgcolor: 'grey.200', margin: "15px" }}
                  variant="rectangular"
                  width={210}
                  height={118}
                />
                <Skeleton
                  sx={{ bgcolor: 'grey.200', margin: "15px" }}
                  variant="rectangular"
                  width={210}
                  height={118}
                />
              </div>
            )

            }
            {((campaigns === null || campaigns.length <= 0) && dataLoaded) ? (
              <div className={classes.postsContainer}>
                <div className={classes.noPosts}>There are no posts yet. Come back later</div>
              </div>

            ) : (
              <div className={classes.postsContainer}>
                {campaigns && campaigns.map((campaign: any) => (
                    <BlogPostPreview key={campaign.id} campaign={campaign} />

                  ))
                }
              </div>

            )}
          </div>

          <Image src={divider} className={classes.divider} alt="divider" />
        </div>


        <div className={classes.newsletterSignup}>
          <h3>Sign up for the newsletter</h3> {/* push this a bit higher up (next to title) */}
          <NewsletterForm />
        </div>

      </div>

    </div >
  );
}