import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

export default function AccordionFooter({title, children}) {
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