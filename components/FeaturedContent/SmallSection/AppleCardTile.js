import styles from "@/components/FeaturedContent/SmallSection/AirPodProTile.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";

export default function AppleCardTile() {
    const appleCardQuote = 'Get up to 3% Daily Cash Back with every purchase.';
    const product = 'Card';
    const bgColor = '#f5f5f7';

    return (
        <div className={styles.miniContent} style={{backgroundColor: `${bgColor}`}}>
            <div className={'flex-col w-1/2 md:w-3/4 mt-30 md:mt-1 lg:mt-3'}>
                <div className={'pt-10 mb-4 text-black'}>
                    {/*Product Title*/}
                    <div className={'text-center'}>
                          <span className={''} style={{fontFamily: 'Helvetica', fontSize: '32px'}}>
                             <FontAwesomeIcon icon={faApple} style={{color: 'black'}}/>{product}
                          </span>
                    </div>
                    {/*Product Quote*/}
                    <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={'px-6 text-center'}>
                              {appleCardQuote}
                          </span>
                    </div>
                </div>

                <div className={''}>
                    {/*Buttons*/}
                    <div className={'flex justify-center gap-3'}>
                        <button className={'bg-blue-500 text-white py-2 px-4 rounded-full text-sm'}>Learn More</button>
                        <button className={'bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded-full text-sm'}>Apply Now</button>

                    </div>
                    {/*Small Text*/}
                    {/*<div className={'text-center'}>*/}
                    {/*    <span className={'text-black'}>Apple Intelligence coming this fall</span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>    )
}