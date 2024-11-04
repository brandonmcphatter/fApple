'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import CarouselItem from "@/components/FeaturedContent/AppleTVSection/CarouselItem";
import badMonkey from '@/public/img/appleTV/badMonkeySmall.jpg';
import silo from '@/public/img/appleTV/siloSmall.jpg';
import loot from '@/public/img/appleTV/lootSmall.jpg';
import severance from '@/public/img/appleTV/severanceSmall.jpg';
import servant from '@/public/img/appleTV/servantSmall.jpg';

export default function AppleTVCarousel() {
    const gry = 'gray';

    return (


        <div style={{fontFamily: 'Helvetica'}}>
            {/*Carousel*/}
            <div className={'flex ps-3 pe-8 gap-4  overflow-x-auto'}>
                <CarouselItem imageSM={badMonkey}/>
                <CarouselItem imageSM={silo}/>
                <CarouselItem imageSM={loot}/>
                <CarouselItem imageSM={severance}/>
                <CarouselItem imageSM={servant}/>
            </div>

            {/*Carousel Dots*/}
            <div className={'flex justify-center content-center gap-3.5 my-2'}>
                    <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={gry}/>
                    <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={gry}/>
                    <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={gry}/>
                    <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={gry}/>
                    <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={gry}/>
            </div>
        </div>
    )
}