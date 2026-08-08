import Link from "next/link";
import classes from './../../css/PoM.module.scss';

export default function PrisonerOfMagnoliaPage() {
    return (
        <div style={{ textAlign: "center" }}>

            <h2>This page is under construction</h2>

            {/* this page has neat buttons that show playlist, dictionary etc. */}
            <div className={classes.btnContainer}>
                <Link href='/books/prisoner-of-magnolia/playlist' className={classes.btn} >Book Playlist</Link>
                <Link href='/About' className={classes.btn} >Pronunciation Guide</Link>
                <Link href='/About' className={classes.btn} >Demutriir Dictionary</Link>
            </div>

        </div>
    )
}