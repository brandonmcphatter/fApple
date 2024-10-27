'use client'

import "./globals.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faAngleDown, faAngleUp, faGripLines, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

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

function NavBar() {
    return (
        <nav style={{backgroundColor: '#181818', opacity: '95%'}} className={'fixed w-full'}>
            <div className={'h-12 md:h-11 flex px-4 md:justify-evenly content-center lg:w-1/2 lg:mx-auto'}>
                {/*Apple Logo*/}
                <div className={'w-4 md:w-4 text-white content-center me-auto md:ms-1'}>
                    <FontAwesomeIcon icon={faApple} style={{color: '#afafaf'}}/>
                </div>
                {/*Product List*/}
                <div className={'content-center hidden md:inline mx-auto px-2 w-full'}>
                    <ul className={'flex gap-3 justify-evenly'}
                        style={{color: '#afafaf', fontFamily: 'Helvetica', fontSize: '12px'}}>
                        <li>Store</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Vision</li>
                        <li>AirPods</li>
                        <li>TV & Home</li>
                        <li>Entertainment</li>
                        <li>Accessories</li>
                        <li>Support</li>
                    </ul>
                </div>
                {/*Search and Bag*/}
                <div className={'flex gap-8 md:gap-6 md:mx-1 content-center'}>
                    <div className={'min-w-4 text-white content-center'}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#afafaf'}}/>
                    </div>
                    <div className={'min-w-4 text-white content-center'}>
                        <FontAwesomeIcon icon={faShoppingBag} style={{color: '#afafaf'}}/>
                    </div>
                    <div className={'min-w-4 text-white content-center md:hidden'}>
                        <FontAwesomeIcon icon={faGripLines} style={{color: '#afafaf'}}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function Footer() {
    return (
        <footer className={'px-4 pb-3'} style={{backgroundColor: '#f5f5f7'}}>

            {/*Footer Text*/}
            <ul className={'pt-4 tracking-wide grid gap-2'}
                style={{fontFamily: 'Helvetica', fontSize: '12px', color: '#6b7280'}}>
                <li>

                    1. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone
                    15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device
                    language set to U.S. English, as part of an iOS 18, iPadOS 18, and macOS Sequoia update this
                    fall. English (Australia, Canada, New Zealand, South Africa, UK) language support available this
                    December. Some features, additional platforms, and support for additional languages, like
                    Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese,
                    Spanish, Vietnamese, and others, will be coming over the course of the next year.

                </li>
                <li>

                    2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.

                </li>
                <li>

                    3. Hearing Test and Hearing Aid features expected fall 2024. They will be supported on AirPods Pro 2
                    with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later,
                    and are intended for people 18 years old or older. The Hearing Aid feature will be intended for
                    people with perceived mild to moderate hearing loss and is pending FDA review.

                </li>
                <li>

                    4. Trade-in values will vary based on the condition, year, and configuration of your eligible
                    trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be
                    eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward
                    qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on
                    receipt of a qualifying device matching the description provided when estimate was made. Sales tax
                    may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a
                    valid photo ID (local law may require saving this information). Offer may not be available in all
                    stores, and may vary between in-store and online trade-in. Some stores may have additional
                    requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any
                    trade-in transaction for any reason. More details are available from Apple’s trade-in partner for
                    trade-in and recycling of eligible devices. Restrictions and limitations may apply.

                </li>
                <li>

                    To access and use all Apple Card features and products available only to Apple Card users, you must
                    add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or
                    iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the
                    United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.

                </li>
                <li>

                    If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions
                    about Apple Card.

                </li>
                <li>

                    Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.

                </li>
                <li>

                    A subscription is required for Apple TV+.

                </li>
                <li>

                    A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.

                </li>
                <li>

                    Features are subject to change. Some features, applications, and services may not be available in
                    all regions or all languages.

                </li>
            </ul>

            {/*Break Line*/}
            <hr className={'my-3 border'}/>

            {/*Site Nav Accordions*/}
            <div className={'mt-6'}>
                <AccordionFooter title={'Shop and Learn'}>
                    <AccFooterDrop>
                        <li>Store</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Vision</li>
                        <li>AirPods</li>
                        <li>TV & Home</li>
                        <li>AirTag</li>
                        <li>Accessories</li>
                        <li>Gift Cards</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'Apple Wallet'}>
                    <AccFooterDrop>
                        <li>Wallet</li>
                        <li>Apple Card</li>
                        <li>Apple Pay</li>
                        <li>Apple Cash</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'Account'}>
                    <AccFooterDrop>
                        <li>Manage Your Apple Account</li>
                        <li>Apple Store Account</li>
                        <li>iCloud.com</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'Entertainment'}>
                    <AccFooterDrop>
                        <li>Apple One</li>
                        <li>Apple TV+</li>
                        <li>Apple Music</li>
                        <li>Apple Arcade</li>
                        <li>Apple Fitness+</li>
                        <li>Apple News+</li>
                        <li>Apple Podcasts</li>
                        <li>Apple Books</li>
                        <li>App Store</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'Apple Store'}>
                    <AccFooterDrop>
                        <li>Find a Store</li>
                        <li>Genius Bar</li>
                        <li>Today at Apple</li>
                        <li>Group Reservations</li>
                        <li>Apple Camp</li>
                        <li>Apple Store App</li>
                        <li>Certified Refurbished</li>
                        <li>Apple Trade In</li>
                        <li>Financing</li>
                        <li>Carrier Deals at Apple</li>
                        <li>Order Status</li>
                        <li>Shopping Help</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'For Business'}>
                    <AccFooterDrop>
                        <li>Apple and Business</li>
                        <li>Shop for Business</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'For Education'}>
                    <AccFooterDrop>
                        <li>Apple and Education</li>
                        <li>Shop for K-12</li>
                        <li>Shop for College</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'For Healthcare'}>
                    <AccFooterDrop>
                        <li>Apple in Healthcare</li>
                        <li>Mac in Healthcare</li>
                        <li>Health on Apple Watch</li>
                        <li>Health Records on iPhone and iPad</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'For Government'}>
                    <AccFooterDrop>
                        <li>Shop for Government</li>
                        <li>Shop for Veterans and Military</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'Apple Values'}>
                    <AccFooterDrop>
                        <li>Accessibility</li>
                        <li>Education</li>
                        <li>Environment</li>
                        <li>Inclusion and Diversity</li>
                        <li>Privacy</li>
                        <li>Racial Equity and Justice</li>
                        <li>Supply Chain</li>
                    </AccFooterDrop>
                </AccordionFooter>
                <AccordionFooter title={'About Apple'}>
                    <AccFooterDrop>
                        <li>Newsroom</li>
                        <li>Apple Leadership</li>
                        <li>Career Opportunities</li>
                        <li>Investors</li>
                        <li>Ethics & Compliance</li>
                        <li>Events</li>
                        <li>Contact Apple</li>
                    </AccFooterDrop>
                </AccordionFooter>


            </div>

            {/*More Footer Text*/}
            <ul className={'pt-4 tracking-wide grid gap-3'}
                style={{fontFamily: 'Helvetica', fontSize: '12px', color: '#6b7280'}}>
                <li>
                    More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.
                </li>
                <li>
                    United States
                </li>
                <li>
                    Copyright © 2024 Apple Inc. All rights reserved.
                </li>
                <li>
                    Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
                </li>
            </ul>

        </footer>
    )
}

function AccordionFooter({title, children}) {
    const [drop, setDrop] = useState(false);

    function toggleDrop() {
        setDrop(!drop);
    }

    return (
        <>
            <div onClick={toggleDrop} style={{cursor: 'pointer'}}>
                <div className={'flex justify-between my-2 font-thin tracking-wide'}
                     style={{fontFamily: 'Helvetica', fontSize: '12px'}}>
                    <div>
                        {title}
                    </div>
                    <div>
                        {!drop ?
                            <FontAwesomeIcon icon={faAngleDown} style={{width: '12px'}} className={'text-gray-500'}/> :
                            <FontAwesomeIcon icon={faAngleUp} tyle={{width: '12px'}} className={'text-gray-500'}/>
                        }
                    </div>
                </div>
            </div>

            {/*Dropdown Menu*/}
            <div className={!drop ? 'hidden' : ''}>
                {children}
            </div>
            <hr className={'border'}/>
        </>
    )
}

function AccFooterDrop({children}) {
    return (
        <div className={'flex justify-between my-2 font-thin tracking-wide ps-4'}
             style={{fontFamily: 'Helvetica', fontSize: '12px'}}>
            <ul className={'grid gap-2 mb-2'}>
                {children}
            </ul>
        </div>
    )
}