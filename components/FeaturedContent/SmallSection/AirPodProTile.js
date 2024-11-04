import styles from "@/components/FeaturedContent/SmallSection/AirPodProTile.module.css";
import Image from "next/image";
import iPadMinis from '/public/img/airPodsPro.png';

export default function AirPodProTile() {
    const product = 'AirPods Pro 2';
    const airPodProQuote = 'Hearing Test, Hearing Aid, and Hearing Protection features in a free software update.';

    return (
        <div className={styles.miniContent}>
            <Image src={iPadMinis} alt={'iPad Minis'} className={styles.img} />
            <div className={'flex-col mx-auto w-1/2 md:w-3/4 lg:w-1/2 -mt-10 md:-mt-16 lg:-mt-4 pb-10 lg:pb-0'}>
                <div className={'pt-10 mb-4'}>
                    {/*Product Title*/}
                    <div className={'text-center'}>
                          <span className={''} style={{fontFamily: 'Helvetica', fontSize: '32px'}}>
                              {product}
                          </span>
                    </div>
                    {/*Product Quote*/}
                    <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={'px-6 text-center tracking-wide'}>
                              {airPodProQuote}
                          </span>
                    </div>
                </div>

                <div className={''}>
                    {/*Buttons*/}
                    <div className={'flex justify-center gap-3'}>
                        <button className={'bg-blue-500 text-white py-2 px-4 rounded-full text-sm'}>Learn More</button>
                        <button className={'bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded-full text-sm'}>Buy</button>

                    </div>
                    {/*Small Text*/}
                    {/*<div className={'text-center'}>*/}
                    {/*    <span className={'text-black'}>Apple Intelligence coming this fall</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}