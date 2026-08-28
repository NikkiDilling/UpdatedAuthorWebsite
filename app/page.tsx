import Link from 'next/link';
import classes from './css/MainPage.module.scss';
import NewsletterForm from './components/NewsLetterForm';
import divider from "../public/assets/divider.webp";
import pfp from "../public/assets/pfp.gif";
import Image from 'next/image';
import bookcover from "../public/assets/PoM front cover.webp";
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (

    <div>
      <div className={classes.container}>

        <div className={classes.mainSection}>




          <div className={classes.section + " " + classes.bookIntro} >

            <Image className={classes.bookCover} src={bookcover} alt='book cover' />
            <div className={classes.sectionContent}>
              <h3>Prisoner of Magnolia Series</h3>
              <div>
                <span>Release Date: August 18th</span>
                <div>Prisoner of Magnolia the first book in Nicole D. Hansen's debut romantasy series, set in a dying elven world... </div>
              </div>
              <Link href='/books' className={classes.readMoreBtn}>Read more</Link>

            </div>

          </div>

          <Image src={divider} className={classes.divider} alt='divider' />

          <div className={classes.section}>

            <Image src={pfp} alt="profile image" className={classes.pfp} />
            <div className={classes.sectionContent}>
              <div>
                <div className={classes.text}>Hi! My name is Nicole. I write delicious slow burn romantasy with redeamable villains and plot-lines that will heal your inner child. </div>
                <div className={classes.text}>I also daylight as a software developer. </div>
              </div>
              <Link href='/about' className={classes.readMoreBtn} >Learn more about me</Link>
            </div>

          </div>

          <div className={classes.mobileView}>
            <Image src={divider} className={classes.divider} alt='divider' />
            <h3>Nicole's newsletter</h3>
            <p>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>
            <NewsletterForm />
          </div>




        </div>


        <div className={classes.recentPosts}>

          <div className={classes.desktopView}>
            <h3 >Nicole's newsletter</h3>
            <p>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>

            <NewsletterForm />

          </div>

          <div >
            {/* <Image src={divider} className={classes.divider} alt='divider'/> */}
            {/* <h4>Recent blog posts</h4> */}
            <div>
              {/* Blog posts will go here */}
            </div>

          </div>
        </div>
      </div>
       <Analytics />
    </div>

  );
}
