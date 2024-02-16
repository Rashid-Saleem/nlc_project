import Image from "next/image";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import Link from "next/link";
export default function Page() {
  return (

        <div>
            {/* <Navbar /> */}
        




    <div className="bg-[#080415]  ">

          <div className="mt-6 space-y-3 sm:font-sm md:font-medium lg:font-bold sm:text-sm md:text-lg lg:text-lg  sm:text-center md:text-center lg:text-center">
            <h2 className="font-mono font-bold  text-center text-4xl items-center  text-red-500">Our Campuses</h2>
            <p className="font-serif font-sm text-center text-white items-center  text-2xl">We have four campuses in Pakistan</p>
          </div>
      <div className=" grid  mx-12 space-x-7  items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5" >
        
      

      {   Campus_data.map((item:any)=>(
 
 <Link href={`/Campus/${item.id}`} key={item.id}> 
 <div    >

        <div  key={item.id} className="flex flex-col mx-auto items-center  justify-center text-center space-y-2">
          <Image className="justify-center items-center object-center" src={item.photo} alt={item.alt} width={300} height={400}  />
          <b className="font-bold text-white  text-xl">{item.name}</b>
          <p className="justify-center text-white  text-sm ">{item.subject}</p>
        </div>

       


  </div>
  </Link>
))  }
</div>

          
          

    </div>
</div>
  )
}

export const Campus_data = [
  {
    id: 1,
    name: 'Mandra',
    alt:"mandra",
    subject: 'Nlc Applied Technologies Institute, Mandra',
    description: 'Nlc Applied Technologies Institute is the private owned professional training institute offering different courses to its students, The institute is the project of National Logistic Cell and its main aim is to produce skilled and professional individuals. ',
    photo: '/mandra.jpg',
    detail_image:'/workimage1.jpg',
    detail:" The NLC Applied Technolgy Institute Mandra centre was established in the year 2006 with an aim to raise a group of individuals who are well trained and well versed about their job and act professionally during their career. The institute has very experianced trainers and currently offers training programs such as civil surveyor, Quantity Surveyor, Draftsman civil with and without Auto CAD, Building Electrician, Plumbing, Welding, Mason Carpenter, Auto Mechanic & Auto Electrician",
    email:"mandranlc@gmail.com",
    phone:'051-2223232'
  },
  {
    id: 2,
    name: 'Dina',
    alt:"Dina",
    subject: 'Nlc Applied Technologies Institute, Dina',
    description: 'Applied Technology Institute & Driving School, NLC Dina is the leading institute of Jhelum district, which is committed to provide higher standard of technical education to the students in various technical and vocational programs. ',
    photo: '/Dina.jpg',
    detail_image:'/workimage2.jpg',
    detail:"  The institute has very experianced trainers and currently offers training programs such as civil surveyor, Quantity Surveyor, Draftsman civil with and without Auto CAD, Building Electrician, Plumbing, Welding, Mason Carpenter, Auto Mechanic & Auto Electrician",
    email:"dinanlc@gmail.com",
    phone:'051-2223232'
  },
  {
    id: 3,
    name: 'Khairpur',
    alt:"khairpur",
    subject: 'Nlc Applied Technologies Institute, Khairpur',
    description: 'Nlc Applied Technologies Institute is the private owned professional training institute  located at khairpur which is offering different courses to its students. ',
    photo: '/khairpur.jpg',
    detail_image:'/workimage3.jpg',
    detail:" The institute has very experianced trainers and currently offers training programs such as civil surveyor, Quantity Surveyor, Draftsman civil with and without Auto CAD, Building Electrician, Plumbing, Welding, Mason Carpenter, Auto Mechanic & Auto Electrician",
    email:"khairpurnlc@gmail.com",
    phone:'051-244232'
  },
  {
    id: 4,
    name: 'Amangarh',
    alt:"amangarh",
    subject: 'Nlc Applied Technologies Institute, Amangarh',
    description: 'Nlc Applied Technologies Institute is the private owned professional training institute  located at khairpur which is offering different courses to its students. ',
    photo: '/amangarh.jpg',
    detail_image:'/workimage4.jpg',
    detail: "The NLC Applied Technolgy Institute Mandra centre was established in the year 2006 with an aim to raise a group of individuals who are well trained and well versed about their job and act professionally during their career. The institute has very experianced trainers and currently offers training programs such as civil surveyor, Quantity Surveyor, Draftsman civil with and without Auto CAD, Building Electrician, Plumbing, Welding, Mason Carpenter, Auto Mechanic & Auto Electrician",
    email:"amangarhnlc@gmail.com",
    phone:'051-288232'
  }
]

