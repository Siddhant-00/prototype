'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'

function Hero() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  // const textRefs = useRef<HTMLAnchorElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);


  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1 });
    }
    gsap.fromTo(textRefs.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 1, stagger: 0.2 });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className='min-h-[70vh] bg-gray-50 flex items-center'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
          <div ref={imageRef}>
            <Image src={'/Images/circle.png'} alt='' width={400} height={400} />
          </div>
          <div className='flex flex-col gap-y-4 text-center lg:text-left'>
            <div ref={addToRefs}>
              <h1 className='text-4xl lg:text-6xl font-bold font-sans'>Hello!!</h1>
            </div>
            <div ref={addToRefs}>
              <h3 className='font-semibold text-lg lg:text-2xl tracking-tight font-sans'>I'm a Developer and DS Enthusiast</h3>
            </div>
            <div ref={addToRefs}>
              <p className='text-base lg:text-lg font-normal font-sans'>Student developer, java, python, web3 enthusiast</p>
            </div>
            <div className="flex justify-center lg:justify-start gap-x-3 pt-2 pb-4 p-4">
              <Link ref={addToRefs} href="/resume" className="relative  hover:text-white" passHref>


                <div className='h-[110px] w-[110px] rounded-full bg-orange-400 hover:bg-white'></div>
                <span className="absolute inset-0 flex items-center justify-center tracking-tight font-bold text-gray-800 hover:text-white hover:underline transition-all duration-100 ease-in hover:ease-in-out font-sans">Resume</span>

              </Link>
              <Link ref={addToRefs} href="/projects" className="relative" passHref>


                <div className='h-[110px] w-[110px] rounded-full bg-blue-400 hover:bg-white'></div>
                <span className="absolute inset-0 flex items-center justify-center tracking-tight font-bold text-gray-800 hover:text-white hover:underline transition-all duration-100 ease-in hover:ease-in-out font-sans">Projects</span>

              </Link>
              <Link ref={addToRefs} href="/contact" className="relative" passHref>


                <div className='h-[110px] w-[110px] rounded-full bg-green-400'></div>
                <span className="absolute inset-0 flex items-center justify-center tracking-tight font-bold text-gray-800 mr-2 hover:text-white hover:underline transition-all duration-100 ease-in hover:ease-in-out font-sans">Contact</span>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
