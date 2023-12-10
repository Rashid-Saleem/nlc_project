import React from 'react'
import Image from 'next/image'
import {AiOutlineTwitter} from 'react-icons/ai' 
import{GrFacebookOption} from 'react-icons/gr'
import{TbCopyright} from 'react-icons/tb'
import {ImLinkedin2} from 'react-icons/im'
import Link from 'next/link'
export default function Footer() {
  return (
    
        <div >       
                <div className='grid pt-3 bg-[#080415] text-white md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-1  mt-2  w-full '>
                
                <div className='block ml-10 basis-3/6   items-start ' >
                  <Image src={"/nlc.png"} alt='logo of website' width={150} height={150} />
                  <p style={{fontFamily:'Young', fontWeight:1200 } }      className='text-white bg-[#080415] pt-6 space-y-2 font-sm sm:text-sm md:text-2xl lg:text-2xl'>Through Hands-on trainings, we <br /> endeavor to  meet national and international standards in Technical Education.</p>
                        <div className='flex space-x-3 rounded-md pt-2'>
                            <AiOutlineTwitter size={45} className='bg-[#080415] text-white rounded-lg p-2 overflow-hidden' />
                            <GrFacebookOption size={45} className='bg-[#080415] text-white  p-2 overflow-hidden rounded-lg'/>
                            <ImLinkedin2 size={45} className='bg-[#080415] text-white p-2 overflow-hidden rounded-lg'/>        
                        </div>
               
                  </div>
                
                    <div className='basis-1/6 ml-8 items-start'>
                    
                        <h2 style={{fontFamily:'Garamond', fontWeight:1500 } } className='bg-[#080415] text-white text-3xl font-bold'>Company</h2>
                    <ul className='block pt-4 '>
                    <li style={{fontFamily:'Libre Baskerville',  } } className=' text-xl   bg-[#080415] text-white'> <Link href={{ pathname: '/Home'}}>Home </Link> </li>
                    <li style={{fontFamily:'Libre Baskerville',  } } className=' bg-[#080415] text-white text-xl'><Link href={{ pathname: '/Courses'}}>Courses</Link></li>
                    <li style={{fontFamily:'Libre Baskerville', } } className=' text-xl bg-[#080415] text-white '><Link href={{ pathname: '/Campus'}}>Campus</Link></li>
                    <li style={{fontFamily:'Libre Baskerville',  } } className='  text-xl bg-[#080415] text-white '><Link href={{ pathname: '/Faculty'}}>Our Faculty</Link></li>
                    <li style={{fontFamily:'Libre Baskerville',  } } className='  text-xl bg-[#080415] text-white '><Link href={{ pathname: '/Registration'}}>Registration</Link></li>
                    <li style={{fontFamily:'Libre Baskerville' } } className='  text-xl bg-[#080415] text-white '><Link href={{ pathname: '/Footer'}}>Contact Us</Link></li>
                    </ul>

                    </div>

                    <div className='basis-1/6 items-start'>
                        <h2 style={{fontFamily:'Garamond', fontWeight:1500 } } className='bg-[#080415] text-white  text-3xl font-bold'>Support</h2>
                    <ul className='block py-2  pt-4  bg-[#080415] text-white'>
                    <li style={{fontFamily:'Libre Baskerville' } } className=' bg-[#080415] text-white text-xl   '> <Link href='#'>Support Career </Link> </li>
                    <li style={{fontFamily:'Libre Baskerville' } } className=' bg-[#080415] text-white text-xl'><Link href='#'>24H Services</Link></li>
                    <li style={{fontFamily:'Libre Baskerville' } } className=' text-xl bg-[#080415] text-white'><Link href='#'>Quick Chat</Link></li>
                    </ul>
                    </div>


                    <div className='basis-1/6 items-start'>
                        <h2 style={{fontFamily:'Garamond', fontWeight:1500 } } className='bg-[#080415] text-white  text-3xl font-bold'>Contact</h2>
                    <ul className='block  pt-4 space-y-2 bg-[#080415] text-white'>
                    <li style={{fontFamily:'Libre Baskerville' } } className=' text-xl   '> <Link href='#'>Whatsapp </Link> </li>
                    <li style={{fontFamily:'Libre Baskerville' } }  className='  text-xl'><Link href='#'>Support 24h</Link></li>
                    </ul>
                    </div>

                </div>

            <hr className='mt-0'/>


              <div className='grid md:grid-cols-3  bg-[#080415] text-white lg:grid-cols-3 sm:grid-cols-1  pt-5 '>

                <div className='bg-[#080415] text-white pl-10 flex items-center'>
                    <p style={{fontFamily:'Libre Baskerville' } } className='text-lg'>Copyright</p> <TbCopyright size={10}/> <p  style={{fontFamily:'Libre Baskerville' } }>2023 Dine Market</p></div>
                <div className='flex items-center'>
                    <p style={{fontFamily:'Libre Baskerville' } } className='bg-[#080415]  text-lg text-white'>Designed By:</p>
                    <h2 className='bg-[#080415] text-white pl-2 '>Design-Studio</h2>
                </div>

                <div className='flex bg-[#080415] text-white   items-center'>
                    <p style={{fontFamily:'Libre Baskerville' } } className='bg-[#080415] text-white'>Code By:</p>
                    <h2 className=' bg-[#080415] text-white pl-3'> Muhammad Usman Awan</h2>
                </div>

              </div>


    </div>
  )
}