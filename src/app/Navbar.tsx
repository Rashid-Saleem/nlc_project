"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import 'aos/dist/aos.css';
import Aos from "aos";
export const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    

   





    return (
  
  
  
      <section className=" bg-[#002147]">
      <div className="flex justify-between mb-12  mx-12 items-center">
      <Link href={{ pathname: '/Home'}}> <Image  src={"/nlc.png"} alt='logo of website' width={150} height={150}/></Link>
     
        <ul className=" m-7 md:flex  hidden text-white">

          
    <li className="mx-2 font-bold text-xl  text-white  "><Link href={{ pathname: '/Home'}}>Home</Link> </li>
    <li className="mx-2  font-bold  text-xl text-white"><Link href={{ pathname: '/Faculty'}}>Our Faculty</Link> </li>
    
    <li className="mx-2  font-bold  text-xl text-white"><Link href={{ pathname: '/About'}}>About Us</Link> </li>
    <li className="mx-2  font-bold  text-xl text-white"><Link href={{ pathname: '/Campus'}}>Campus</Link> </li>
    <li className="group relative dropdown mx-2 px-4 text-white bg-[#002147]  cursor-pointer font-bold text-xl uppercase tracking-wide "><Link href={{ pathname: '/Courses'}}>Courses
    
    <ul className="absolute hidden pt-1  group-hover:block">
          <li className="">
            <Link
              className="rounded-t text-white  text-base px-8 block whitespace-no-wrap"
              href={{ pathname: '/DAE'}}
              >DAE</Link>
          </li>
          <li className="">
          <Link
              className="rounded-t text-slate-900  text-center text-base  "
              href={{ pathname: '/Tang'}}
              >Tang china</Link>
          </li>
          <li className="">
          <Link
              className="rounded-t text-slate-900 px-10 text-lg"
              href={{ pathname: '/Ai'}}
              >AI</Link>          </li>
        </ul>
            
    
    </Link>
    </li>

 
    <li className="mx-2 font-bold text-xl text-white"><Link href={{ pathname: '/Registration'}}>Registration</Link> </li>
    <li className="mx-2 font-bold  text-xl text-white"><Link href={{ pathname: '/Footer'}}>Contact_Us</Link> </li>    
           </ul>

           <div className=' md:flex hidden space-x-2  items-center '>
                     <CiSearch/>
                     <input className="text-red-500"  type="text" placeholder="What you looking for"></input>
                    </div>
                    <div className='bg-slate-100 hidden  rounded-full p-4 '>
                         <FiShoppingCart/>
                         <div className="rounded-full p-1 translate-x-20 translate-y-10 bottom-0   ">0</div>
                     </div>

        <div
          className="pr-5 md:hidden z-10"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle && (
          <div className="fixed top-0 left-0 bg-[#FFFFFF] h-screen text-black w-full flex items-center justify-center">
            <ul className=" m-7    ">
            <li className="mx-2 font-bold text-xl  text-gray-700  "><Link href={{ pathname: '/Home'}}>Home</Link> </li>
    <li className="mx-2 font-bold text-xl text-gray-700 "><Link href={{ pathname: '/Courses'}}>Courses</Link> </li> 
    <li className="mx-2  font-bold  text-xl text-gray-700"><Link href={{ pathname: '/Campus'}}>Campus</Link> </li>
   
    <li className="mx-2 font-bold text-xl text-gray-700"><Link href={{ pathname: '/Registration'}}>Registration</Link> </li>
    <li className="mx-2 font-bold  text-xl text-gray-700"><Link href={{ pathname: '/Footer'}}>Contact_Us</Link> </li>    
    
            </ul>
          </div>
        )}
        {/* overlay ends here */}
      </div>
    </section>

    );
        };