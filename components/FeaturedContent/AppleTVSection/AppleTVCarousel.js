'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import CarouselItem from "@/components/FeaturedContent/AppleTVSection/CarouselItem";

export default function AppleTVCarousel() {
    const [active, setActive] = useState(1);
    const blk = 'black';
    const gry = 'gray';

    return (


        <div style={{fontFamily: 'Helvetica'}}>
            {/*Carousel*/}
            <div className={'flex  gap-4  overflow-x-auto'}>
                <CarouselItem category={'Thriller'} quote={'Your past can drag you under.'}/>
                <CarouselItem category={'Animation'} quote={'Happiness is a Halloween tradition.'}/>
                <CarouselItem category={'Action'} quote={'George Clooney and Brad Pitt are rival fixers stuck on the same job for one wild night.'}/>
                <CarouselItem category={'Comedy'} quote={'The shady side of paradise.'}/>
                <CarouselItem category={'Thriller'} quote={'Emmy Award winner.'}/>
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