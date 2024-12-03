// 'use client'
// import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { gsap } from 'gsap'

// function Hero() {
//   const imageRef = useRef<HTMLDivElement | null>(null);
//   // const textRefs = useRef<HTMLAnchorElement[]>([]);
//   const textRefs = useRef<HTMLDivElement[]>([]);


//   useEffect(() => {
//     if (imageRef.current) {
//       gsap.fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1 });
//     }
//     gsap.fromTo(textRefs.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1, stagger: 0.2 });
//   }, []);

//   const addToRefs = (el: HTMLDivElement | null) => {
//     if (el && !textRefs.current.includes(el)) {
//       textRefs.current.push(el);
//     }
//   };

//   return (
//     <div className='min-h-[70vh] bg-gray-50 flex items-center'>
//       <div className='container mx-auto px-4'>
//         <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
//           <div ref={imageRef}>
//             <Image src={'/Images/circle.png'} alt='' width={400} height={400} />
//           </div>
//           <div className='flex flex-col gap-y-4 text-center lg:text-left'>
//             <div ref={addToRefs}>
//               <h1 className='text-4xl lg:text-6xl font-bold font-sans'>Hello!!</h1>
//             </div>
//             <div ref={addToRefs}>
//               <h3 className='font-semibold text-lg lg:text-2xl tracking-tight font-sans'>I'm a Developer and DS Enthusiast</h3>
//             </div>
//             <div ref={addToRefs}>
//               <p className='text-base lg:text-lg font-normal font-sans'>Student developer, java, python, web3 enthusiast</p>
//             </div>
//             <div className="flex justify-center lg:justify-start gap-x-3 pt-2 pb-4 p-4">
//               <Link ref={addToRefs} href="/resume" className="relative  hover:text-white" passHref>


//                 <div className='h-[110px] w-[110px] rounded-full bg-orange-400 hover:bg-white'></div>
//                 <span className="absolute inset-0 flex items-center justify-center tracking-tight font-bold text-gray-800 hover:text-white hover:underline transition-all duration-100 ease-in hover:ease-in-out font-sans">Resume</span>

//               </Link>
//               <Link ref={addToRefs} href="/projects" className="relative" passHref>


//                 <div className='h-[110px] w-[110px] rounded-full bg-blue-400 hover:bg-white'></div>
//                 <span className="absolute inset-0 flex items-center justify-center tracking-tight font-bold text-gray-800 hover:text-white hover:underline transition-all duration-100 ease-in hover:ease-in-out font-sans">Projects</span>

//               </Link>
//               <Link ref={addToRefs} href="/contact" className="relative" passHref>


//                 <div className='h-[110px] w-[110px] rounded-full bg-green-400'></div>
//                 <span className="absolute inset-0 flex items-center justify-center tracking-tight font-bold text-gray-800 mr-2 hover:text-white hover:underline transition-all duration-100 ease-in hover:ease-in-out font-sans">Contact</span>

//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero






'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm sticky top-0 z-10">
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="flex flex-col md:flex-row items-center justify-between mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-transparent bg-clip-text">
              Hi, I'm <span className='font-serif'>  Siddhant Jain</span>
            </h1>
            <p className="text-xl font-bold text-blue-900 mb-6">
              A passionate computer science student specializing in artificial intelligence and machine learning.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px " }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-200 to-orange-200 text-blue-900 px-8 py-3 rounded-full flex items-center text-lg font-semibold"
            >
              <Link href={'/projects'}>View My Work</Link> 
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative w-72 h-72 mx-auto">
              <Image
                src="/Images/sid_pic.jpg"
                alt="sidpic"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-75 mix-blend-overlay" />
            </div>
          </motion.div>
        </section>

        {/* <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['AI Chatbot', 'Data Visualization Dashboard', 'Machine Learning Model'].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-full h-40 bg-gray-200 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Machine Learning', level: 90 },
              { name: 'Web Development', level: 85 },
              { name: 'Data Analysis', level: 80 },
              { name: 'Python', level: 95 },
              { name: 'JavaScript', level: 85 },
              { name: 'SQL', level: 75 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

       
      </main>

     
    </div>
  )
}

