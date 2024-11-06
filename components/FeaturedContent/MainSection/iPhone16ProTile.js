import styles from "@/components/FeaturedContent/MainSection/iPhone16ProTile.module.css";
import Image from "next/image";
import iPhone16Pro from '../../../public/img/featureIphonePhoto.jpg';
import Link from "next/link";

export default function IPhone16ProTile() {
    const product = 'iPhone 16 Pro';
    const iPhoneQuote = 'Hello, Apple Intelligence.';

    return (
        <>
            <div className={'h-12 lg:h-4 bg-black'}></div>
            <div className={styles.iPhone16Pro}>
                <Image src={iPhone16Pro} alt={'iphone 16'}
                       className={styles.img}/>
                    <div className={''}>
                        <div className={'pt-10 mb-4'}>
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
                        {/*Buttons*/}
                        <div className={'flex justify-center gap-3'}>
                            <Link href={'/iphone-16-pro'} >
                                <button className={'bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-full text-sm'}>Learn More
                                </button>
                            </Link>
                            <Link href={'https://www.apple.com/shop/buy-iphone/iphone-16-pro'}>
                            <button
                                className={'bg-transparent hover:bg-blue-400 text-blue-500 hover:text-white border border-blue-500 py-2 px-4 rounded-full text-sm'}>Buy
                            </button>
                            </Link>

                        </div>
                        {/*Small Text*/}
                        <div className={'text-center'}>
                            <span className={'text-black'}>Apple Intelligence coming this fall</span>
                        </div>
                    </div>
            </div>
        </>
    )
}