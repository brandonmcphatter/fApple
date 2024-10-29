import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faGripLines, faShoppingBag} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
        <nav style={{backgroundColor: 'rgba(24,24,24,0.68)', opacity: '99%', backdropFilter: 'blur(30px)'}} className={'fixed w-full'}>
            <div className={'h-12 md:h-11 flex px-4 md:justify-evenly content-center lg:w-1/2 lg:mx-auto'}>
                {/*Apple Logo*/}
                <div className={'w-5 md:w-4 text-white content-center me-auto md:ms-1'}>
                    <FontAwesomeIcon icon={faApple} style={{color: 'white'}}/>
                </div>
                {/*Product List*/}
                <div className={'content-center hidden md:inline mx-auto px-2 w-full'}>
                    <ul className={'flex gap-3 justify-evenly'}
                        style={{color: 'white', fontFamily: 'Helvetica', fontSize: '12px'}}>
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
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'white'}}/>
                    </div>
                    <div className={'min-w-4 text-white content-center'}>
                        <FontAwesomeIcon icon={faShoppingBag} style={{color: 'white'}}/>
                    </div>
                    <div className={'min-w-4 text-white content-center md:hidden'}>
                        <FontAwesomeIcon icon={faGripLines} style={{color: 'white'}}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}