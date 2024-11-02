'use client';

import IPhone16ProTile from "@/components/FeaturedContent/MainSection/iPhone16ProTile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HighlightCarousel from "@/components/iPhone16Pro/HighlightCarousel";
import FeatureCarousel from "@/components/iPhone16Pro/FeatureCarousel";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import PhoneColorSection from "@/components/iPhone16Pro/PhoneColorSection";
import Image from "next/image";
import featurePhoto from '/public/img/featureIphonePhoto.jpg';

export default function iPhone16Pro() {
    return (
        <>
            <div className={'bg-black'}>
                {/*Highlights*/}
                <Section1/>
                {/*Phone Colors*/}
                <Section2/>
                {/*Image and Text*/}
                <Section3/>
                {/*Text and Features*/}
                <Section4/>
                {/*Buy Button*/}
                <div className={'text-center text-white bg-black pt-10 pb-10'}>
                    <button className={' md:w-48  px-4 py-3 bg-blue-500 hover:bg-blue-400 rounded-full'}>
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    )
}

function Section1() {
    return (
        <>
            <IPhone16ProTile/>
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

function Section2() {
    return (
        <div className={'bg-black  pb-16 '}>
            {/*text*/}
            <div className={'pt-24 flex flex-col  mb-12'}>
                <div className={' text-3xl px-12 md:text-5xl mb-4 font-semibold '} style={{color: '#f5f5f7'}}>Take a
                    closer look.
                </div>
                {/*phone color images*/}
                <PhoneColorSection/>

            </div>
        </div>
    )
}

function Section3() {
    return (
        <div className={'bg-black'}>
            <div className={'flex-col font-semibold text-4xl md:text-6xl lg:text-9xl text-center text-white'}>
                <div className={''} style={{color: '#c9bcb4'}}>Strength. Beauty.</div>
                <div className={''}>Titanium.</div>
            </div>
            <div className={'relative flex justify-center'}>
                <Image src={featurePhoto}
                       className={''}
                       alt={'feat photo'}
                       width={800}
                       height={800}/>
            </div>

        </div>
    )
}

function Section4() {
    return (
        <>
            <div className={'flex flex-col md:flex-row md:justify-between my-10 md:my-36 md:gap-20 lg:gap-64 md:px-24 lg:px-72'}>
                <div className={' text-wrap font-semibold text-lg ps-20 pe-32 md:p-0 pb-16 leading-7'}
                     style={{color: '#86868b'}}>
                    iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted texture. Titanium
                    has one of the highest strength-to-weight ratios of any metal, making these models <span
                    style={{color: '#f5f5f7'}}
                    className={'text-white'}>incredibly strong and impressively light</span>. iPhone 16 Pro comes in
                    four stunning finishes — including new Desert Titanium.
                </div>

                <div className={' bg-black text-wrap font-semibold text-lg ps-20 md:p-0 pe-32 pt-1 pb-16 leading-7'}
                     style={{color: '#86868b'}}>
                    Internal design improvements — including a 100 percent recycled aluminum thermal substructure and
                    back glass optimizations that further dissipate heat — enable up to 20 percent <span
                    style={{color: '#f5f5f7'}}
                    className={'text-white'}>better sustained performance</span> than iPhone 15 Pro. So you can do all
                    the things you love — like high-intensity gaming — for longer.
                </div>
            </div>

            <FeatureCarousel/>
        </>
    )
}

