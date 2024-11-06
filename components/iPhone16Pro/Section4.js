import FeatureCarousel from "@/components/iPhone16Pro/FeatureCarousel";
import styles from './Section4.module.css';

export default function Section4() {
    return (
        <>
            <div className={styles.gradient}>
                <div className={' flex flex-col md:flex-row md:justify-between my-10 md:my-36 md:gap-20 lg:gap-64 md:px-24 lg:px-72'}>
                    <div className={' text-wrap font-semibold text-lg ps-20 pe-32 md:p-0 pb-16 leading-7'}
                         style={{color: '#86868b'}}>
                        iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted texture. Titanium
                        has one of the highest strength-to-weight ratios of any metal, making these models <span
                        style={{color: '#f5f5f7'}}
                        className={'text-white'}>incredibly strong and impressively light</span>. iPhone 16 Pro comes in
                        four stunning finishes — including new Desert Titanium.
                    </div>

                    <div className={' bg-transparent text-wrap font-semibold text-lg ps-20 md:p-0 pe-32 pt-1 pb-16 leading-7'}
                         style={{color: '#86868b'}}>
                        Internal design improvements — including a 100 percent recycled aluminum thermal substructure and
                        back glass optimizations that further dissipate heat — enable up to 20 percent <span
                        style={{color: '#f5f5f7'}}
                        className={'text-white'}>better sustained performance</span> than iPhone 15 Pro. So you can do all
                        the things you love — like high-intensity gaming — for longer.
                    </div>
                </div>
                <FeatureCarousel/>
                {/*Buy Button*/}
                <div className={'text-center text-white pt-10 pb-20'}>
                    <button className={' md:w-48  px-4 py-3 bg-blue-500 hover:bg-blue-400 rounded-full'}>
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    )
}