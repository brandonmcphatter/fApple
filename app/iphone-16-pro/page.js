
import Section1 from "@/components/iPhone16Pro/Section1";
import Section2 from "@/components/iPhone16Pro/Section2";
import Section3 from "@/components/iPhone16Pro/Section3";
import Section4 from "@/components/iPhone16Pro/Section4";

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
            </div>
        </>
    )
}