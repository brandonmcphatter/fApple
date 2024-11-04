import styles from "@/components/FeaturedContent/SmallSection/AppleWatch10Tile.module.css";
import Image from "next/image";
import appleWatch10 from '/public/img/appleWatchS10.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";

export default function AppleWatch10Tile() {
    const product = 'WATCH';
    const appleWatchQuote = 'Thinstant classic.';
    return (
        <div className={styles.miniContent}>
            <Image src={appleWatch10} alt={'AirPods Pro 2'} className={styles.img} />
            <div className={'text-black flex-col mx-auto w-1/2 md:w-3/4 lg:w-1/2 -mb-8 md:-mb-4 lg:-mb-12 pb-6 lg:pt-2 '}>
                <div className={' '}>
                    {/*Product Title*/}
                    <div className={'text-center '}>
                          <span className={''} style={{fontFamily: 'Helvetica', fontSize: '32px'}}>
                              <FontAwesomeIcon icon={faApple} />{product}
                          </span>
                    </div>
                    <div className={'text-center -mt-2'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={'px-6 text-sm font-semibold text-center tracking-wide'}>
                              SERIES 10
                          </span>
                    </div>
                    {/*Product Quote*/}
                    <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={'px-6 text-center tracking-wide'}>
                              {appleWatchQuote}
                          </span>
                    </div>
                </div>

                <div className={'mt-3'}>
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