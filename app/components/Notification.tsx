"use client";
import Link from "next/link";
import styles from "./ComponentStyles.module.scss"
import { useEffect, useRef } from "react";

export default function Notification(props: { visible: boolean, message: string | null, link: string, linkTitle: string }) {



    if (!props.visible) {
        return null;
    }

    return (
        <div className={styles.notificationContainer}>
            {props.message}
            <Link className={styles.link} href={props.link} >{props.linkTitle}</Link>

        </div>
    );
}