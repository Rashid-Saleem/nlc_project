import Image from "next/image";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
export default function Page() {
  return (

        <div>
            <Navbar />
        




    <div className="bg-[#65A855]">

          <div className="mt-6 space-y-3 sm:font-sm md:font-medium lg:font-bold sm:text-sm md:text-lg lg:text-lg  sm:text-center md:text-center lg:text-center">
            <h2 className="font-mono font-bold  text-center text-4xl items-center  text-red-500">Our Campuses</h2>
            <p className="font-serif font-sm text-center text-gray-700 items-center  text-2xl">We have four campuses in Pakistan</p>
          </div>

        <div className=" grid  ml-60 mr-60 space-x-7  items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5">

        <div className="flex flex-col mx-auto items-center  justify-center text-center space-y-2">
          <Image className="justify-center items-center object-center" src={"/mandra.jpg"} alt={" Mandra institute"} width={300} height={400}  />
          <b className="font-bold text-gray-700  text-xl">Mandra</b>
          <p className="justify-center text-gray-700  text-sm ">A short Description of the  <br  />service and how the <br />will benefit from it</p>
          
          {/* <button className="bg-[#cc884c] hover:bg-[#B47E4E]  items-center justify-center flex text-white font-raleway,sans-serif space-x-2 py-2 px-2 rounded">
            <TiShoppingCart className="hover:text-white h-4 w-4 text-white" />
            <p className="font-serif text-white text-xs h-4 ">BUY NOW</p>
            
          </button> */}
        </div>

        <div className="flex flex-col mx-auto items-center  justify-center text-center space-y-2">
          <Image className="justify-center items-center object-center" src={"/Dina.jpg"} alt={" Mandra institute"} width={300} height={400}  />
          <b className="font-bold text-gray-700  text-xl">Dina</b>
          <p className="justify-center text-gray-700  text-sm ">A short Description of the  <br  />service and how the <br />will benefit from it</p>
          
          {/* <button className="bg-[#cc884c] hover:bg-[#B47E4E]  items-center justify-center flex text-white font-raleway,sans-serif space-x-2 py-2 px-2 rounded">
            <TiShoppingCart className="hover:text-white h-4 w-4 text-white" />
            <p className="font-serif text-white text-xs h-4 ">BUY NOW</p>
            
          </button> */}
        </div>

        <div className="flex flex-col mx-auto items-center  justify-center text-center space-y-2">
          <Image className="justify-center items-center object-center" src={"/khairpur.jpg"} alt={" Mandra institute"} width={300} height={400}  />
          <b className="font-bold text-gray-700  text-xl">Khairpur</b>
          <p className="justify-center text-gray-700 text-sm ">A short Description of the  <br  />service and how the <br />will benefit from it</p>
          
          {/* <button className="bg-[#cc884c] hover:bg-[#B47E4E]  items-center justify-center flex text-white font-raleway,sans-serif space-x-2 py-2 px-2 rounded">
            <TiShoppingCart className="hover:text-white h-4 w-4 text-white" />
            <p className="font-serif text-white text-xs h-4 ">BUY NOW</p>
            
          </button> */}
        </div>

        <div className="flex flex-col mx-auto items-center  justify-center text-center space-y-2">
          <Image className="justify-center items-center object-center" src={"/amangarh.jpg"} alt={" Mandra institute"} width={300} height={400}  />
          <b className="font-bold  text-gray-700  text-xl">amangarh</b>
          <p className="justify-center text-gray-700  text-sm ">A short Description of the  <br  />service and how the <br />will benefit from it</p>
          
          {/* <button className="bg-[#cc884c] hover:bg-[#B47E4E]  items-center justify-center flex text-white font-raleway,sans-serif space-x-2 py-2 px-2 rounded">
            <TiShoppingCart className="hover:text-white h-4 w-4 text-white" />
            <p className="font-serif text-white text-xs h-4 ">BUY NOW</p>
            
          </button> */}
        </div>


</div>



    </div>
    

    <Newsletter />
    <Footer />


</div>
  )
}



