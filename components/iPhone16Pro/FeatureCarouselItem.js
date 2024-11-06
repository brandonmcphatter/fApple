import Image from "next/image";
import styles from './FeatureCarouselItem.module.css'
export default function FeatureCarouselItem({photo, text}) {
    return (
        <>
            <div className={'flex flex-col snap-center'}>

                <div className={styles.container}>
                    <Image src={photo} alt={'highlight photo'} fill={true} className={styles.img}/>
                </div>

                <div className={`mt-4  md:pb-4 ps-6 pe-16 w-72 md:w-80 lg:w-full text-yellow-600 text-xs md:text-base md:font-semibold lg:text-lg`}>{text}</div>
            </div>
        </>
    )
}