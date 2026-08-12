
import classes from './../css/Navgation.module.scss';
import Link from 'next/link';

export default function Navigation() {
    return (
        <div className={classes.container}>
            <Link href="/books">Books</Link >
  {/*           <Link href="/Blog" >Blog</Link > */}
            <Link href="/art">Art</Link >
            <Link href="/about">About</Link >
            <Link href="/contact">Contact</Link >
        </div>
    );
}