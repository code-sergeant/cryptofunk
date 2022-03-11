import Image from 'next/image'
import synthBg from '../assets/nftBg.png'
import Router from 'next/router'


function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[800px] ">
            <Image src={synthBg}
            layout="fill" objectFit="cover"
            />

                
            
                <div className='relative flex flex-col justify-center'>

                        <div className='flex flex-col justify-center items-center p-10 my-10 md:p-16 lg:p-24 xl:p-36'>
                            <h1 className='p-1 mb-2 rounded-full shadow-lg shadow-purple-600 text-4xl lg:text-6xl text-white font-light font-Exo xl:text-8xl'>Cryptofunk NFTs </h1>
                            <h2 className='text-xl font-Exo md:text-2xl lg:text-3xl'>Coming Soon!</h2>
                        </div>
                        
                        
                        <div className='flex justify-center'>
                            <button onClick={()=>Router.push('https://opensea.io/')} className='font-Exo bg-white bg-opacity-80 border-4 xs:text-md sm:text-2-xl md:text-xl xl:text-2xl border-purple-600 rounded-full text-black px-10 md:px-15 lg:px-20 py-4 hover:bg-opacity-40 hover:text-white active:scale-90 transition duration-150'>
                            Buy on OpenSea
                            </button>
                        </div>
                    
                    

                </div>
            
           
            
        </div>
  )
}

export default Banner