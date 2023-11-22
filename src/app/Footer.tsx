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
                <div className='grid pt-3 bg-[#0fa3b1] text-white md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-1  mt-2 pb-20 mx-3  '>
                
                <div className='block ml-10 basis-3/6   items-start '>
                  <Image src={"/nlc.png"} alt='logo of website' width={150} height={150} />
                  <p className='text-white bg-[#0fa3b1] pt-12 space-y-2 font-sm sm:text-sm md:text-lg lg:text-lg'>Through Hands-on trainings, we <br /> endeavor to  meet national and international standards in Technical Education.</p>
                        <div className='flex space-x-3 rounded-md pt-12'>
                            <AiOutlineTwitter size={45} className='bg-[#0fa3b1] text-white rounded-lg p-2 overflow-hidden' />
                            <GrFacebookOption size={45} className='bg-[#0fa3b1] text-white  p-2 overflow-hidden rounded-lg'/>
                            <ImLinkedin2 size={45} className='bg-[#0fa3b1] text-white p-2 overflow-hidden rounded-lg'/>        
                        </div>
               
                  </div>
                
                    <div className='basis-1/6 ml-8 items-start'>
                    
                        <h2 className='bg-[#0fa3b1] text-white text-2xl font-semibold'>Company</h2>
                    <ul className='block pt-4 space-y-2'>
                    <li className=' text-xl   bg-[#0fa3b1] text-white'> <Link href={{ pathname: '/Home'}}>Home </Link> </li>
                    <li className=' bg-[#0fa3b1] text-white text-xl'><Link href={{ pathname: '/Courses'}}>Courses</Link></li>
                    <li className=' text-xl bg-[#0fa3b1] text-white '><Link href={{ pathname: '/Campus'}}>Campus</Link></li>
                    <li className='  text-xl bg-[#0fa3b1] text-white '><Link href={{ pathname: '/Faculty'}}>Our Faculty</Link></li>
                    <li className='  text-xl bg-[#0fa3b1] text-white '><Link href={{ pathname: '/Registration'}}>Registration</Link></li>
                    <li className='  text-xl bg-[#0fa3b1] text-white '><Link href={{ pathname: '/Footer'}}>Contact Us</Link></li>
                    </ul>

                    </div>

                    <div className='basis-1/6 items-start'>
                        <h2 className='bg-[#0fa3b1] text-white  text-2xl font-semibold'>Support</h2>
                    <ul className='block py-2 space-y-2 pt-4  bg-[#0fa3b1] text-white'>
                    <li className=' bg-[#0fa3b1] text-white text-xl   '> <Link href='#'>Support Career </Link> </li>
                    <li className=' bg-[#0fa3b1] text-white text-xl'><Link href='#'>24H Services</Link></li>
                    <li className=' text-xl bg-[#0fa3b1] text-white'><Link href='#'>Quick Chat</Link></li>
                    </ul>
                    </div>


                    <div className='basis-1/6 items-start'>
                        <h2 className='bg-[#0fa3b1] text-white  text-2xl font-semibold'>Contact</h2>
                    <ul className='block  pt-4 space-y-2 bg-[#0fa3b1] text-white'>
                    <li className=' text-xl   '> <Link href='#'>Whatsapp </Link> </li>
                    <li className='  text-xl'><Link href='#'>Support 24h</Link></li>
                    </ul>
                    </div>

                </div>

            <hr className='mt-0'/>


              <div className='grid md:grid-cols-3  bg-[#0fa3b1] text-white lg:grid-cols-3 sm:grid-cols-1 mx-2 sm:mx-3 md:mx-3 lg:mx-3 pt-5 '>

                <div className='bg-[#0fa3b1] text-white  flex items-center'>
                    <p>Copyright</p> <TbCopyright size={10}/> <p>2023 Dine Market</p></div>
                <div className='flex items-center'>
                    <p className='bg-[#0fa3b1] text-white'>Designed By:</p>
                    <h2 className='bg-[#0fa3b1] text-white text-lg'>Design-Studio</h2>
                </div>

                <div className='flex bg-[#0fa3b1] text-white sm:text-xs  items-center'>
                    <p className='bg-[#0fa3b1] text-white'>Code By:</p>
                    <h2 className='text-lg bg-[#0fa3b1] text-white'> Muhammad Usman Awan</h2>
                </div>

              </div>


    </div>
  )
}