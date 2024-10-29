import styles from "@/components/FeaturedContent/SmallSection/MiniContentTile.module.css";

export default function AirPodProTile() {
    const product = 'AirPods Pro 2';
    const airPodProQuote = 'Hearing Test, Hearing Aid, and Hearing Protection features in a free software update.';
const bgColor = 'black';
    return (
        <div className={styles.miniContent} style={{backgroundColor: `${bgColor}`}}>
            <div className={'flex-col w-1/2 md:w-3/4 mt-64 md:mt-56 lg:mt-80'}>
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