'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import HighlightItem from "@/components/iPhone16Pro/HighlightItem";

export default function HighlightCarousel() {
    const color = 'gray';

    return (


        <div style={{fontFamily: 'Helvetica'}}>
            {/*Carousel*/}
            <div className={'flex  gap-5  overflow-x-auto'}>
                <HighlightItem category={'Thriller'} quote={'Your past can drag you under.'}/>
                <HighlightItem category={'Animation'} quote={'Happiness is a Halloween tradition.'}/>
                <HighlightItem category={'Action'} quote={'George Clooney and Brad Pitt are rival fixers stuck on the same job for one wild night.'}/>
                <HighlightItem category={'Comedy'} quote={'The shady side of paradise.'}/>
                <HighlightItem category={'Thriller'} quote={'Emmy Award winner.'}/>
            </div>
            {/*Carousel Dots*/}
            <div className={'flex justify-center content-center gap-3.5 mt-20'}>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
            </div>
        </div>
    )
}