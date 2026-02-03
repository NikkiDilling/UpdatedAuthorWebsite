
import classes from './../css/Navgation.module.scss';
import Link from 'next/link';

export default function Navigation() {
    return (
        <div className={classes.container}>
            <Link href="/Books">Books</Link >
            <Link href="/Blog" >Blog</Link >
            <Link href="/Art">Art</Link >
            <Link href="/About">About Author</Link >
            <Link href="/Contact">Contact</Link >
        </div>
    );
}