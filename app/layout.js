'use client'

import "./globals.css";
import NavBar from "@/components/UI/NavBar";
import Footer from "@/components/UI/Footer";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={'bg-white'}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}