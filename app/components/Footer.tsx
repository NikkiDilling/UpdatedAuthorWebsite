import classes from '../css/Footer.module.scss';

export default function Footer() {
    return (
        <div className={classes.container}>
            <div>© {new Date().getFullYear()} Nicole D. Hansen. </div>
            <span>All rights reserved.</span>
        </div>
    );
}