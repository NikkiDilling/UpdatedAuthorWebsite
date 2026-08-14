"use client";

import Link from "next/link";
import classes from './../../css/PoM.module.scss';
import mapOfficial from './../../../public/assets/Gaudelir-map.webp';
import Image from "next/image";
import divider from "./../../../public/assets/divider.webp";
import { useState } from 'react';
import ImagePopUp from '../../components/ImagePopUp';

export default function PrisonerOfMagnoliaPage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div style={{ textAlign: "center" }}>

            {/* this page has neat buttons that show playlist, dictionary etc. */}
            <div className={classes.btnContainer}>
                <Link href='/books/prisoner-of-magnolia/playlist' className={classes.btn} >Book Playlist</Link>
                <Link href='/books/prisoner-of-magnolia/pronunciation-guide' className={classes.btn} >Pronunciation Guide</Link>
                <Link href='/books/prisoner-of-magnolia/dictionary' className={classes.btn} >Demutriir Dictionary</Link>

                <Image src={divider} alt="divider" style={{ maxWidth: "20%", height: "auto", margin: "40px auto" }} />
                <div style={{ marginBottom: "40px" }}>
                    <Image
                        style={{ maxWidth: "40%", height: "auto", margin: "20px auto", cursor: "pointer" }}
                        className={classes.map}
                        src={mapOfficial}
                        alt="World Map"
                        loading="lazy"
                        onClick={() => handleOpen()}
                    />
                    <div style={{ textAlign: "center" }}>Map of Gaudelir</div>
                </div>

            </div>
            <ImagePopUp image={mapOfficial} open={open} handleClose={() => setOpen(false)} />

        </div>
    )
}