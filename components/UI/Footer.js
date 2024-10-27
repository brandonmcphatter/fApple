import FooterText from "@/components/UI/FooterText";
import FooterSiteNav from "@/components/UI/FooterSiteNav";
import ExtraFooterText from "@/components/UI/ExtraFooterText";

export default function Footer() {
    return (
        function Footer() {
            return (
                <footer className={'px-4 pb-3'} style={{backgroundColor: '#f5f5f7'}}>

                    <FooterText/>
                    {/*Break Line*/}
                    <hr className={'my-3 border'}/>
                    <FooterSiteNav/>
                    <ExtraFooterText/>

                </footer>
            )
        }
    );
}