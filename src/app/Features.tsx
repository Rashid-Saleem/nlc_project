import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Features = () => {
  return (
    <section className="hidden md:block">
      <div className="relative flex-col md:flex-wrap z-[-5] mx-20 mt-28">
        <div className="flex md:justify-end justify-normal mr-10">
          <div className="flex-wrap text-3xl md:w-1/4 text-gray-900 font-extrabold md:-mt-16">
          Education Management & Operations
          </div>
        </div>
        <div className="shadow grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
          <div className="relative w-full text-center max-w-sm lg:max-w-none">
            <div className="absolute -z-2 font-black space-y-5 text-8xl opacity-10 text-start mx-5 my-3">
                Unique from the Rest
            </div>
            <div className="grid grid-cols-2 gap-4 gap-y-20 mt-5 ml-5">
              <div className="text-start space-y-4 h-48">
                <div className="font-bold">Diploma of Associate Engineer</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
              <div className="text-start space-y-4 h-48">
                <div className="font-bold">Our Commitment</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
              <div className="text-start space-y-4 h-34">
                <div className="font-bold">Applied Technology Institutes</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
              <div className="text-start space-y-4 h-34">
                <div className="font-bold">Quality of Education</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </div>
          <div className="w-full text-center max-w-sm md:max-w-none">
            <Image src="/training.jpg" alt="Featured Product" width={500} height={1200} />
          </div>
          <div className="w-full text-center max-w-sm md:max-w-none">
            <div className="text-start mx-10 my-10 w-50">
            We currently own and operate 30 British Curriculum Pre-K to K-12 Schools as well as Canadian Montessori Curriculum Preschool with close to 7,000 pupils across three cities i.e. Rawalpindi, Islamabad, Southern Punjab( Gujrat, Gujranwala, Sialkot & Lahore) and Dubai. We specialize in delivering high-quality affordable education and have delivered success through three clear strategies:
            </div>
            <div className="flex place-items-start mx-10 mb-5">
              
            <Link
              href="/"
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-full text-lg transition-all duration-300 inline-block"
            >
              Get Courses
            </Link>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;