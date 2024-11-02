'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function ColorSelector({colorNumber, setColorNumber}) {
    const active = 'border-2 border-white rounded-full';
    const description = ['6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Black Titanium',
        '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in White Titanium',
        '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Natural Titanium',
        '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Desert Titanium'
    ]

    return (
        <div className={'mx-auto h-32 flex-col justify-center content-center justify-items-center'}>
            <div className={'text-xs text-center mb-3'} style={{color: '#f5f5f7'}}>
                {colorNumber === 1 && description[0]}
                {colorNumber === 2 && description[1]}
                {colorNumber === 3 && description[2]}
                {colorNumber === 4 && description[3]}
            </div>
            <div className={'md:w-3/4 flex gap-4 justify-center px-10 md:px-6 py-4 rounded-full text-2xl '} style={{backgroundColor: '#2e2e30'}}>
                <FontAwesomeIcon onClick={()=> setColorNumber(1)} className={colorNumber === 1 ? active : ''} icon={faCircle} style={{color: '#000000'}}/>
                <FontAwesomeIcon onClick={()=> setColorNumber(2)} className={colorNumber === 2 ? active : ''} icon={faCircle} style={{color: '#d3d1dc'}}/>
                <FontAwesomeIcon onClick={()=> setColorNumber(3)} className={colorNumber === 3 ? active : ''} icon={faCircle} style={{color: '#959086'}}/>
                <FontAwesomeIcon onClick={()=> setColorNumber(4)} className={colorNumber === 4 ? active : ''} icon={faCircle} style={{color: '#977e6a'}}/>
            </div>
        </div>
    )
}