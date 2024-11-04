import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styles from './AppMarqueeItem.module.css';

export default function AppMarqueeItem({title, category, image}) {

    // state for click thru button to appear
    const [hover, setHover] = useState(false);
    function enter() {
        setHover(true);
    }
    function exit() {
        setHover(false);
    }
    return (
        <>
            <div className={styles.container}>
                <Image src={image} alt={'image'} className={styles.img} />
                <div className={styles.category}>
                    <FontAwesomeIcon icon={faApple}/>{category}
                </div>
            {/*image title*/}
            <div className={' tracking-wide md:font-bold'}>
                <span style={{fontSize: '12px'}}>{title}</span>
            </div>
            </div>
        </>


    )
}