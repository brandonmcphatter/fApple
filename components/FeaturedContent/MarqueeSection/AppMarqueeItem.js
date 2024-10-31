import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons";

export default function AppMarqueeItem({title, category, color}) {
    // state for click thru button to appear
    const [hover, setHover] = useState(false);
    function enter() {
        setHover(true);

    }
    function exit() {
        setHover(false);
    }
    return (
        <div className={'flex-col h-32 md:h-44 lg:h-60 me-2 hover:cursor-pointer'} onMouseEnter={enter} onMouseLeave={exit}>
            {/*image box*/}
            <div className={'h-full w-56 md:w-72 lg:w-96 text-white text-sm content-end'}
                 style={{backgroundColor: `${color}`}}>
                <div className={'text-end pe-3 pb-3'}>
                    <FontAwesomeIcon icon={faApple} style={{color: 'white'}}/>{category}
                </div>
            </div>
            {/*image title*/}
            <div className={' tracking-wide md:font-bold'}>
                <span style={{fontSize: '12px'}}>{title}</span>
            </div>
        </div>
    )
}