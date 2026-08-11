import classes from '../css/ProjectSunset.module.scss';
import bookcover from "../../public/assets/ebook cover.webp";
//import map from "../../public/assets/world map.webp";
import mapOfficial from "../../public/assets/Gaudelir-map.webp";
import divider from "../../public/assets/divider.webp";
import Image from 'next/image';
import { CircularProgress } from '@mui/material';

export default function ProjectSunsetPage() {

  return (
    <div className={classes.container} id='Intro'>
      <main>
        <div>

          <div className={classes.textContainer}>

            <div className={classes.intro}>

              <Image
                className={classes.bookcover}
                src={bookcover}
                alt="book cover"
              />


              <div>
                <div className={classes.title}>Prisoner Of Magnolia Series</div>
                <div className={classes.subtitle}>Enter a world of elves, elemental spirits and delicious villains!</div>

                <div>
                  <div className={classes.text}>
                    The elven realm of Gaudelir hasn’t known war for a century since a fire spirit ripped the continent in two. But the balance of power changes the day of Princess Elayah’s elemental ceremony.
                  </div>
                  <div className={classes.text}>
                    Elayah Lorethain has never had any aptitude for magic. When she is expected to venture into her subconscious to retrieve her elemental power, she is convinced she will fail. But when she returns, her power isn’t the only thing she brings back.
                  </div>

                  <div className={classes.text}>
                    A darkness follows her, filling her mind with vicious whispers and trying to claw its way out. Elayah is weak. Naive. She isn't ready to rule and that's why her parents are still hiding things from her in the archive beneath the palace. And with tensions brewing between her and her childhood best friend and guard—Tayrem—she’s torn between duty and love.
                  </div>

                  <div className={classes.text}>
                    When the enemy kingdom invades, and Tayrem’s life is on the line, there is only one way she can save him. Forced to marry the enemy king, Elayah has to face the darkness within herself, the secrets of her kingdom, and the desires of her heart that she's been pushing down for decades.
                  </div>
                </div>
              </div>


            </div>

          </div>

          <div className={classes.quotes}>
            <div>"Even demons despise the dark."</div>
          </div>

          <Image src={divider} className={classes.divider} alt="divider" />
          <div>
            <Image
              className={classes.map}
              src={mapOfficial}
              alt="World Map"
              loading="lazy"
            />
            <div style={{ textAlign: "center" }}>Map of Gaudelir</div>
          </div>



          <Image src={divider} className={classes.divider} alt="divider" />

          <div className={classes.textContainer}>
            <h2 style={{ textAlign: "center" }}> Prisoner of Magnolia series</h2>
            <div className={classes.text}> Prisoner of Magnolia is an ongoing series, with the first book being <span className={classes.bookTitle}>Prisoner of Magnolia</span>, set to release August 18th 2026.</div>

            <div className={classes.statusContainer}>
              <CircularProgress
                enableTrackSlot
                variant="determinate"
                value={100}
                aria-label="Export data"
              />
              <div>
                <div>Book 1 status:</div>
                <div>Done!</div>
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
            <div className={classes.statusContainer}>
              <CircularProgress
                enableTrackSlot
                variant="determinate"
                value={1}
                aria-label="Export data"
              />
              <div>
                <div>Book 3 status:</div>
                <div>Plotting</div>
              </div>

            </div>

          </div>



        </div>

      </main>

    </div>
  );
}