import React from 'react'
import Image from 'next/image'
import {AiOutlineTwitter} from 'react-icons/ai' 
import{GrFacebookOption} from 'react-icons/gr'
import{TbCopyright} from 'react-icons/tb'
import {ImLinkedin2} from 'react-icons/im'
import Link from 'next/link'
import { Navbar } from '../Navbar'
export default function page() {
  return (
    
        <div>
          {/* <Navbar /> */}


          <section className='h-full  gradient-form bg-[90e0ef] '>
      <div className='container  px-6 h-full'>
        <div className=' flex justify-center items-center flex-wrap h-full g-6 bg-white text-gray-800'>
          <div className=''>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='px-4 md:px-0'>
                  <div className='md:p-5 md:mx-6'>
                    <div className='text-center'>
                      <h4 className='text-4xl font-bold  text-white mt-1 pt-5 pb-5 pr-25 rounded-lg pl-25  bg-[#0fa3b1] mb-5 '>
                        Contact Us
                      </h4>
                    </div>
                    <form>
                      <p className='mb-4 text-[#0fa3b1] font-bold'>
                        Kindly Contact us if you want to take admission in different Courses of AI, WEB 3.0 and Cloud Computing
                      </p>
                      <div className='mb-4 flex items-center space-x-8'>
                        <label className='text-[#0fa3b1] font-bold'>First Name</label>
                        <input
                          type='text'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter Your First Name'
                          name='fname'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-8'>
                        <label className='text-[#0fa3b1] font-bold'>Last Name</label>
                        <input
                          type='text'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter your Last Name'
                          name='lname'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-10'>
                        <label className='text-[#0fa3b1] font-bold'>Mobile No</label>
                        <input
                          type='number'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter Your Cell Number'
                          name='cellnumber'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-10'>
                        <label className='mr-9 text-[#0fa3b1] font-bold'>Email</label>
                        <input
                          type='email'
                          className='form-control  block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter Your Email'
                          name='userEmail'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-2'>
                        <label className='mr-3 text-[#0fa3b1] font-bold'>Any Comments</label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                      </div>
                      {/* <div className='mb-4 flex items-center space-x-5'>
                        <label>Confirm Password</label>
                        <input
                          type='password'
                          className='form-control block w-30 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Again Enter YOur Password'
                          name='confirmPassword'
                        />
                      </div> */}
                       <Link
              href="/"
              className="bg-[#0fa3b1] font-bold  ml-28  text-white py-3 px-10 rounded-full text-2xl transition-all duration-300 inline-block"
            >
              Send Message
            </Link>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

















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
                    <li className=' text-xl   bg-[#0fa3b1] text-white'> <Link href='#'>About </Link> </li>
                    <li className=' bg-[#0fa3b1] text-white text-xl'><Link href='#'>Terms of Use</Link></li>
                    <li className=' text-xl bg-[#0fa3b1] text-white '><Link href='#'>Privacy Policy</Link></li>
                    <li className='  text-xl bg-[#0fa3b1] text-white '><Link href='#'>How It works</Link></li>
                    <li className='  text-xl bg-[#0fa3b1] text-white '><Link href='#'>Contact Us</Link></li>
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
                    <li className=' text-xl   '> <Link href='#'>Address : Headquarters National Logistics Cell, GHQ Hardinge Road, Rawalpindi </Link> </li>
                    <li className='  text-xl'><Link href='#'>For queries and contact, you can reach us via
Email: usmanawan941@gmail.com
Tel: +92 3345727545</Link></li>

               
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