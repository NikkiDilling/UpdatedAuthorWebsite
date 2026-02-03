import classes from '../css/Footer.module.scss';

export default function Footer() {
    return (
        <div className={classes.container}>
            <div>© {new Date().getFullYear()} Nicole D. Hansen. All rights reserved.</div>
        </div>
    );
}