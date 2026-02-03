import classes from '../css/ProjectSunset.module.scss';
import banner from "../../public/assets/Elven Wastelands.png";
import map from "../../public/assets/world map.webp";
import divider from "../../public/assets/divider.webp";
import Image from 'next/image';

export default function ProjectSunsetPage() {

  return (
    <div className={classes.container} id='Intro'>
      <div className={classes.banner}>
        <Image src={banner} alt="Elven Wastelands banner" />
      </div>
      <main>
        <div>

          <div className={classes.quotes}>
            <div>"Even demons don't like the dark."</div>
          </div>

          <Image src={divider} className={classes.divider} alt="divider" />
          <div className={classes.textContainer}>

            <div>Enter a world of elves, elemental spirits and intrigue!</div>
            <br />
            <div><span className={classes.bookTitle}>Prisoner of Magnolia</span>  is book one of the Elven Wastelands series.</div>

            <h3 style={{ margin: "20px auto" }}>Synopsis</h3>
            <div className={classes.text}>
              Elven greed knows no measure. In the pursuit of godly powers to have domain over nature they have angered it. Nature turns against them as wastelands devour their land and bring to life deadly creatures, making the outskirts of the continents uninhabitable.

            </div>
            <div className={classes.text}>
              Southern and northern kingdoms are still at odds, fighting for the power to hinder the wastelands’s advance.

            </div>

            <div className={classes.text}>
              As Elayah - princess of the southern kingdom becomes a High Elf  an enemy from the north seeks revenge on her kingdom. Her parents are killed. Tayrem, her guard and best-friend is imprisoned by Rayn - a northern prince. Rayn has his own agenda for Elayah and Tayrem, one of trials and revenge. But even he couldn’t guess  the outcome of his games...

            </div>

            <div className={classes.text}>
              Now Elayah is forced to uncover the truth about herself and the state of the world, with a menacing shadow on her back. What she learns chills her blood and galvanises into action.

            </div>
          </div>
          <Image src={divider} className={classes.divider} alt="divider" />

          <div className={classes.textContainer}>
            <h3>Main characters</h3>
            <div className={classes.text}>
              <strong>Elayah</strong> - Princess of Elria.
            </div>
            <div className={classes.text}>
              <strong>Tayrem</strong> - Elayah's loyal guard and best friend.
            </div>
            <div className={classes.text}>
              <strong>Rayn</strong> - Prince of Vanadium.
            </div>
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
            <h2> Elven Wastelands series</h2>
            <div className={classes.text}>Currently Elven Wastelands is a four book series, with the first book being <span className={classes.bookTitle}>Prisoner of Magnolia</span>, set to release in summer of 2026.</div>
            <div className={classes.text}>Books two to four are in various stages of planning and writing, but are set to release at most within 15 months of each other.</div>
          </div>



        </div>

      </main>



    </div>
  );
}