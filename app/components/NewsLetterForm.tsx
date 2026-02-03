"use client";
import { useState } from "react";
import settings from "../settings.json";
import axios from "axios";
import { Button, CircularProgress, TextField } from "@mui/material";
import classes from './../css/Newsletterform.module.scss';
import Link from "next/link";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<string | null>(null);
    const token = process.env.NEXT_PUBLIC_NewsletterToken;
    const groupId = process.env.NEXT_PUBLIC_GroupId;

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            setStatus("loading");
             

            const body = {
                email: email,
                groups: [groupId]
            }

            const headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            };

             
            const res = await axios.post((settings.baseUrl + "/subscribers"), body, { headers: headers });

            const data = await res;
            console.log(data);
             
            setStatus("done");
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }

    };

    return (
        <div>
            {status === "loading" && (
                <CircularProgress />
            )}
            {status === null && (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div>{status}</div>
                    <TextField
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Button variant="contained" type="submit" className={classes.subscribeBtn}>Subscribe</Button>
                </form>
            )}
            {status === "done" && (
                <div>Thank you for subscribing!</div>
            )}
            {status === "error" && (
                <div>
                    <div>There was an error.</div>
                    <Link href="https://preview.mailerlite.io/forms/1861321/170854974708778198/share" >Try again</Link>
                </div>

            )}
        </div>

    );
}
