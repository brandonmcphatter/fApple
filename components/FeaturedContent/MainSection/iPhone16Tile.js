import styles from "@/components/FeaturedContent/MainSection/MainContentTile.module.css";

export default function IPhone16Tile() {
    const product = 'iPhone 16 ';
    const appleWatchQuote = 'Hello Apple Intelligence.';
    const bgColor = 'orange';
    return (
        <>
            <div className={styles.mainContent} style={{backgroundColor: `${bgColor}`}}>
                <div className={'flex-col w-1/2 md:w-3/4 mt-30 md:mt-1 lg:mt-3'}>
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