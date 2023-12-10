import image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Careers() {
  return (
    <div className='bg-[#080415] pt-10 pb-10'>


            <div className='flex mx-25 space-x-10'>
                <div>
                    <h3   style={{fontFamily:'lora', fontWeight:1500 } } data-aos="fade-left"  className='text-white font-bold text-5xl ml-20 ' >Choose the best <br /> <span style={{fontFamily:'Libre Baskerville' } } className='text-[#457F52]'> Programs </span> for your <br />Career</h3>
                </div>
                <div className=' pt-8 pl-6'>
                <p data-aos="fade-right" className='text-white'>Join us for an exciting and enriching event.<span style={{fontFamily:'Libre Baskerville', fontWeight:300 } } className='text-lg text-[#65A873]' >NLC</span> is proud to present a captivating<br/> and diverse range of  events throughout the academic year, designed to engage, inspire, <br />and entertain students, faculty, staff, and the  broader community.</p>
                </div>

            </div>
            {/* class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
  style="background-image: url('...'); height: 400px"> */}
              {/* <div  className=' flex  flex-row items-center border-solid pt-10 pb-10  pl-8 pr-3 border-2 border-[#65A873]   mt-20  mx-20 style="background-image: url(/learning2.webp)'> */}

              {/* <div className='flex flex-row items-center border-solid pt-10 pb-10 pl-8 pr-3 border-2 border-[#65A873] mt-20 mx-20 hover:bg-cover   hover:bg-center cursor-pointer  hover:text-black ' style={{ backgroundImage: 'url(/learning2.webp)' }}>    */}
              
<div className='flex flex-row items-center border-solid pt-10 pb-10 pl-8 pr-3 border-2 border-[#65A873] mt-20 mx-20 hover:bg-cover hover:bg-center cursor-pointer hover:text-black' style={{ backgroundImage: 'url(/learning2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='block w-2/6 '>
                <p style={{ fontFamily: 'lora' }} className='text-white font-light text-base  '>Tue, 22 May, 2022 / 12:00 pm</p>
                <h2 style={{ fontFamily: 'lora' , fontWeight:200 }} className='text-white font-light text-4xl pt-3   '>Sports Tournaments</h2>
              </div>
              <div className=' w-3/6'>
                <p style={{ fontFamily: 'lora',fontWeight:100 }} className='text-slate-900 font-semibold text-base   '>Cheer on our talented athletes and showcase your own skills at our <br />  sports  tournaments and competitions. Our university takes pride in <br /> fostering a  spirit of healthy competition, teamwork, and physical<br /> well-being.</p>
              </div>
              <div className=' w-1/6 flex justify-center items-center  relative'>
  <button style={{ fontFamily: 'lora', fontWeight: 800 }} className='pt-2 space-x-8  flex items-center pl-4 pr-4 pb-2 bg-[#65A873] capitalize'>
    Read More
    
    <FaArrowRight   />
  
  </button>
</div>



              </div>



              <div className='flex flex-row items-center border-solid pt-10 pb-10 pl-8 pr-3 border-2 border-[#65A873] mt-5 mx-20 hover:bg-cover hover:bg-center cursor-pointer hover:text-black' style={{ backgroundImage: 'url(/learning2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

              
              <div className='block w-2/6 '>
                <p style={{ fontFamily: 'lora' }} className='text-white font-light text-base  '>Tue, 24 May, 2022 / 10:00 pm</p>
                <h2 style={{ fontFamily: 'lora' , fontWeight:200 }} className='text-white font-light text-4xl pt-3   '>Arts Showcases</h2>
              </div>
              <div className=' w-3/6'>
                <p style={{ fontFamily: 'lora',fontWeight:100 }} className='text-slate-900 font-semibold text-base  '>Immerse yourself in the world of creativity and talent at our performing <br /> arts showcases. From theater productions and musical performances to <br /> dance recitals.</p>
              </div>
              <div className=' w-1/6 flex justify-center items-center  relative'>
  <button style={{ fontFamily: 'lora', fontWeight: 800 }} className='pt-2 space-x-8  flex items-center pl-4 pr-4 pb-2 bg-[#65A873] capitalize'>
    Read More
    
    <FaArrowRight   />
  
  </button>
</div>



              </div>




              <div className='flex flex-row items-center border-solid pt-10 pb-10 pl-8 pr-3 border-2 border-[#65A873] mt-5 mx-20 hover:bg-cover hover:bg-center cursor-pointer hover:text-black' style={{ backgroundImage: 'url(/learning2.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

              
<div className='block w-2/6 '>
  <p style={{ fontFamily: 'lora' }} className='text-white font-light text-base  '>Tue, 22 May, 2022 / 02:00 pm</p>
  <h2 style={{ fontFamily: 'lora' , fontWeight:200 }} className='text-white font-light text-4xl pt-3   '>Machine Learning</h2>
</div>
<div className=' w-3/6'>
  <p style={{ fontFamily: 'lora',fontWeight:100 }} className='text-slate-900 font-semibold text-base   '>The core idea behind machine learning is to develop algorithms that can <br /> learn from examples or experiences, and make predictions or take actions <br /> based on that learned knowledge.</p>
</div>
<div className=' w-1/6 flex justify-center items-center  ml-15 relative'>
<button style={{ fontFamily: 'lora', fontWeight: 800 }} className='pt-2 space-x-8  flex items-center pl-4 pr-4 pb-2 bg-[#65A873] capitalize'>
Read More

<FaArrowRight   />

</button>
</div>



</div>
















    </div>
  )
}
