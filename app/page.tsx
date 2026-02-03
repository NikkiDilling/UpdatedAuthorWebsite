import Link from 'next/link';
import classes from './css/MainPage.module.scss';
import NewsletterForm from './components/NewsLetterForm';
import divider from "../public/assets/divider.webp";
import pfp from "../public/assets/pfp.gif";
import banner from "../public/assets/Elven Wastelands.png";
import Image from 'next/image';

export default function Home() {
  return (

    <div>

      <div className={classes.banner}>
         <img src={banner.src} alt="Elven Wastelands banner" className={classes.image}/> 
      </div>
      <div className={classes.container}>

        <div className={classes.mainSection}>

          <div className={classes.section}>
            
            <Image src={pfp} alt="profile image" className={classes.pfp} />
            <div className={classes.sectionContent}>
              <div>
                <div className={classes.text}>Hi! My name is Nicole D. Hansen, and I'm an indie author, from Denmark. </div>
                <div className={classes.text}>I write delicious slow burn romantasy with characters and plot-lines that will heal your inner child. </div>
                <div className={classes.text}>I also daylight as a software developer. </div>
              </div>
              <Link href='/About' className={classes.readMoreBtn} >Learn more about me</Link>
            </div>

          </div>

          <div className={classes.mobileView}>
            <Image src={divider} className={classes.divider} alt='divider'/>
            <h3>Nicole's newsletter</h3>
            <p>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>
            <NewsletterForm />
          </div>

          <Image src={divider} className={classes.divider} alt='divider'/>

          <div className={classes.section}>
            <div className={classes.sectionContent}>
              <h3>"Project Sunset"</h3>
              <div>
                <div>"Project Sunset" the first book of the Elven Wastelands series. It is my debut romantasy novel I’ve been writing for over 5 years...</div>
              </div>
              <Link href='/Books' className={classes.readMoreBtn}>Read more</Link>
            </div>
          </div>
        </div>


        <div className={classes.recentPosts}>

          <div className={classes.desktopView}>
            <h3>Sign up to my newsletter</h3>
            <p className={classes.mobileView}>Sign up for my newsletter and be the first to get book updates, writing tips, exclusive content, deals and so much more!</p>

            <NewsletterForm />
          </div>

          <div className=" unreleased">
            <Image src={divider} className={classes.divider} alt='divider'/>
            <h4>Recent blog posts</h4>
            <div>
              {/* Blog posts will go here */}

            </div>

          </div>
        </div>
      </div>
    </div>

  );
}
