import classes from '../css/ProjectSunset.module.scss';
import banner from "../../public/assets/Elven Wastelands.png";
import map from "../../public/assets/world map.webp";
import divider from "../../public/assets/divider.webp";
import Image from 'next/image';
import { CircularProgress } from '@mui/material';

export default function ProjectSunsetPage() {

  return (
    <div className={classes.container} id='Intro'>
      <main>
        <div>



          <div className={classes.textContainer}>

            <h2 className={classes.intro}>
              <div>Enter a world of elves, elemental spirits and delicious villains!</div>
              <br />
              <div>Start the journey with book 1: <span className={classes.bookTitle}>Prisoner of Magnolia</span> .</div>

            </h2>



            <h3 style={{ margin: "20px auto" }}>Synopsis</h3>
            <div className={classes.text}>
              Something had been clawing at the back of Elayah’s mind.
            </div>
            <div className={classes.text}>
              As the heir to the throne of Elria, she was just supposed to retrieve her elemental power. In and out. Quick. But in her trip to her subconsciousness, the elemental power wasn't the only thing she brought back to a throne room full of watchful eyes. One of those gazes belonged to an old enemy from the north.
            </div>

            <div className={classes.text}>
              What was supposed to be a cheerful celebration turned into the re-engulfed flames of the last war as the northern king threatened her kingdom. She’d hoped it was just an intimidation tactic, but when they invaded she lost everything.
            </div>

            <div className={classes.text}>
              Her parents were dead, Tayrem captured and herself wed against her will, used as a pawn in Prince Rayn’s hands. Rayn has his own agenda for Elayah and Tayrem, one of trials and revenge. But even he couldn’t guess the outcome of his games…
            </div>
            <div className={classes.text}>
              Trapped in an impossible situation, Elayah’s world crumbles down brick by brick as her captor unveils the secrets she’d been blind to all her life. Will she succumb to the darkness and give up, or will she save Tayrem and fight, defeating the odds against her?
            </div>
          </div>

          <div className={classes.quotes}>
            <div>"Even demons despise the dark."</div>
          </div>

          <Image src={divider} className={classes.divider} alt="divider" />
          <div>
            <Image
              className={classes.map}
              src={map}
              alt="World Map"
              loading="lazy"
            />
            <div style={{ textAlign: "center" }}>Map (unofficial)</div>
          </div>



          <Image src={divider} className={classes.divider} alt="divider" />

          <div className={classes.textContainer}>
            <h2 style={{ textAlign: "center" }}> Prisoner of Magnolia series</h2>
            <div className={classes.text}> Prisoner of Magnolia is an ongoing series, with the first book being <span className={classes.bookTitle}>Prisoner of Magnolia</span>, set to release August 18th 2026.</div>

            <div className={classes.statusContainer}>
              <CircularProgress
                enableTrackSlot
                variant="determinate"
                value={85}
                aria-label="Export data"
              />
              <div>
                <div>Book 1 status:</div>
                <div>Copy Edits</div>
              </div>

            </div>
            <div className={classes.statusContainer}>
              <CircularProgress
                enableTrackSlot
                variant="determinate"
                value={5}
                aria-label="Export data"
              />
              <div>
                <div>Book 2 status:</div>
                <div>Plotting</div>
              </div>

            </div>

          </div>



        </div>

      </main>



    </div>
  );
}