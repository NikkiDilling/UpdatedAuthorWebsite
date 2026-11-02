"use client";

import { FormEvent, useEffect, useState } from 'react';
import classes from '../css/BlogPage.module.scss';
import BlogPostPreview from '../components/BlogPostPreview';
import NewsletterForm from '../components/NewsLetterForm';
import type { ICampaign } from '../lib/newsletter';

type Status = 'checking' | 'locked' | 'loading' | 'open';

const STORAGE_KEY = 'blogSecretWord';

export default function BlogPage() {
  const [status, setStatus] = useState<Status>('checking');
  const [word, setWord] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);

  // The word is checked on the server; this just reflects the outcome.
  const unlock = async (attempt: string) => {
    setStatus('loading');
    setMessage(null);
    try {
      const res = await fetch('/api/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: attempt }),
      });

      if (res.status === 401) {
        sessionStorage.removeItem(STORAGE_KEY);
        setMessage("That's not the secret word. Try again!");
        setStatus('locked');
        return;
      }
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = await res.json();
      sessionStorage.setItem(STORAGE_KEY, attempt);
      setCampaigns(data.campaigns ?? []);
      setStatus('open');
    } catch (error) {
      console.error('Could not load newsletters:', error);
      setMessage("The newsletters couldn't be loaded right now. Please try again later.");
      setStatus('locked');
    }
  };

  // Skip the gate on a refresh within the same browser tab.
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      unlock(saved);
    } else {
      setStatus('locked');
    }
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (word.trim()) unlock(word);
  };

  return (
    <div className={classes.page}>
      <p className={classes.eyebrow}>Blog</p>
      <h1 className={classes.heading}>Newsletter Archive</h1>
      <p className={classes.intro}>
        Read previous newsletters where I share my writing progress, exclusive book content, writing advice and life updates.
      </p>

      {(status === 'checking' || status === 'loading') && (
        <p className={classes.status}>Loading…</p>
      )}

      {status === 'locked' && (
        <form className={classes.gate} onSubmit={handleSubmit}>
          <label htmlFor="secret-word" className={classes.gateLabel}>
            This archive is for those in on the secret. What's the secret word?
          </label>
          <input
            id="secret-word"
            className={classes.gateInput}
            type="text"
            value={word}
            onChange={(event) => setWord(event.target.value)}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="Secret word"
          />
          <button type="submit" className={classes.gateButton}>Unlock</button>
          {message && <p className={classes.gateMessage} role="alert">{message}</p>}
        </form>
      )}

      {status === 'open' && (
        campaigns.length > 0 ? (
          <div className={classes.posts}>
            {campaigns.map((campaign) => (
              <BlogPostPreview key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className={classes.noPosts}>There are no posts yet. Come back later</div>
        )
      )}

      <div className={classes.signup}>
        <h3>Sign up for the newsletter</h3>
        <NewsletterForm />
      </div>
    </div>
  );
}
