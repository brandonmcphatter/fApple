import styles from './HighlightItem.module.css';
import Image from "next/image";

export default function HighlightItem({photo, quote}) {
    return (

        <div className={styles.item}>

                <Image src={photo} alt={'feature'} fill={true} className={styles.img}/>
                <div className={styles.quote}>
                    <div className={'px-36 md:px-36 lg:px-6'}>{quote}</div>
                </div>

        </div>
    )
}