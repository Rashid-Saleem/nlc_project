import React from 'react'
import { Navbar } from '../Navbar'
import Footer from '../Footer'

export default function page() {
  return (
<div>
    <Navbar />
    <div className="py-20 bg-gray-50 pt-0 mt-6">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-[#EF4444] font-bold md:text-4xl">Our Faculty</h2>
            <p className="text-[#374151] text-xl font-semibold lg:w-2000 ">The mission of NLC is to achieve excellence in teaching and research for producing students with sound professional knowledge, integrity of character, a keen sense of social responsibility and a passion for lifelong learning. The NLC shall stand committed to creating an environment conducive for attracting the best students, faculty and supporting staff for contributing to the development of a prosperous, peaceful and enlightened society.</p>
        </div>
        <div className="grid gap-12 items-center sm:grid-cols-1 md:grid-cols-4 mb-0">
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/hodiot.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                <h4 className="text-xl font-bold text-[#374151]">Mr Usman Awan</h4>
                    <span className="block font-bold text-[#374151]">HOD (IOT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/HODmmat.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Quaid Khan</h4>
                    <span className="block font-bold text-[#374151]">HOD (MMAT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/hodmechanical.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Bilal</h4>
                    <span className="block font-bold text-[#374151]">HOD(Mechanical)</span>
                </div>
            </div>


            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/ammarmechanical.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Ammar</h4>
                    <span className="block font-bold text-[#374151]">Instructor (MMAT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/saadinstructor.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Muhammad Saad</h4>
                    <span className="block font-bold text-[#374151]">Instructor (MMAT)</span>
                </div>
            </div>

            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/chemistryteacher.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Hamid Raza</h4>
                    <span className="block font-bold text-[#374151]">Instructor Chemistry & Maths  (MMAT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/physicsins.png" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Ehtisham Abid </h4>
                    <span className="block font-bold text-[#374151]">Instructor Physics (MMAT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/mmatlab.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Asad Quraishi</h4>
                    <span className="block font-bold text-[#374151]">Instructor Lab (MMAT & IOT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/mmatins.jpg" alt="Mehboob Ilahi Image" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Mehboob Ilahi</h4>
                    <span className="block font-bold text-[#374151]">Instructor (MMAT)</span>
                </div>
            </div>

            <div className="space-y-4 text-center">
            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/majidmechanical.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Majid</h4>
                    <span className="block font-bold text-[#374151]">Instructor (MMAT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/usmandaemechanical.jpg" alt="usman Image" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Usman</h4>
                    <span className="block font-bold text-[#374151]">Instructor (MMAT)</span>
                </div>
            </div>




        </div>
    </div>
</div>



<Footer />

</div>
  )
}
















