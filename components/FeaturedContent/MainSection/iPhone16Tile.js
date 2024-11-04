import styles from "@/components/FeaturedContent/MainSection/iPhone16Tile.module.css";
import Image from "next/image";
import iPhone16s from '../../../public/img/iphone16lineup.png';

export default function IPhone16Tile() {
    const product = 'iPhone 16 ';
    const iPhoneQuote = 'Cool. Colorful.';

    return (
        <>
            <div className={styles.iPhone16}>
                <Image src={iPhone16s} alt={'iPhone 16 gallery'} className={styles.img} />
                <div className={'flex-col md:-mb-6 '}>
                    <div className={'pt-10 mb-4 text-black'}>
                        {/*Product Title*/}
                        <div className={'text-center'}>
                          <span className={''} style={{fontFamily: 'Helvetica', fontSize: '32px', fontWeight: 500}}>
                              {product}
                          </span>
                        </div>
                        {/*Product Quote*/}
                        <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={'px-6 text-center tracking-wide font-thin'}>
                              {iPhoneQuote}
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