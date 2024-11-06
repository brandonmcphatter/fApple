import IPhoneTile from "@/components/iPhone16Pro/iPhoneTile";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import HighlightCarousel from "@/components/iPhone16Pro/HighlightCarousel";

export default function Section1() {
    return (
        <>
            <IPhoneTile />
            <div className={'bg-gray-900  pb-14 -mt-3'} style={{backgroundColor: '#1d1d1f'}}>
                {/*text*/}
                <div className={'pt-24 px-12 flex flex-col md:flex-row justify-between mb-12'}>
                    <div className={' text-3xl md:text-5xl mb-4 font-semibold '} style={{color: '#f5f5f7'}}>Get the
                        highlights.
                    </div>
                    <div className={'text-blue-500 text-sm md:text-base md:self-end md:mb-4'}>
                        <Link href={'https://www.youtube.com/watch?v=eDqfg_LexCQ'} className={'hover:underline'}
                              target={'_blank'}>
                            <span className={'me-1'}>Watch the film</span><FontAwesomeIcon icon={faPlayCircle}/>
                        </Link>
                    </div>
                </div>
                <div>
                    <HighlightCarousel/>
                </div>
            </div>
        </>
    )
}