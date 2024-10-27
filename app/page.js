import Image from "next/image";
import iPhone16Pro from '/public/img/iphone 16 pro.jpg';

export default function Home() {
  return (
      <>
      <main className={' '}>
          <FeatureTile product={'iPhone 16 Pro'} />
          <ContentTile product={'iPhone 16'}/>
          <ContentTile product={'Apple Watch'}/>

      </main>
      </>
  );
}

function FeatureTile({product}) {
    return (
        <div className={'w-full h-1/5 md:h-2/3 bg-black text-white flex justify-center mb-3 pb-10'}>
            <div className={'flex-col items-stretch w-1/2'}>
                <div className={'mt-20 mb-60 z-10'}>
                    {/*Product Title*/}
                    <div className={'text-center'}>
                          <span className={''} style={{fontFamily: 'Helvetica', fontSize: '32px'}}>
                              {product}
                          </span>
                    </div>
                    {/*Product Quote*/}
                    <div className={'text-center'} style={{fontFamily: 'Helvetica', fontSize: '16px'}}>
                          <span>
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
                        <span className={'text-gray-500'}>Apple Intelligence coming this fall</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentTile({product}) {
    return (
        <div className={'w-full h-1/2 md:h-5/6 bg-purple-600 text-white flex justify-center mb-3'}>
            <div className={'flex-col items-stretch w-1/2'}>

                <div className={'mt-20 mb-60'}>
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