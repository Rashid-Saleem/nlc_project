import Image from 'next/image'
import { Navbar } from './Navbar'
import Campus from './Campus'
import Footer from './Footer'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Features from './Features'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Campus />
    <Newsletter />
    <Features />
    <Footer />
    
    </>
    
  )
}
