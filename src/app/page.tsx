import Image from 'next/image'
import { Navbar } from './Navbar'

import Footer from './Footer'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Features from './Features'
import Gallery from './Gallery'
import VideoComponent from './VideoComponent'
import Card from './Card'
import Careers from './Careers'
import Dashboard from './Dashboard'
import TabsPage from './Tabs/page'

import Tabreceive from './Tabreceive/Tabreceive'


export default function Home() {




  return (
    <>



      
   <Hero />
    
    {/* <VideoComponent />
    <Careers />
    <Card /> */}
    <Tabreceive title={tabarray} />
    {/* <Newsletter />
    <Gallery />
    <Features />  */}
     
      {/* <Dashboard /> */}
    </>
    
  )
}

const tabarray = [
  {
      title: "DAE",
      id:1,
      image:"/HODmmat.jpg",
      Content: (
          <div className='border-2 border-blue-500 rounded-lg p-5 '>
              <h1 className='text-5xl text-[#457F52]  pt-3 pb-8 font-bold  '>Diploma Of Associate Engineering</h1>
              <p className='text-white mx-20 justify-center font-semibold '>In Pakistan, the Diploma of Associate Engineer or DAE is a three-year, post-secondary (post-grade 10) diploma in various engineering disciplines such as electrical engineering, electronics engineering, civil engineering, mechanical engineering or chemical engineering.After successful completion of the diploma, students can either join Bachelor of Engineering (BE) and Bachelor of Technology (BTech) degree programs or find employment as supervisors, foremen, technicians, sub-engineers, draftsmen, overseers, chemical or gas plant operators, junior instructors or workshop superintendents.</p>
          </div>
      ),
  },
  {
      title: "TANG CHINA", Content: (
          <div className='border-2 border-blue-500 rounded-lg p-5 '>
               <h1 className='text-5xl text-[#457F52]  pt-3 pb-8 font-bold  '>Tang China Programme</h1>
              <p className='text-white mx-20 justify-center font-semibold '>NLC also signs MOU with Tang International Education Group, China on the dual diploma , Joint Technical Education Programme. Admission year 2023 presents an exceptional chance for aspiring students to secure their future with the Atin NLC Mandra. Offering the best in career opportunities, Atin NLC Mandra is providing a golden opportunity for Pakistani students to gain a foreign qualification. The program spans over 2 years, with one year spent in Pakistan and the next year fully funded in China.

The courses available for admission are the cutting-edge Mechanical Manufacturing and Automation Technology MMAT from Jilin Vocational College of Industry and Technology JVCIT, and the innovative Internet of Things IOT and Application Technology from Jiujiang Vocational & Technical College JVTC in China.

Eligibility criteria include a matric science or FSc background. Students awaiting their FSc results may also apply. This is a chance not to be missed for those seeking a robust educational foundation with international exposure.
</p>
          </div>
      ),
  },
  {
      title: "AI", Content: (
          <div className='border-2 border-blue-500 rounded-lg p-5 '>
                <h1 className='text-5xl text-[#457F52]  pt-3 pb-8 font-bold  '>Artificial Intelligence</h1>
              <p className='text-white mx-20 justify-center font-semibold '>Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or other animals. It is a field of study in computer science that develops and studies intelligent machines. Such machines may be called AIs.

AI technology is widely used throughout industry, government, and science. Some high-profile applications are: advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Google Assistant, Siri, and Alexa), self-driving cars (e.g., Waymo), generative and creative tools (ChatGPT and AI art), and superhuman play and analysis in strategy games (such as chess and Go)</p>
              </div>
      ),
  },
  {
      title: "3 Months Courses", Content: (
          <div className='border-2 border-blue-500 rounded-lg p-5 '>
               <h1 className='text-5xl text-[#457F52]  pt-3 pb-8 font-bold  '>Three Months Courses</h1>
              <p className='text-white text-2xl mx-20 justify-center font-semibold '>The Following are the Three months Courses in which students can apply for admission</p>
              <ul className='text-white mx-20 justify-center font-bold text-xl  gap-y-4 space-y-2'>
                <li>AutoCad</li>
                <li>Plumber</li>
                <li>Graphic Designing</li>
                <li>Welder</li>
                <li>Computer Technician</li>
                <li>Auto Electrician</li>
              </ul>
              </div>
                    ),
  },

]