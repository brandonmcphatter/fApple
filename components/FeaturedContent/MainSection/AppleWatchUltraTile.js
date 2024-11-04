import styles from "@/components/FeaturedContent/MainSection/AppleWatchUltraTile.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import appleWatchUltra from "@/public/img/appleWatchUltra.jpg";

export default function AppleWatchUltraTile() {
    const product = 'WATCH';
    const appleWatchQuote = 'ULTRA 2';

    return (
        <>
            <div className={styles.iPhone16}>
                <Image src={appleWatchUltra} alt={'iPhone 16 gallery'} className={styles.img}/>
                <div className={'flex-col md:pt-10 z-10'}>
                    <div className={'pt-10 mb-4 text-black'}>
                        {/*Product Title*/}
                        <div className={'text-center '}>
                          <span className={'text-white'}
                                style={{fontFamily: 'Helvetica', fontSize: '32px', fontWeight: 500}}>
                             <FontAwesomeIcon icon={faApple}/> {product}
                          </span>
                        </div>
                        {/*Product Quote*/}
                        <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={'px-6 text-center tracking-wide font-thin text-red-600'}>
                              {appleWatchQuote}
                          </span>
                        </div>
                    </div>

                    <div className={''}>
                        {/*Buttons*/}
                        <div className={'flex justify-center gap-3'}>
                            <button className={'bg-blue-500 text-white py-2 px-4 rounded-full text-sm'}>Learn More
                            </button>
                            <button
                                className={'bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded-full text-sm'}>Buy
                            </button>

                        </div>
                        {/*Small Text*/}
                        {/*<div className={'text-center'}>*/}
                        {/*    <span className={'text-black'}>Apple Intelligence coming this fall</span>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </>
    )
}