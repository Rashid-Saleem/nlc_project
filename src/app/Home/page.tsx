import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../Navbar';
import Hero from '../Hero';
import Campus from '../Campus';
import Newsletter from '../Newsletter';
import Features from '../Features';
import Footer from '../Footer';
import VideoComponent from '../VideoComponent';
import Gallery from '../Gallery';

const Page = () => {
  return (
    <>
   <Navbar />
   <Hero />
   <Campus />
   <Gallery />
   <Newsletter />
   <VideoComponent />
   <Features />
   <Footer />
   
   
   </>
  );
};

export default Page;
