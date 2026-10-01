import classes from '../css/ContactPage.module.scss';

export default function ContactPage() {

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <p className={classes.eyebrow}>Contact</p>
        <h1 className={classes.heading}>Come say hi!</h1>
        <p className={classes.intro}>
          Questions about the books, want to collaborate, or just want to talk about elves? Find me here.
        </p>

        <div className={classes.channels}>
          <a className={classes.channel} href="mailto:nicoledhansen.mail@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
              <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
            </svg>
            <span className={classes.channelText}>
              <span className={classes.channelName}>Email</span>
              <span className={classes.channelHandle}>nicoledhansen.mail@gmail.com</span>
            </span>
          </a>

          <a className={classes.channel} href="https://www.instagram.com/ndhansen_" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            <span className={classes.channelText}>
              <span className={classes.channelName}>Instagram</span>
              <span className={classes.channelHandle}>@ndhansen_</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
