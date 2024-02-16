import Image from "next/image";
import { facultydata } from "../page"

const getdatabyid=(id:number)=>{

    return facultydata.find((item)=>item.id==id);

}


export default function Facultydetailpage({ params }: { params: { id: number } }) {
  
    const data=getdatabyid(params.id)

    if(!data)
    {
     return  <div>not found</div>
    }

    return <div  className="bg-[#080415]   ">
         <h1 className="text-center  text-white text-6xl font-bold">{data.name}</h1>

        <div className="flex gap-10 space-x-30 justify-items-center">
       

        <div className="w-3/8 ml-20 pt-3">
            <Image className="rounded-lg " src={data.photo} alt={data.name} width={300} height={300} />
        </div>

        <div className="flex space gap-x-3 w-5/8 pt-10 ">

          

            <div className="block space-y-4 mt-2">
            <p className="font-bold text-4xl text-[#457F52] ">Designation:  </p>
            <p className="font-bold text-4xl text-[#457F52] ">Education: </p>
            <p className="font-bold text-4xl  text-[#457F52]">Email:  </p>
            <p className="font-bold text-4xl text-[#457F52]">Phone:  </p>
            </div>

            <div className="block space-y-4 mt-2">
            <p className="text-white text-2xl ">{data.subject}</p>
            <p className="text-white text-2xl ">{data.description}</p>
            <p className="text-white text-2xl ">{data.email}</p> 
            <p className="text-white text-2xl ">{data.phone}</p>
            </div>
           
           
        </div>


        </div>


        
        </div>
  }