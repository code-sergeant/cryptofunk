import React, { useState } from 'react'
import Slider from './Slider/Slider'


function NftDisplay() {

    const [clicked, setIsClicked] = useState(false)


    

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 bg-gray-600 py-20'>

        <div> 
            <div className='flex flex-col items-center py-20 font-Exo'>
            
                <div className='mb-2'>
                    <h1 className='text-8xl text-white'>Traits</h1>
                </div>

                <hr className='h-1 w-72 my-10 border border-purple-600 bg-purple-600' />
                
                <div className='text-gray-800'>
                    <div className='flex bg-white w-60 h-12 pl-6 py-2 rounded-full mb-2'>
                        <h1 className='text-2xl'>Uncommon</h1> 
                        <div onClick={() => setIsClicked(true)} className=' ml-4 mt-1 cursor-pointer h-5 w-5 bg-white rounded-full ring ring-purple-600'>
                        </div>         
                                
                    </div>

                    <div className='flex w-60 h-12 bg-white pl-6 py-2 rounded-full mb-2'>
                            <h1 className='text-2xl'>Rare</h1> 
                            <div onClick={() => setIsClicked(true)} className=' ml-4 mt-1 cursor-pointer h-5 w-5 bg-white rounded-full ring ring-purple-600'>
                            </div>   
                        </div>

                    <div className='flex w-60 h-12 bg-white pl-6 py-2 rounded-full mb-2'>

                        <h1 className='text-2xl'>Ultra Rare</h1> 
                            <div onClick={() => setIsClicked(true)} className=' ml-4 mt-1 cursor-pointer h-5 w-5 bg-white rounded-full ring ring-purple-600'>
                            </div> 

                    </div>

                    <div className='flex w-60 h-12 bg-white pl-6 py-2 rounded-full mb-2'>
                    <h1 className='text-2xl'>Legendary</h1> 
                        <div onClick={() => setIsClicked(true)} className=' ml-4 mt-1 cursor-pointer h-5 w-5 bg-white rounded-full ring ring-purple-600'>
                        </div>   
                    </div>
            </div>
          
          </div>
       
          
        </div>


        <div className='flex items-center justify-center p-10'>

                <Slider/>
                  
        </div>

      </div>  
  )
}

export default NftDisplay