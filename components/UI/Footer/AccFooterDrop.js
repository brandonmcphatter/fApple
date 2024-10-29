export default function AccFooterDrop({children}) {
    return (
        <div className={'flex justify-between my-2 font-thin tracking-wide ps-4'}
             style={{fontFamily: 'Helvetica', fontSize: '12px'}}>
            <ul className={'grid gap-2 mb-2'}>
                {children}
            </ul>
        </div>
    )
}