import React from 'react'
import Image from 'next/image'
import benfranklin from '../../assets/benfranklin.png'
import wolfdj from '../../assets/wolfdj.png'
import spaceguy from '../../assets/spaceguy.png'
import gorillatunes from '../../assets/gorillatunes.png'
import bg from '../../assets/heroReflection.png'

function NftImages() {
  return (
    <div>

      <div className='md:hidden'>

        <Image src={bg}
        layout="responsive"
        objectFit="cover"
        />

      </div>
      
      
      
      <div className="relative grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center place-items-center z-20 lg:pl-32 lg:pr-32">
          <Image src={benfranklin}/>

          <Image src={wolfdj}/>

          <Image src={spaceguy}/>

          <Image src={gorillatunes}/>
      </div>
  </div>
    
  )
}

export default NftImages