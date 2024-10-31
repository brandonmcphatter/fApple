import styles from './CarouselItem.module.css';

export default function CarouselItem({category, quote, btnText}) {
    return (

        <div className={styles.item}>

            {/*Text and Button*/}
            {/*<div className={'flex-col text-center pb-5'}>*/}
            {/*    <div className={'font-bold text-sm '}>{category}</div>*/}
            {/*    <div className={'text-sm px-4'}>{quote}</div>*/}
            {/*    <button className={'bg-gray-300 hover:bg-gray-200 rounded-full mt-2 px-4 py-2 text-sm font-thin tracking-wide'}>*/}
            {/*        {`${btnText === ''}` ? 'Stream Now' : btnText}*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}