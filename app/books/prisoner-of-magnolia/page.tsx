"use client";

import Link from "next/link";
import classes from './../../css/PoM.module.scss';
import mapOfficial from './../../../public/assets/Gaudelir-map.webp';
import Image from "next/image";
import Divider from '../../components/Divider';
import { useState } from 'react';
import ImagePopUp from '../../components/ImagePopUp';

const resources = [
    {
        href: '/books/prisoner-of-magnolia/playlist',
        name: 'Book Playlist',
        description: 'The songs that shaped every chapter',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
            </svg>
        ),
    },
    {
        href: '/books/prisoner-of-magnolia/pronunciation-guide',
        name: 'Pronunciation Guide',
        description: 'How to say every name and place',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.5 8.5a5 5 0 010 7" />
                <path d="M19 5.5a9 9 0 010 13" />
            </svg>
        ),
    },
    {
        href: '/books/prisoner-of-magnolia/dictionary',
        name: 'Demutriir Dictionary',
        description: 'A glossary of Gaudelir\'s own language',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
        ),
    },
];

export default function PrisonerOfMagnoliaPage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div className={classes.hub}>

            <p className={classes.hubEyebrow}>For readers only</p>
            <h1 className={classes.hubHeading}>Thank you for reading!</h1>
            <p className={classes.hubIntro}>
                This little corner isn&apos;t linked anywhere on the site — you only found it because you picked up the book. Here&apos;s a few extra treats to go with the story.
            </p>

            <div className={classes.resourceGrid}>
                {resources.map((resource) => (
                    <Link href={resource.href} key={resource.href} className={classes.resourceCard}>
                        <span className={classes.resourceIcon}>
                            {resource.icon}
                        </span>
                        <span className={classes.resourceText}>
                            <span className={classes.resourceName}>{resource.name}</span>
                            <span className={classes.resourceDescription}>{resource.description}</span>
                        </span>
                        <span className={classes.resourceArrow} aria-hidden="true">→</span>
                    </Link>
                ))}
            </div>

            <Divider />

            <div className={classes.mapSection}>
                <h2 className={classes.mapHeading}>Map of Gaudelir</h2>
                <p className={classes.mapHint}>Click to explore the full map</p>

                <div className={classes.mapFrame} onClick={() => handleOpen()}>
                    <Image
                        className={classes.map}
                        src={mapOfficial}
                        alt="World Map"
                        loading="lazy"
                    />
                </div>
            </div>

            <ImagePopUp image={mapOfficial} open={open} handleClose={() => setOpen(false)} />

        </div>
    )
}
