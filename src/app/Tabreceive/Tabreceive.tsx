'use client'
import React, { useEffect,useState } from 'react'
import { useRef  } from 'react'
import Careers from '../Careers';
const Tabreceive = ({title}:any) => {

    const [SelectedTab,SetSelectedTab]=useState(0);

const Firstbtnref:any = useRef();

useEffect(()=>{
    Firstbtnref.current.focus();
},[])
//   console.log(title)
    return (

<div>



    <div className='bg-[#080415] flex justify-center items-center  pt-4 pb-4 px-28 ' >
   
        <div className='flex  flex-col gap-y-2  w-full '>
        <h2 style={{fontFamily:'Libre Baskerville', fontWeight:800 } } className=" font-bold  text-center text-6xl items-center  text-[#DC2626]" data-aos="fade-right">Courses</h2>
            <div className='flex gap-15 p-4 rounded-xl  text-white text-xl bg-blue-500 justify-between items-center'>
                {title.map((item:any,index:any)=>(

            <button 
            
            ref={index === 0 ? Firstbtnref : null}
            key={index}
            onClick={()=>{SetSelectedTab(index)}}
            className='outline-none rounded-xl w-60 p-3 font-bold text-2xl text-center hover:bg-blue-300 
            `${SelectedTab===index ? focus:bg-white focus:text-blue-600 focus:text-2xl : "" }`
            '>
                       
                       
                        {item.title}
                    </button>
                ))}
            </div>

            <div>

                {title.map((item:any,index:any)=>(
                    <div className={`${SelectedTab === index ? "" : 'hidden'}`}>
                        {item.Content}
                    

                    </div>
                ))}
        
            </div>
            
        </div>

    </div>


    </div>
  )
}

export default Tabreceive