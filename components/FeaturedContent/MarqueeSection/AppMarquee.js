'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import AppMarqueeItem from "@/components/FeaturedContent/MarqueeSection/AppMarqueeItem";

export default function AppMarquee() {
    const [notPaused, setNotPaused] = useState(true);

    function pausePlay() {
        setNotPaused(!notPaused);
    }

    return (
        <>
            <div className={'overflow-hidden'}>
                <div className={'flex relative mb-8 '}>
                    {/*// carousel container*/}
                    <div className={'animate-marquee flex whitespace-nowrap'} style={{fontFamily: 'Helvetica'}}>
                        <AppMarqueeItem title={'HIIT with Brian'} category={'Fitness+'} color={'green'}/>
                        <AppMarqueeItem title={'Headspace'} category={'Music'} color={'red'}/>
                        <AppMarqueeItem title={'NBA 2K25 Arcade Edition'} category={'Arcade'} color={'blue'}/>
                        <AppMarqueeItem title={'Run Your First 5K'} category={'Fitness+'} color={'orange'}/>
                        <AppMarqueeItem title={'A-List Pop'} category={'Music'} color={'gray'}/>
                        <AppMarqueeItem title={'Hello Kitty Island Adventure'} category={'Arcade'} color={'yellow'}/>
                    </div>
                    <div className={'absolute top-0 whitespace-nowrap animate-marquee2 flex'} style={{fontFamily: 'Helvetica'}}>
                        <AppMarqueeItem title={'HIIT with Brian'} category={'Fitness+'} color={'green'}/>
                        <AppMarqueeItem title={'Headspace'} category={'Music'} color={'red'}/>
                        <AppMarqueeItem title={'NBA 2K25 Arcade Edition'} category={'Arcade'} color={'blue'}/>
                        <AppMarqueeItem title={'Run Your First 5K'} category={'Fitness+'} color={'orange'}/>
                        <AppMarqueeItem title={'A-List Pop'} category={'Music'} color={'gray'}/>
                        <AppMarqueeItem title={'Hello Kitty Island Adventure'} category={'Arcade'} color={'yellow'}/>
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