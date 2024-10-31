import IPhone16ProTile from "@/components/FeaturedContent/MainSection/iPhone16ProTile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import AppleTVCarousel from "@/components/FeaturedContent/AppleTVSection/AppleTVCarousel";
import HighlightCarousel from "@/components/iPhone16Pro/HighlightCarousel";

export default function iPhone16Pro() {
    return (
        <>
            <IPhone16ProTile/>

            {/*highlight section*/}
            <div className={'bg-gray-900  pb-24 -mt-3'} style={{backgroundColor: '#1d1d1f'}}>
                {/*text*/}
                <div className={'pt-24 px-12 flex flex-col md:flex-row justify-between mb-12'}>
                    <div className={' text-3xl md:text-5xl mb-4 font-semibold '} style={{color: '#f5f5f7'}}>Get the highlights.</div>
                    <div className={'text-blue-500 text-sm md:text-base md:self-end md:mb-4'}>Watch the film <FontAwesomeIcon icon={faPlayCircle} /> </div>
                </div>
                <div>
                    <HighlightCarousel />

                </div>

            </div>

            <div className={'bg-black  pb-24 -mt-3'}>
                {/*text*/}
                <div className={'pt-24 px-12 flex flex-col md:flex-row justify-between mb-12'}>
                    <div className={' text-3xl md:text-5xl mb-4 font-semibold '} style={{color: '#f5f5f7'}}>Take a closer look.</div>
                </div>
                <div>
                    <div className={'mx-8 h-96 bg-black rounded-lg'}>

                    </div>
                </div>

            </div>

        </>
    )
}