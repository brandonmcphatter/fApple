

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import HighlightItem from "@/components/iPhone16Pro/HighlightItem";
import slide2 from '/public/img/slide2.jpg';
import slide3 from '/public/img/slide3.jpg';
import slide4 from '/public/img/slide4.jpg';
import slide5 from '/public/img/slide5.jpg';
import slide1 from '/public/img/slide1.jpg';

export default function HighlightCarousel() {
    const color = 'gray';
    const slides = [slide1, slide2, slide3, slide4, slide5]
    return (


        <div  className={'mx-3'} style={{fontFamily: 'Helvetica'}}>
            {/*Carousel*/}

            <div className={'flex gap-5 overflow-x-auto '}>
                {slides.map((slide, index)=>{
                    return <HighlightItem photo={slide} key={index} />
                })}
               </div>
            {/*Carousel Dots*/}
            <div className={'flex justify-center content-center gap-3.5 mt-12'}>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
                <FontAwesomeIcon icon={faCircle} size={"sm"} width={8} color={color}/>
            </div>
        </div>
    )
}