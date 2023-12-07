'use client'

import {BsChevronCompactLeft} from 'react-icons/bs'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {


  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex,setcurrentIndex]=useState(4)
  
  const previousslide=()=>{
    const newindex=(currentIndex===0)? slides.length-1 : currentIndex-1 
    
    setcurrentIndex(newindex)
    
  }

  const nextslide=()=>{

    const newindex=(currentIndex===slides.length-1)? 0 :currentIndex+1 
    setcurrentIndex(newindex)
  }
  
  // function gotoIndexofslide(slideindex: number): React.MouseEventHandler<HTMLDivElement> | undefined {
  //   throw new Error('Function not implemented.');
  // }

 const  gotoIndexofslide=(slideindex:any)=>{
  setcurrentIndex(slideindex);
 }
  
  
  return (
<div>

<section className="bg-white py-3 mx-20 flex justify-center items-center">
      <div className="container mx-auto px-12">
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-between">
          <div className="lg:w-1/2  text-left">
            <h1 className="text-4xl lg:text-6xl text-black font-bold  mb-6 sm:mb-2" data-aos="fade-right">
              Discover the Latest 
              <span data-aos="flip-left" className="text-red-500"> Courses</span> <span className="text-gray-700" data-aos="flip-right">Trends</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8" data-aos="flip-left">
              Get OUr Up-To-Date Courses online as well as onsite.
            </p>
            <Link href={{ pathname: '/Courses'}}
              
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-full text-xl font-bold transition-all duration-300 inline-block"
            >
              Get Courses
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0  lg:block">
  <div className="relative h-96 lg:h-auto w-full" data-aos="flip-right">
    <Image
      src="/fworking.jpeg"
      alt="Hero Image"
      className="rounded-lg shadow transition duration-300 ease-in-out hover:opacity-75 hover:shadow-lg"
      width={500}
      height={350}
    />
  </div>
</div>


        </div>
      </div>
    </section>
















<div className='max-w-[1400px] h-[780px] w-full m-auto  pt-8 pb-10 px-4 relative group'>
<div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
{/* Left Arrow for slider */}

<div className='hidden group-hover:block absolute top-[50%] -translate-x- translate-y-[-50%] left-5 text-while rounded-full text-2xl bg-black/20 cursor-pointer '>
  <BsChevronCompactLeft onClick={previousslide} size={30} />
  </div>


{/* Right arrow for slider */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x translate-y-[-50%] right-5 text-while rounded-full text-2xl bg-black/20 cursor-pointer '>
  <BsChevronCompactRight  onClick={nextslide} size={30}/>
</div>

<div className=' flex top-4 justify-center py-3 '>

{slides.map((slide,slideindex)=>(
  <div   key={slideindex}   onClick={()=>gotoIndexofslide(slideindex)}  className='text-2xl cursor-pointer'>
    <RxDotFilled  />
  </div>
) ) }



</div>




</div>







    



</div>
  );
};

export default Hero;
