import AccordionFooter from "@/components/UI/Footer/AccordionFooter";
import AccFooterDrop from "@/components/UI/Footer/AccFooterDrop";


export default function FooterSiteNav() {
    return (
        /*Site Nav Accordions*/
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
    )
}