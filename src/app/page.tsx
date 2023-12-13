import Image from 'next/image'
import { Navbar } from './Navbar'
import Campus from './Campus'
import Footer from './Footer'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Features from './Features'
import Gallery from './Gallery'
import VideoComponent from './VideoComponent'
import Card from './Card'
import Careers from './Careers'

export default function Home() {
  return (
    <>
    

      <Navbar />
    <Hero />
    <Campus /> 

    <VideoComponent />
    <Careers />
    <Card />
    <Newsletter />
    <Gallery />
    <Features />
    <Footer /> 
     
    </>
    
  )
}
