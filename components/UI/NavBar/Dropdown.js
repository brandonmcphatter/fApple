import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faX} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useState} from "react";

export default function Dropdown({toggleMenu}) {
    const [view, setView] = useState(1);
    const allView = ()=> setView(1);
    const iPhoneView = ()=> setView(2);

    return (
        <div className={'w-svw h-svh pt-3'} style={{backgroundColor: '#161617'}}>
            {/*Display Area*/}
            {view === 1 && <AllProducts iPhoneView={iPhoneView} toggleMenu={toggleMenu}/>}
            {view === 2 && <OptionView toggleMenu={toggleMenu} allView={allView} />}
        </div>
    )
}

function AllProducts({iPhoneView, toggleMenu}) {
    return (
        <div>
            {/*X and < buttons*/}
            <div className={'flex justify-end pt-5 pe-5 pb-8'}>
                <FontAwesomeIcon onClick={toggleMenu} icon={faX} style={{color: '#e8e8ed'}} className={'cursor-pointer'}/>
            </div>
            {/*List of options*/}
            <div className={'ps-10  text-2xl tracking-wide'} style={{fontFamily: 'Helvetica', color: '#e8e8ed'}}>
                <ul className={'grid'}>
                    <DropItem name={'Store'}/>
                    <DropItem name={'Mac'}/>
                    <DropItem name={'iPad'}/>
                    <div onClick={iPhoneView}><DropItem name={'iPhone'}/></div>
                    <DropItem name={'Watch'}/>
                    <DropItem name={'Vision'}/>
                    <DropItem name={'AirPods'}/>
                    <DropItem name={'TV & Home'}/>
                    <DropItem name={'Entertainment'}/>
                    <DropItem name={'Accessories'}/>
                    <DropItem name={'Support'}/>
                </ul>
            </div>
        </div>
    )
}

function OptionView({toggleMenu, allView}) {
    return (
        <div>
            {/*X and < buttons*/}
            <div className={'flex justify-between pt-5 px-5 pb-8'}>
                <FontAwesomeIcon onClick={allView} icon={faAngleLeft} style={{color: 'e8e8ed'}} className={'cursor-pointer'}/>
                <FontAwesomeIcon onClick={toggleMenu} icon={faX} style={{color: 'e8e8ed'}} className={'cursor-pointer'}/>
            </div>
            {/*List of options*/}
            <div className={'ps-10 pb-24 text-2xl tracking-wide'} style={{fontFamily: 'Helvetica', color: '#e8e8ed'}}>
                <ul className={'grid'}>
                    <DropItem name={'Explore All iPhone'}/>
                    <Link onClick={toggleMenu} href={'/iphone-16-pro'}>
                        <DropItem name={'iPhone 16 Pro'}/>
                    </Link>
                    <DropItem name={'iPhone 16'}/>
                    <DropItem name={'iPhone 15'}/>
                    <DropItem name={'iPhone 14'}/>
                    <DropItem name={'iPhone SE'}/>

                    <div className={'text-base'}>
                        <div className={'mt-3 mb-12  grid gap-2'}>
                            <li>Compare iPhone</li>
                            <li>Switch from Android</li>
                        </div>

                        <div className={'mb-14'}>
                            <li className={'mb-6'} style={{color: '#86868b'}}>Shop iPhone</li>
                            <div className={'grid gap-2.5'}>
                                <li>Shop iPhone</li>
                                <li>iPhone Accessories</li>
                                <li>Apple Trade In</li>
                                <li>Carrier Deals at Apple</li>
                                <li>Financing</li>
                            </div>
                        </div>

                        <div className={'pb-36'}>
                            <li className={'mb-6'} style={{color: '#86868b'}}>More from iPhone</li>
                            <div className={'grid gap-2.5'}>
                                <li>iPhone Support</li>
                                <li>AppleCare+ for iPhone</li>
                                <li>iOS 18</li>
                                <li>Apple Intelligence</li>
                                <li>Apps by Apple</li>
                                <li>iPhone Privacy</li>
                                <li>iCloud+</li>
                                <li>Wallet, Pay, Card</li>
                                <li>Siri</li>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

function DropItem({name}) {
    const [hovered, setHovered] = useState(false);

    const hovering = () => setHovered(true);
    const notHovering = () => setHovered(false);
    return (
        <li onMouseEnter={hovering} onMouseLeave={notHovering} className={'cursor-pointer hover:text-gray-100 pb-4'}>
            <div className={'flex justify-between'}>
                <div>
                    {name}
                </div>
                {hovered &&
                    <div className={'pe-5 font-thin'}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                }
            </div>
        </li>
    )
}