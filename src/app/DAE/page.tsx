import React from 'react'
import { Navbar } from '../Navbar'
import Footer from '../Footer'
import Image from 'next/image'

export default function page() {
  return (
    <div>
<Navbar />

<section className="bg-white py-3 mx-20 flex justify-center items-center">
      <div className="container mx-auto px-12">
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-between">
          <div className="lg:w-1/2  text-left">
            <h1 className="text-4xl lg:text-6xl text-black font-bold  mb-6 sm:mb-2" data-aos="fade-right">
              Discover the Latest 
              <span data-aos="flip-left" className="text-red-500"> Course</span> <span className="text-gray-700" data-aos="flip-right">of DAE </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8" data-aos="flip-left">
              Get OUr Up-To-Date Courses online as well as onsite.
            </p>
            {/* <Link href={{ pathname: '/Courses'}}
              
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-full text-xl font-bold transition-all duration-300 inline-block"
            >
              Get Courses
            </Link> */}
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0  lg:block">
  <div className="relative h-96 lg:h-auto w-full" data-aos="flip-right">
    <Image
      src="/dae1.jpg"
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






<div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
	<div className="flex flex-col items-center">
		<h2 className="font-bold text-5xl mt-5 tracking-tight">
			FAQ
		</h2>
		<p className="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is a DAE platform?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
				In Pakistan, the Diploma of Associate Engineer or DAE is a three-year, post-secondary (post-grade 10) diploma in various engineering disciplines such as electrical engineering, electronics engineering, civil engineering, mechanical engineering or chemical engineering.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Is there any age limit for Admission in DAE?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        There is no age limit for Admission in DAE.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is the processing fee for online registration for Admission?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        Application processing fee Rs. 2000/- will be charged and it is payable over the counter in any Brach of HBL or Habib Metro Bank in Pakistan
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Would the admission application processing fee be refundable in case a student does not appear in Test or at Institute</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Admission application processing fee is non-refundable in any case.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Do I have to print and submit the admission form manually?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
				No, NLC does not require manually printed form.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>Whom should I contact for queries about AU Entry Test for Undergraduate Programmes?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        You can contact Admission office through Phone: +92 51-000000, +92 51-0000000 & +92 51-0000000 & e-mail: admissions@mail.nlc.pk
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>  What documents are essentially required to be submitted while applying for admission?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        While applying for admission, possession of Computerized National Identity Card (CNIC) / Form 'B' or NICOP and passport size clear background picture are mandatory. Online registration requires attachment of HSSC Marks sheet/ A-Levels equivalency certificate and the same would be required for verification along with other mandatory required documents during selection and admission process of successful candidates. 
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I apply for more than one UG programme?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        Yes, applicants interested to apply in Engineering, IOT or any other  related programs can submit their 
        choice of preference. Admission will be granted as per order of their choice of preferences on merit.     

Applicants interested in other than above mentioned faculties programs can also apply in more than one program 
through two separate email ID’s and payment of additional application fee, provided you meet eligibility criteria. 
For each additional application, a candidate would be required to appear in test as per schedule.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> My admission application processing fee is not getting verified?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        If you have paid the application processing fee in HBL/Habib Metro Bank, the  fee verification requires  2-3 working  days. 
        You can also email us the picture/copy of your payment receipt at admissions@mail.edu.pk. In-case of non-receiving your admit 
        card .you may email/ call/ visit to Admission Office
				</p>
			</details>
		</div>
	</div>
</div>

<Footer />
    </div>
  )
}
