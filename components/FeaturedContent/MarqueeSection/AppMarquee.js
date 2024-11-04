'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import AppMarqueeItem from "@/components/FeaturedContent/MarqueeSection/AppMarqueeItem";
import helloKitty from '../../../public/img/marqueeimages/helloKity.jpg';
import nba2k25 from '../../../public/img/marqueeimages/nba2k25.jpg';
import hiitWithBrian from '../../../public/img/marqueeimages/hiitWithBrian.jpg';
import run5k from  '../../../public/img/marqueeimages/run5K.jpg';
import aListPop from '../../../public/img/marqueeimages/aListPop.jpg';
import headSpace from '../../../public/img/marqueeimages/headSpace.jpg';


export default function AppMarquee() {
    const [notPaused, setNotPaused] = useState(true);

    function pausePlay() {
        setNotPaused(!notPaused);
    }

    return (
        <>
            <div className={'overflow-hidden'}>
                <div className={'flex relative mb-8 mt-4 '}>
                    {/*//marquee container*/}
                    <div className={' animate-marquee flex whitespace-nowrap'} style={{fontFamily: 'Helvetica'}}>
                        <AppMarqueeItem image={hiitWithBrian} title={'HIIT with Brian'} category={'Fitness+'} />
                        <AppMarqueeItem image={nba2k25} title={'NBA 2K25 Arcade Edition'} category={'Arcade'} />
                        <AppMarqueeItem image={run5k} title={'Run Your First 5K'} category={'Fitness+'} />
                        <AppMarqueeItem image={aListPop} title={'A-List Pop'} category={'Music'} />
                        <AppMarqueeItem image={helloKitty} title={'Hello Kitty Island Adventure'} category={'Arcade'} />
                    </div>
                    <div className={'absolute top-0 whitespace-nowrap animate-marquee2 flex'} style={{fontFamily: 'Helvetica'}}>
                    <AppMarqueeItem image={hiitWithBrian} title={'HIIT with Brian'} category={'Fitness+'} />
                    <AppMarqueeItem image={nba2k25} title={'NBA 2K25 Arcade Edition'} category={'Arcade'} />
                    <AppMarqueeItem image={run5k} title={'Run Your First 5K'} category={'Fitness+'} />
                    <AppMarqueeItem image={aListPop} title={'A-List Pop'} category={'Music'} />
                    <AppMarqueeItem image={helloKitty} title={'Hello Kitty Island Adventure'} category={'Arcade'} />
                    </div>

                    {/*play-pause button*/}
                    <div className={'flex justify-end '}>
                        <button onClick={pausePlay} className={'px-2 bg-gray-300 border rounded-full me-2'}>
                            {notPaused ?
                                <FontAwesomeIcon icon={faPause}/> :
                                <FontAwesomeIcon icon={faPlay}/>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}