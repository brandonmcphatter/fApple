export default function ContentTile({product, bgColor}) {
    return (
        <div className={'w-full h-1/2 md:h-5/6 text-white flex justify-center mb-3'} style={{backgroundColor: `${bgColor}`}}>
            <div className={'flex-col items-stretch w-1/2 pb-20'}>

                <div className={'mt-10 mb-20'}>
                    {/*Product Title*/}
                    <div className={'text-center'}>
                          <span className={''} style={{fontFamily: 'Helvetica', fontSize: '32px'}}>
                              {product}
                          </span>
                    </div>
                    {/*Product Quote*/}
                    <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span className={''}>
                              Hello, Apple Intelligence.
                          </span>
                    </div>
                </div>

                {/*Content Split*/}

                <div className={'self-end'}>
                    {/*Buttons*/}
                    <div className={'flex justify-center gap-3 mb-4'}>
                        <button className={'bg-blue-500 text-white py-2 px-4 rounded-full text-sm'}>Learn More</button>
                        <button className={'bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded-full text-sm'}>Buy</button>

                    </div>
                    {/*Small Text*/}
                    <div className={'text-center'}>
                        <span className={'text-black'}>Apple Intelligence coming this fall</span>
                    </div>
                </div>
            </div>
        </div>
    )
}