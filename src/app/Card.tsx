import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
  <div className='w-full bg-[#080415]'>#  
   {/* <div className="mb-16 text-center"> */}
            <h2 style={{fontFamily:'Libre Baskerville', fontWeight:800 } } className="mb-4 text-center  text-6xl text-[#DC2626] font-bold md:text-5xl" data-aos="flip-right">Our Services</h2>
            {/* <p    style={{fontFamily:'Libre Baskerville', fontWeight:800 } } className="text-white text-xl font-semibold lg:w-8/12 lg:mx-auto" data-aos="zoom-in-up">Our Motto is to enhance the learning of new Technology so that, we could be able to present our country Internationaly</p> */}
        {/* </div> */}
  
  <div className='grid  sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 space-x-6 mx-40 mt-5 pt-5 pb-10'>

        <div className='flex flex-col items-center   '>

        <div className=' '>
        <Image src={'/fworking.jpeg'} alt={'Image for cloud'} height={100} width={365}/>
        </div>

        <div className='block items-center text-center bg-white p-10'>
            <h2   style={{fontFamily:'Libre Baskerville', fontWeight:1000 } } className='text-[#353535] text-xl font-medium hover:text-[#cf9968] text-center font-Libre Baskerville'> We Are Providing Our Services <br /> For IOT Developers </h2>
            <p  style={{fontFamily:'raleway', fontWeight:300 } }  className='text-slate-500 text-sm text-center' >Our high quality Team is able to provide services<br />  for our Students to make them able to   <br /> earn within 6 Months</p>
            <h5  style={{fontFamily:'Libre Baskerville', fontWeight:200 } } className='text-sm pt-3  text-[#cf9968] text-center   cursor-pointer '>LEARN MORE</h5>
        </div>


        </div>


        <div className='flex flex-col items-center   '>

        
        <div className='block items-center text-center bg-white p-8'>
            <h2   style={{fontFamily:'Libre Baskerville', fontWeight:1000 } } className='text-[#353535] text-xl font-medium hover:text-[#cf9968] text-center font-Libre Baskerville'> We Are Providing Our Services <br /> For IOT Developers </h2>
            <p  style={{fontFamily:'raleway', fontWeight:300 } }  className='text-slate-500 text-sm text-center' >Our high quality Team is able to provide services<br />  for our Students to make them able to   <br /> earn within 6 Months</p>
            <h5  style={{fontFamily:'Libre Baskerville', fontWeight:200 } } className='text-sm pt-3  text-[#cf9968] text-center   cursor-pointer '>LEARN MORE</h5>
        </div>
        <div className='h-max '>
        <Image src={'/eng.jpg'} alt={'Image for cloud'} height={220}  width={455}/>
        </div>


        </div>

        <div className='flex flex-col items-center   '>

        <div className=' '>
        <Image src={'/web3.jpg'} alt={'Image for cloud'} height={100} width={355}/>
        </div>

        <div className='block items-center text-center bg-white p-10'>
            <h2   style={{fontFamily:'Libre Baskerville', fontWeight:1000 } } className='text-[#353535] text-xl font-medium hover:text-[#cf9968] text-center font-Libre Baskerville'> We Are Providing Our Services <br /> For IOT Developers </h2>
            <p  style={{fontFamily:'raleway', fontWeight:300 } }  className='text-slate-500 text-sm text-center' >Our high quality Team is able to provide services<br />  for our Students to make them able to   <br /> earn within 6 Months</p>
            <h5  style={{fontFamily:'Libre Baskerville', fontWeight:200 } } className='text-sm pt-3  text-[#cf9968] text-center   cursor-pointer '>LEARN MORE</h5>
        </div>
        


        </div>




        </div>




    </div>
  )
}
