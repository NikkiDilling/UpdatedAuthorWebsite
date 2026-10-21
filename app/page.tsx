import Link from 'next/link';
import classes from './css/MainPage.module.scss';
import NewsletterForm from './components/NewsLetterForm';
import authorPhoto from "../public/assets/author photo.jpg";
import Image from 'next/image';
import bookcover from "../public/assets/PoM front cover.webp";

export default function Home() {
  return (
    <div className={classes.container}>

      <section className={classes.screen}>
        <div className={classes.screenInner}>
          <Image
            src={authorPhoto}
            alt="Nicole D. Hansen holding Prisoner of Magnolia"
            className={classes.authorPhoto}
            priority
          />
          <div className={classes.sectionContent}>
            <h2>Dark romantic fantasy author</h2>
            <h3>Nicole D. Hansen</h3>
            
            <div className={classes.text}>Nicole writes delicious slow burn romantasy with redeemable villains and plot-lines that will heal your inner child.</div>
            <div className={classes.text}>She also daylights as a software developer.</div>
            <Link href='/about' className={classes.readMoreBtn}>About Nicole</Link>
          </div>
        </div>
      </section>

      <section className={classes.screen}>
        <div className={classes.screenInner}>
          <Image className={classes.bookCover} src={bookcover} alt='book cover' />
          <div className={classes.sectionContent}>
            <h3>Prisoner of Magnolia Series</h3>
            <span className={classes.release}>Release Date: August 18th, 2026</span>
            <div className={classes.text}>Prisoner of Magnolia is the first book in Nicole D. Hansen's debut romantasy series, set in a dying elven world...</div>
            <Link href='/books' className={classes.readMoreBtn}>Read more</Link>
          </div>
        </div>
      </section>

      <section className={classes.screen}>
        <div className={classes.newsletterCard}>
          <h3>Nicole's newsletter</h3>
          <p>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
