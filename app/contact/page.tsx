
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './../css/MainPage.module.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {


  return (
    <div className={classes.contactContainer}>

      <h3>Contact Me</h3>

      <div style={{marginBottom: "20px"}}>
        <div>Email: <span className={classes.contactEmail} style={{color:"rgb(231, 14, 134)"}}>nicoledhansen.mail@gmail.com</span></div>
      </div>

      <div>Or you reach me here:

        <span>
          <a href='https://www.instagram.com/ndhansen_' target='_blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.icon}
            />
          </a>
        </span>
      </div>
    </div>
  );
}