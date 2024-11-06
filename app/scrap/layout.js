'use client'

import "../globals.css";


export default function ScrapLayout({children}) {
    return (
        <html lang="en">
        <body className={''}>
        {children}
        </body>
        </html>
    );
}