'use client'
import "./globals.css";
import NavBar from "@/components/UI/NavBar/NavBar";
import FooterText from "@/components/UI/Footer/FooterText";
import FooterSiteNav from "@/components/UI/Footer/FooterSiteNav";
import ExtraFooterText from "@/components/UI/Footer/ExtraFooterText";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={'bg-white'}>
        <NavBar/>
        {children}
        <footer className={'px-4 pb-3'} style={{backgroundColor: '#f5f5f7'}}>
            <FooterText/>
            {/*Break Line*/}
            <hr className={'my-3 border'}/>
            <FooterSiteNav/>
            <ExtraFooterText/>

        </footer>
        </body>
        </html>
    );
}