import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white py-3 mx-20 flex justify-center items-center">
      <div className="container mx-auto px-12">
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-between">
          <div className="lg:w-1/2  text-left">
            <h1 className="text-4xl lg:text-6xl text-black font-bold  mb-6 sm:mb-2">
              Discover the Latest 
              <span className="text-red-500"> Courses</span> <span className="text-gray-700">Trends</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8">
              Get OUr Up-To-Date Courses online as well as onsite.
            </p>
            <Link
              href="/"
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-full text-lg transition-all duration-300 inline-block"
            >
              Get Courses
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0  lg:block">
  <div className="relative h-96 lg:h-auto w-full">
    <Image
      src="/fworking.jpeg"
      alt="Hero Image"
      className="rounded-lg shadow transition duration-300 ease-in-out hover:opacity-75 hover:shadow-lg"
      width={500}
      height={350}
    />
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
