import Image from "next/image";
import { Campus_data } from "../page"

const getdatabyid=(id:number)=>{

    return Campus_data.find((item)=>item.id==id);

}


export default function Campusdetailpage({ params }: { params: { id: number } }) {
  
    const data=getdatabyid(params.id)

    if(!data)
    {
     return  <div>not found</div>
    }

    return <div  className="bg-[#080415]   ">
                    {/* <Image className="rounded-lg " src={'/workernlc.jpg'} alt={data.name} width={700} height={600} /> */}
         {/* <h1 className="text-center  text-[#457F52] text-6xl font-bold">{data.name}</h1> */}


       <div className="grid w-full mx-14 space-x-7  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

       

        <div className="flex w-full space-x-5 pt-10 items-center   ">

        <div className="block space-y-12  ">
            <p className=" text-xl text-[#457F52] ">ID:  </p>
            {/* <p className="font-bold text-4xl text-[#457F52] ">Name: </p> */}
            <p className="font-bold text-xl  text-[#457F52]">Institute:  </p>
            <p className="font-bold text-xl text-[#457F52]">Description:  </p>
            <p className="font-bold text-xl text-[#457F52]">Detail Description:  </p>
            <p className="font-bold text-xl text-[#457F52]">Email:  </p>
            <p className="font-bold text-xl text-[#457F52]">Phone:  </p>
        </div>

        
        <div className="block space-y-12 ">
             <p className="text-white text-sm ">{data.id}</p>
             {/* <p className="text-white text-2xl ">{data.name}</p> */}
            <p className="text-white text-sm ">{data.subject}</p>
            <p className="text-white text-sm ">{data.description}</p>
            <p className="text-white text-xs ">{data.detail}</p>
            <p className="text-white text-sm ">{data.email}</p> 
            <p className="text-white text-sm ">{data.phone}</p>
        </div>
           
        </div>

        <div className="mx-auto pt-8 mt-8  ">
            <Image src={data.detail_image} alt={"data.name"} width={450} height={400} />

        </div>

        </div>


        </div>


        
        
  }