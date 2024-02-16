import React from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Faculty() {
 
  return (
    <div>

      <div className="py-20 bg-gray-50 pt-0 mt-6">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-[#EF4444] font-bold md:text-4xl">Our Faculty</h2>
            <p className="text-[#374151] text-xl font-semibold lg:w-2000 ">
              The mission of NLC is to achieve excellence in teaching and research for producing students with sound
              professional knowledge, integrity of character, a keen sense of social responsibility, and a passion for
              lifelong learning. The NLC shall stand committed to creating an environment conducive for attracting the
              best students, faculty and supporting staff for contributing to the development of a prosperous, peaceful,
              and enlightened society.
            </p>
          </div>

          
          {facultydata.map((item: any) => (

     <Link href={`/Faculty/${item.id}`} key={item.id}>       
  <div  className="grid grid-cols-4 gap-12 items-center sm:grid-cols-1 md:grid-cols-4 mb-0">
    <div className="space-y-4 text-center">
      <Image
        className="w-64 h-64 mx-auto object-cover rounded-xl sm:w-full md:w-40 md:h-40 lg:w-64 lg:h-64"
        src={item.photo}
        alt="woman"
        loading="lazy"
        width="640"
        height="805"
      />
      <div>
        <h4 className="text-xl font-bold text-[#374151]">{item.name}</h4>
        <span className="block font-bold text-[#374151]">{item.subject}</span>
      </div>
    </div>
  </div>
  </Link>
))}

        </div>
      </div>

      
    </div>
  );
}


export const facultydata = [
    {
      id: 1,
      name: 'M Usman Awan',
      subject: 'HOD IOT',
      description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
      photo: '/hodiot.jpg',
      email:'mandra101@gmail.com',
      phone:'051-2223232'
    },
    {
      id: 2,
      name: 'quaid khan',
      subject: 'HOD MMAT',
      description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
      photo: '/HODmmat.jpg',
      email:'mandra101@gmail.com',
      phone:'051-2223232'
    },
    {
      id: 3,
      name: 'M Bilal',
      subject: 'HOD Mechanical',
      description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
      photo: '/hodmechanical.jpg',
      email:'mandra101@gmail.com',
      phone:'051-2223232'
    },
  
    {
        id: 4,
        name: 'Mr Ammar',
        subject: 'Instructor MMAT',
        description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
        photo: '/ammarmechanical.jpg',
        email:'mandra101@gmail.com',
        phone:'051-2223232'  
    },
      {
        id: 5,
        name: 'Mr Mehboob Ilaahi',
        subject: 'Instructor MMAT',
        description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
        photo: '/mmatins.jpg',
        email:'mandra101@gmail.com',
        phone:'051-2223232'  
    },
      {
        id: 6,
        name: 'Mr Majid',
        subject: 'HOD Mechanical',
        description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
        photo: '/majidmechanical.jpg',
        email:'mandra101@gmail.com',
        phone:'051-2223232'},
      {
        id: 7,
        name: 'M Usman ',
        subject: 'Instructor MMAT',
        description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
        photo: '/usmandaemechanical.jpg',
        email:'mandra101@gmail.com',
        phone:'051-2223232'  
    },
      {
        id: 8,
        name: 'Mr Asad Quraishi',
        subject: 'Instructor lab',
        description: 'BS-IT, MS COMPUTER SCIENCES, DATA Scientist',
        photo: '/mmatlab.jpg',
        email:'mandra101@gmail.com',
        phone:'051-2223232' 
    }



];














