import React from 'react'

const Map = () => {
  return (
    <div >
      <div className="container ">
        <div>
            <h1 className='font-bold text-4xl relative justify-center flex items-center text-green-500 pb-10 border-b-2'>Map
            <span className="absolute gap-2 w-[150px] h-1 rounded-2xl bottom-7 bg-green-500"></span>
            </h1>
        </div>
     <div className='py-7 overflow-x-auto no-scrollbar'>
     <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8755740806578!2d89.71801614477299!3d24.902225475326567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd9fc367a63ac1%3A0x147cd8844dc607ac!2z4Ka44Ka-4Kao4Ka24Ka-4KaH4KaoIOCmuOCnjeCmleCngeCmsiDgpo_gpqjgp43gpqEg4KaV4Kay4KeH4KacICjgpqzgpr7gprLgpr_gppXgpr4g4Ka24Ka-4KaW4Ka-KQ!5e0!3m2!1sen!2sbd!4v1663094210354!5m2!1sen!2sbd" width="1500" height="400"  loading="lazy"></iframe>
     </div>
      </div>
    </div>
  )
}

export default Map
