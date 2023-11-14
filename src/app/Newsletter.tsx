import React from 'react';

const Newsletter = () => {
  return (
   
    <section className="bg-white py-12 relative mx-10 md:mx-12 sm:mx-10 lg:mx-12">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10 lg:p-12">
      <div className="md:flex items-center justify-between relative">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-lg md:text-3xl lg:text-3xl font-semibold text-gray-800 mb-2">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-600 text-lg sm:text-lg md:text-xl lg:text-xl">
            Get the latest news and updates right in your inbox. Do not miss out!
          </p>
        </div>
        <div className="md:w-1/3">
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-3/4 px-4 py-2 rounded-md mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="absolute -z-2 font-black space-y-5  sm:text-2xl md:text-8xl lg:text-8xl opacity-10">
          <span>Newsletter</span>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Newsletter;