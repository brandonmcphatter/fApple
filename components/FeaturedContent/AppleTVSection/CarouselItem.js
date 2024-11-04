import styles from './CarouselItem.module.css';
import Image from "next/image";
import {useState} from "react";

export default function CarouselItem({imageSM, imageLG}) {
    const [hidden, setHidden] = useState('hidden');
    const [blur, setBlur] = useState('')
    const blurred = ()=> setBlur('blur-sm');
    const unBlur = ()=> setBlur('');
    const unHide = () => setHidden('flex');
    const hide = () => setHidden('hidden');

    return (

        <div className={styles.item} onMouseEnter={unHide} onMouseLeave={hide}>
            <Image src={imageSM} alt={'small image'} objectFit={'cover'} className={blur}/>
            <div className={`${hidden} w-full  justify-center content-center mx-auto bg-transparent absolute opacity-80 `}>
                <button onMouseEnter={blurred} onMouseLeave={unBlur}  className={'bg-blue-500 hover:bg-blue-400 text-white rounded-full px-4 py-2 text-sm'}>Watch Now
                </button>
            </div>

        </div>
    )
}