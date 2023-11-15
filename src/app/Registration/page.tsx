import Link from 'next/link';
import React from 'react';
import Footer from '../Footer';
import { Navbar } from '../Navbar';
const page = () => {
  return (

    <div>
      <Navbar />
    

    <section className='h-full  gradient-form bg-[90e0ef] '>
      <div className='container  px-6 h-full'>
        <div className=' flex justify-center items-center flex-wrap h-full g-6 bg-white text-gray-800'>
          <div className=''>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='px-4 md:px-0'>
                  <div className='md:p-5 md:mx-6'>
                    <div className='text-center'>
                      <h4 className='text-4xl font-bold  text-white mt-1 pt-5 pb-5 pr-25 rounded-lg pl-25  bg-[#0fa3b1] mb-5 '>
                        Registration Form 
                      </h4>
                    </div>
                    <form>
                      <p className='mb-4 text-[#0fa3b1] font-bold'>
                        Kindly Register Your self for admission in different Courses
                      </p>
                      <div className='mb-4 flex items-center space-x-8'>
                        <label className='text-[#0fa3b1] font-bold'>First Name</label>
                        <input
                          type='text'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter Your First Name'
                          name='fname'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-8'>
                        <label className='text-[#0fa3b1] font-bold'>Last Name</label>
                        <input
                          type='text'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter your Last Name'
                          name='lname'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-10'>
                        <label className='text-[#0fa3b1] font-bold'>Mobile No</label>
                        <input
                          type='number'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter Your Cell Number'
                          name='cellnumber'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-10'>
                        <label className='mr-9 text-[#0fa3b1] font-bold'>Email</label>
                        <input
                          type='email'
                          className='form-control  block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter Your Email'
                          name='userEmail'
                        />
                      </div>
                      <div className='mb-4 flex items-center space-x-8'>
                        <label className='mr-3 text-[#0fa3b1] font-bold'>Password</label>
                        <input
                          type='password'
                          className='form-control block w-30 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Your Your Password '
                          name='password'
                        />
                      </div>
                      {/* <div className='mb-4 flex items-center space-x-5'>
                        <label>Confirm Password</label>
                        <input
                          type='password'
                          className='form-control block w-30 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Again Enter YOur Password'
                          name='confirmPassword'
                        />
                      </div> */}
                       <Link
              href="/"
              className="bg-[#0fa3b1] font-bold  ml-28  text-white py-3 px-10 rounded-full text-2xl transition-all duration-300 inline-block"
            >
              Sign Up
            </Link>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2 text-[#0fa3b1] font-bold'>Do you have an account?</p>
                        <Link
              href="/"
              className="bg-[#0fa3b1] font-bold  ml-28  text-white py-3 px-10 rounded-full text-2xl transition-all duration-300 inline-block"
            >
              Login
            </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />

    </div>
  );
};
export default page;