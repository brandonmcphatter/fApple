'use client'

import {useState} from "react";
import Image from "next/image";
import iPhoneBlack from "@/public/img/blackiPhone16.jpg";
import iPhoneWhite from "@/public/img/whiteiPhone16.jpg";
import iPhoneNatural from "@/public/img/naturaliPhone16.jpg";
import iPhoneDesert from "@/public/img/desertiPhone16.jpg";
import ColorSelector from "@/components/iPhone16Pro/ColorSelector";
import styles from './PhoneColorSection.module.css';

export default function PhoneColorSection() {
    const [colorNumber, setColorNumber] = useState(1);

    return (
        <>
            <div className={styles.container}>
                {/*<iPhone Pictures/>*/}
                {colorNumber === 1 && <Image src={iPhoneBlack} alt={'iPhone'} height={900} width={900}/>}
                {colorNumber === 2 && <Image src={iPhoneWhite} alt={'iPhone'} height={900} width={900}/>}
                {colorNumber === 3 && <Image src={iPhoneNatural} alt={'iPhone'} height={900} width={900}/>}
                {colorNumber === 4 && <Image src={iPhoneDesert} alt={'iPhone'} height={900} width={900}/>}
            </div>
            <ColorSelector colorNumber={colorNumber} setColorNumber={setColorNumber}/>
        </>
    )
}