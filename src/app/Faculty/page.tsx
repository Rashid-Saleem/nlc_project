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
            <p className="text-[#374151] text-xl font-semibold lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
        </div>
        <div className="grid gap-12 items-center sm:grid-cols-1 md:grid-cols-3 mb-0">
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/IMG3.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Muhammad USman Awan</h4>
                    <span className="block font-bold text-[#374151]">HOD (IOT)</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="/IMG2.jpg" alt="man" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Kamran Abbas</h4>
                    <span className="block  font-bold text-[#374151]">Program Coordinator</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/IMG1.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 className="text-2xl font-bold text-[#374151]">Mr Quaid Khan</h4>
                    <span className="block font-bold text-[#374151]">HOD(MMAT)</span>
                </div>
            </div>
        </div>
    </div>
</div>



<Footer />

</div>
  )
}
















