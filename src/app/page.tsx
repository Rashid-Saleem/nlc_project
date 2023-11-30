import Image from 'next/image'
import { Navbar } from './Navbar'
import Campus from './Campus'
import Footer from './Footer'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Features from './Features'
import Gallery from './Gallery'
import VideoComponent from './VideoComponent'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Gallery />
    <Campus />
    <VideoComponent />
    <Newsletter />
    <Features />
    <Footer />
    
    </>
    
  )
}
