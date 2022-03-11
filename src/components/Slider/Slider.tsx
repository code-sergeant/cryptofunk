import React, {useState} from 'react'
import BtnSlider from './BtnSlider'



const Slider = () => {

    const imageSlider = [
        {
          image: "https://nfts.wtf/wp-content/uploads/2021/07/2-cosmicpaws.io_-4a76513b8df576b9bf288eaf31f9eccd-1024x1024.jpeg",
        },
        {
          image:"https://blogs.airdropalert.com/wp-content/uploads/2021/10/Gutter-Rat-PFP-1024x1024.png",
        },
        {
          image:"https://cdn.dribbble.com/users/83671/screenshots/17013854/mr_noir_1_1.png?compress=1&resize=400x300&vertical=top",
        },
        {
          image:"https://www.senzuseeds.com/assets/NFTCommunities/bayc9433.png",
        },
        {
          image:"https://cdn.dribbble.com/users/83671/screenshots/17013854/media/0606c2ea0fdb05261a28767796c281c9.png?compress=1&resize=400x300&vertical=top",
        },
      ];

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== imageSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === imageSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(imageSlider.length)
        }
    }


    return (
        <div className="relative flex">
            <div className='p-2 my-auto'>
              <BtnSlider moveSlide={nextSlide} direction={"next"} />
            </div>
            
            <div>
                {imageSlider.map((obj, index) => {
                return (
                    <img
                    key={obj.image}
                    src={obj.image}
                    height={500}
                    width={500}
                    className={slideIndex === index + 1 ? "opacity-1 object-full" : " absolute opacity-0 object-fill"
                    }
                    />
                        
                    
                )
            })}
            
              
            </div>
            
            <div className='p-2 my-auto'>
              <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            </div>
            
            

        </div>
            
         
    )
}

export default Slider;