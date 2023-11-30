import Link from 'next/link'
import React from 'react'

export default function VideoComponent() {
  return (
    <div className="py-20 bg-gray-50 pt-0 mt-6">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-center  text-6xl text-gray-700 font-bold md:text-4xl">Our Vision</h2>
            <p className="text-[#374151] text-xl font-semibold lg:w-8/12 lg:mx-auto">Our Motto is to enhance the learning of new Technology so that, we could be able to present our country Internationaly</p>
        </div>
        <div className="grid gap-12 items-center sm:grid-cols-1 md:grid-cols-3 mb-0">
            <div className="space-y-4 text-center">
            <video className="h-400 w-300 rounded-lg" controls autoPlay muted>
      <source src="/iot.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Link
             href={"#"}
              className="bg-red-600 hover:bg-red-600 text-white py-3 px-10 rounded-full text-xl font-bold transition-all duration-300 inline-block"
            >
              Internet of Thing
            </Link>
            </div>
            <div className="space-y-4 text-center">
            <video className="h-400 w-300 rounded-lg" controls autoPlay muted>
      <source src="/enginer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Link
             href={"#"}
              className="bg-red-600 hover:bg-red-600 text-white py-3 px-10 rounded-full text-lg font-bold transition-all duration-300 inline-block"
            >
              Diploma of Associate Engineering
            </Link>
            </div>



             <div className="space-y-4 text-center">
            <video className="h-400 w-300 rounded-lg" controls autoPlay muted>
      <source src="/Welding..mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Link
             href={"#"}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded-full text-xl font-bold transition-all duration-300 inline-block"
            >
              Welding
            </Link>
            </div>
        </div>
    </div>
</div>
  )
}
