import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import FeatureCarouselItem from "@/components/iPhone16Pro/FeatureCarouselItem";
import highlight1 from '/public/img/highlight1.jpg'
import highlight2 from '/public/img/highlight2.jpg'
import highlight3 from '/public/img/highlight3.jpg'
import highlight4 from '/public/img/highlight4.jpg'

export default function FeatureCarousel() {

    const images = [highlight1, highlight2, highlight3, highlight4];
    const quotes = ['iPhone 16 Pro Max has our largest iPhone display ever',
        'The thinnest borders on any Apple product',
        'Premium Grade 5 titanium is exceptionally durable',
        'Four striking colors, from Black Titanium to new Desert Titanium'];

    return (
        <div className={'bg-black pt-1'}>
            <div className={'bg-black flex gap-3 overflow-x-auto mb-8 snap-x '}>
                <div className={'flex gap-3 md:gap-10 ps-14 no-scrollbar pe-96'}>
                    {images.map((image,index ) => {return (
                        <FeatureCarouselItem key={index} photo={image} text={quotes[index]} />
                    )})}
                </div>
            </div>
            <div className={'flex justify-end gap-4 text-2xl pe-8'}>
                <FontAwesomeIcon icon={faArrowCircleLeft} color={'gray'}/>
                <FontAwesomeIcon icon={faArrowCircleRight} color={'gray'}/>
            </div>
        </div>
    )
}