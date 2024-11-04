import styles from "@/components/FeaturedContent/SmallSection/iPadMini2Tile.module.css";
import Image from "next/image";
import iPadMinis from '/public/img/iPadMini.png';

export default function IPadMini2Tile() {
    const product = 'iPad Mini 2';
    const iPadQuote = 'Hello Apple Intelligence.';
    return (
        <div className={styles.miniContent}>
            <Image src={iPadMinis} alt={'AirPods Pro 2'} className={styles.img} />
            <div className={'flex-col mx-auto w-1/2 md:w-3/4 lg:w-1/2 -mt-10 md:-mt-16 lg:-mt-12 pb-10 lg:pb-16'}>
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
                              {iPadQuote}
                          </span>
                    </div>
                </div>

                <div className={''}>
                    {/*Buttons*/}
                    <div className={'flex justify-center gap-3'}>
                        <button className={'bg-blue-500 text-white py-2 px-4 rounded-full text-sm'}>Learn More</button>
                        <button className={'bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded-full text-sm'}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}