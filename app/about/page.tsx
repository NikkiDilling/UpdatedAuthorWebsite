
import classes from '../css/AboutPage.module.scss';
import aries from "../../public/assets/aries.webp";
import student from "../../public/assets/student.webp";
import Image from 'next/image';

export default function AboutPage() {


  return (
    <div className={classes.container}>

      <div className={classes.section}>
        <div className={classes.mobile}>
          <h1 className={classes.greeting}>Hi, I'm Nicole!</h1>

          <div className={classes.starSign}>
            <div>Star Sign:</div>
            <Image src={aries} alt="star sign" width={72} />
          </div>
        </div>

        <Image
          src={student}
          alt="student image"
          className={classes.studentImg}
        />

        <div className={classes.bioColumn}>
          <div className={classes.desktop}>
            <h1 className={classes.greeting}>Meet Nicole D. Hansen</h1>

            <div className={classes.starSign}>
              <div>Star Sign:</div>
              <Image src={aries} alt="star sign" width={72} />
            </div>
          </div>

          <div className={classes.text}>
            Nicole is an indie fantasy author from Roskilde, a small but culturally significant Danish town, now based in Copenhagen. After earning her bachelor's degree in Computer Science and Informatics, she finally decided to pursue her passion for writing and storytelling.
          </div>
          <div className={classes.text}>
            Computer science and writing could not be more different, but Nicole finds a creative outlet in both. Her dream now is to pursue a career in writing full-time — she's currently working on the second book in the Prisoner of Magnolia series.
          </div>
        </div>
      </div>



    </div>
  );
}