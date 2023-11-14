import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../Navbar';
import Hero from '../Hero';
import Campus from '../Campus';
import Newsletter from '../Newsletter';
import Features from '../Features';
import Footer from '../Footer';

const Page = () => {
  return (
    <>
   <Navbar />
   <Hero />
   <Campus />
   <Newsletter />
   <Features />
   <Footer />
   
   
   </>
  );
};

export default Page;
