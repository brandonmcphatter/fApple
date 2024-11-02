import styles from './HighlightItem.module.css';
import Image from "next/image";

export default function HighlightItem({photo, quote}) {
    return (

        <div className={styles.item}>
            <div className={'bg-white overflow-hidden'}>
                <Image src={photo} alt={'feature'} fill={true} className={styles.img}/>
            </div>
        </div>
    )
}