import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import HighlightItem from "@/components/iPhone16Pro/HighlightItem";
import slide3 from '/public/img/slide3.jpg';
import slide4 from '/public/img/slide4.jpg';
import slide5 from '/public/img/slide5.jpg';
import slide1 from '/public/img/slide1.jpg';

export default function HighlightCarousel() {
    const color = 'gray';
    const slides = [slide1, slide3, slide4, slide5];
    const quotes = ['The first iPhone built for Apple Intelligence. Personal, private, powerful.',

        '4K 120 fps Dolby Vision.\n' +
        '4 studio-quality mics.\n' +
        'A Pro studio in your pocket.',

        'Our thinnest borders yet\n' +
        '— for even larger displays.\n' +
        'Brilliant.',

        'The All-new A18 Pro chip.\n' +
        'Unrivaled intelligence and performance.\n' +
        ''

    ]
    return (


        <div className={'px-3'} style={{fontFamily: 'Helvetica'}}>
            {/*Carousel*/}

            <div className={'flex gap-5 overflow-x-auto '}>
                {slides.map((slide, index) => {
                    return <HighlightItem photo={slide} key={index} quote={quotes[index]}/>
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