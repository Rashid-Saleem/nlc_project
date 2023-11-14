import React from 'react'
import Image from 'next/image'
import {AiOutlineTwitter} from 'react-icons/ai' 
import{GrFacebookOption} from 'react-icons/gr'
import{TbCopyright} from 'react-icons/tb'
import {ImLinkedin2} from 'react-icons/im'
import Link from 'next/link'
export default function Footer() {
  return (
    
        <div>       
                <div className='grid   md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-1  mt-5 pb-20 mx-3  '>
                
                <div className='block ml-10 basis-3/6   items-start '>
                  <Image src={"/nlc.png"} alt='logo of website' width={150} height={150} />
                  <p className='text-[#666666] pt-12 space-y-2 sm:text-sm md:text-lg lg:text-sm'>Through Hands-on trainings, we endeavor to <br/> meet national and international standards in Technical Education.</p>
                        <div className='flex space-x-3 rounded-md pt-12'>
                            <AiOutlineTwitter size={45} className='bg-[#F1F1F1] rounded-lg p-2 overflow-hidden' />
                            <GrFacebookOption size={45} className='bg-[#F1F1F1]  p-2 overflow-hidden rounded-lg'/>
                            <ImLinkedin2 size={45} className='bg-[#F1F1F1] p-2 overflow-hidden rounded-lg'/>        
                        </div>
               
                  </div>
                
                    <div className='basis-1/6 items-start'>
                    
                        <h2 className='text-[#666666]  text-xl font-semibold'>Company</h2>
                    <ul className='block pt-4 space-y-2'>
                    <li className=' text-lg   text-[#666666]'> <Link href='#'>About </Link> </li>
                    <li className=' text-[#666666] text-lg'><Link href='#'>Terms of Use</Link></li>
                    <li className=' text-lg text-[#666666] '><Link href='#'>Privacy Policy</Link></li>
                    <li className='  text-lg text-[#666666] '><Link href='#'>How It works</Link></li>
                    <li className='  text-lg text-[#666666] '><Link href='#'>Contact Us</Link></li>
                    </ul>

                    </div>

                    <div className='basis-1/6 items-start'>
                        <h2 className='text-[#666666]  text-xl font-semibold'>Support</h2>
                    <ul className='block py-2 space-y-2 pt-4  text-[#666666]'>
                    <li className=' text-[#666666] text-lg   '> <Link href='#'>Support Career </Link> </li>
                    <li className=' text-[#666666] text-lg'><Link href='#'>24H Services</Link></li>
                    <li className=' text-lg text-[#666666]'><Link href='#'>Quick Chat</Link></li>
                    </ul>
                    </div>


                    <div className='basis-1/6 items-start'>
                        <h2 className='text-[#666666]  text-xl font-semibold'>Contact</h2>
                    <ul className='block  pt-4 space-y-2 text-[#666666]'>
                    <li className=' text-lg   '> <Link href='#'>Whatsapp </Link> </li>
                    <li className='  text-lg'><Link href='#'>Support 24h</Link></li>
                    </ul>
                    </div>

                </div>

            <hr className='mt-2'/>


              <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 mx-2 sm:mx-3 md:mx-12 lg:mx-12 pt-5 '>

                <div className='text-[#666666] flex items-center'>
                    <p>Copyright</p> <TbCopyright size={10}/> <p>2023 Dine Market</p></div>
                <div className='flex'>
                    <p className='text-[#666666]'>Designed By:</p>
                    <h2 className='text-gray-900 text-lg'>Design-Studio</h2>
                </div>

                <div className='flex text-gray-900 sm:text-xs  items-center'>
                    <p className='text-[#666666]'>Code By:</p>
                    <h2 className='text-lg text-gray-900'> Muhammad Usman Awan</h2>
                </div>

              </div>


    </div>
  )
}