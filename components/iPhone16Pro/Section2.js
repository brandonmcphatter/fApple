import PhoneColorSection from "@/components/iPhone16Pro/PhoneColorSection";

export default function Section2() {
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