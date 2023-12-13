import Image from 'next/image'
import React from 'react'
import { Navbar } from '../Navbar'
import Footer from '../Footer'

export default function page() {
  return (
    <div>
        <Navbar />
        <div className='flex justify-center'>
        <Image    src={'/eng.jpg'} alt={'Principal Message'} width={500} height={150}   />
        </div>
        <div className='mx-20 '>      
              <h1 style={{fontFamily:'lora', fontWeight:800 } }  className='text-4xl text-center'>Principal Message</h1>
        <p className='mx-25 pb-3 pl-10 text-lg pt-5'>Many centuries ago, a wise man pronounced, “Knowledge is Power”. The truth of this dictum has been proved time and again. History is   a testimony <br /> to the fact that only those individuals and nations have risen to distinction that have excelled in the pursuit of knowledge.</p>
        <br />
<p className='pb-2 pl-10 text-lg'>
An educational institution caters to this very important requirement. Within its four walls, the students are provided an ideal environment  where their <br /> mental and physical faculties get maximum opportunities for better grooming and enlightenment, in return students are expected to excel in all walks <br/> of life.</p>

<p className='pb-3 pl-10 text-lg'>Dear students! In the light of what I have said above, you must have understood that it is education which is the most important investment which one<br /> makes in one’s own life. This investment requires commitment, devotion and dedication. If you have these qualities and the will  to excel, the Institute <br /> under NLC in Mandra  will show you the way.</p>

<b className='pb-2 pl-10 text-lg' >With Best Wishes</b>
<p className='pb-2 pl-10 text-lg'>Name of Principal</p>

</div>


<Footer />
    </div>
  )
}
