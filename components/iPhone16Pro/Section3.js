import Image from "next/image";
import featurePhoto from "@/public/img/featureIphonePhoto.jpg";

export default function Section3() {
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