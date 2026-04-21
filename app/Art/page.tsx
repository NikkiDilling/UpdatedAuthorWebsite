"use client";

import classes from './../css/ArtPage.module.scss';
import tayremArt from '../../public/assets/Tayrem-commission.webp';
import tayremNElayah from '../../public/assets/Tayrem & Elayah.webp';
import sigil from '../../public/assets/Vanadian sigil.webp';
import firstMeeting from '../../public/assets/first meeting.webp';
import tayremChained from '../../public/assets/Tayrem-chained.webp';
import elayah from '../../public/assets/Elayah-final.png';
import elayahNrayn from '../../public/assets/Elayah&Rayn.webp';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'swiper/swiper-bundle.css';
import ImagePopUp from '../components/ImagePopUp';
import { useState } from 'react';
import Image from 'next/image';
import divider from "../../public/assets/divider.webp";

export default function ArtPage() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image: any) => {
        setSelectedImage(image);
        setOpen(true);
    }

    const itemData = [
        {
            img: elayahNrayn,
            title: 'Elayah & Rayn',
            author: 'Zoune',
            ig: "https://www.instagram.com/artbyzou_/"
        },
        {
            img: elayah,
            title: 'Elayah',
            author: 'Nicole D. Hansen',
        },
        {
            img: tayremArt,
            title: 'Tayrem commission',
            author: 'Kostojj',
            ig: "https://www.instagram.com/kostojjn/"
        },
        {
            img: tayremNElayah,
            title: 'Tayrem & Elayah',
            author: 'Nicole D. Hansen',
        },
        {
            img: sigil,
            title: 'Vanadium sigil',
            author: 'Nicole D. Hansen',
        },
        {
            img: firstMeeting,
            title: 'First meeting',
            author: 'Nicole D. Hansen',
        },
        {
            img: tayremChained,
            title: 'Tayrem',
            author: 'Nicole D. Hansen',
        }
    ];


    return (
        <div className={classes.container}>
            <h3>Aaaart!</h3>
            <div className={classes.description}>
                I love art, and support REAL human artists!
                <div>
                    Below are some pieces commissioned from amazing artists,
                    as well as some of my own amateur artwork.
                </div>


            </div>
            <Image src={divider} className={classes.divider} alt="divider" />

            <Swiper
                modules={[Navigation]}
                grabCursor
                loop={true}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                }}
                className={classes.swiper}
            >

                {itemData.map((item, index) => (
                    <SwiperSlide
                        onClick={() => handleOpen(item.img)} key={index}>
                        <div className={classes.imageWrapper}>
                            <Image
                                key={index}
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />

                        </div>
                        <div className={classes.caption}>
                            <div className={classes.title}>"{item.title}"</div>
                            {item.ig ?
                                (
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div className={classes.author}>by: {item.author}</div>
                                        <a href={item.ig} target='_blank' style={{ marginLeft: "10px" }}>
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                className={classes.icon}
                                            />
                                        </a>
                                    </div>

                                ) :
                                (
                                    <div className={classes.author}>by: {item.author}</div>

                                )
                            }
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>

            <ImagePopUp image={selectedImage} open={open} handleClose={() => setOpen(false)} />
        </div>
    );
}

function useWindowSize() {
    throw new Error('Function not implemented.');
}
