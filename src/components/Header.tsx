import Image from 'next/image'
import discordIcon from '../assets/discordIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import mediumIcon from '../assets/mediumIcon.png'
import instagramIcon from '../assets/instagramIcon.png'
import cfLogo from '../assets/CryptoFunkLogo.png'


function Header() {
  return (
    <header className= 'top-0 bg-white shadow-md py-5 px-5 md:px-10'>
            <div className='relative flex items-center h-12 cursor-pointer my-auto px-10 md:px-20 lg:px-28 justify-between'>
                <div className='flex gap-3 bg-white p-2 rounded-full border-4 border-gray-800 shadow-md shadow-purple-600'>
                    <Image width={40} height={40} src={discordIcon} alt="Discord" objectFit="contain"/>
                    <Image width={40} height={40} src={facebookIcon} alt="Facebook" objectFit="contain" />
                    <Image width={40} height={40} src={mediumIcon} alt="Medium" objectFit="contain" />
                    <Image width={40} height={40} src={instagramIcon} alt="Instagram"  objectFit="contain"/>
                </div>
                

                <div className="flex relative rounded-full shadow-md shadow-purple-600">  
                     
                        <Image src={cfLogo} width={70} height={70} />  
                </div>
                
                
            </div>
        
            {/* <Image src=""/>  */}
        
        
    </header>
  )
}

export default Header