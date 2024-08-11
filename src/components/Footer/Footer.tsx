'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-[16vh] w-full mx-auto  bg-gray-800 text-white pt-3'>
      {/* <div className='w-[90%] mx-auto border-t border-gray-50 px-4 lg:px-10' /> */}
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className='flex flex-col md:flex-row w-full justify-evenly p-3 pt-3 lg:ml-8 lg:mt-3'>

          <div className={`transform transition-transform duration-1000  ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <h1 className='font-bold text-md text-white mt-2'>Quick Links</h1>
            <Link href={'/resume'} className='pr-4 text-sm font-light mt-1 hover:text-amber-300 hover:underline'>
              Resume
            </Link>
            <Link href={'/projects'} className='pr-4 text-sm font-light mt-1 hover:text-amber-300 hover:underline'>
              Projects
            </Link>
            <Link href={'/contact'} className='pr-4 text-sm font-light mt-1 hover:text-amber-300 hover:underline'>
              Contact
            </Link>
          </div>

          <div className={`transform transition-transform duration-1000  ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <h1 className='font-bold text-md text-white mt-4 lg:mt-2'>Add & Phone</h1>
            <p className='text-sm font-light mt-2'>123, Katanki, Jabalpur, Madhaya Pradesh</p>
            <p className='text-sm font-light mt-1 hover:text-amber-300 hover:underline'>+91-9109348376</p>
          </div>
          <div className={`transform transition-transform duration-1000 mt-2 lg:mt-0 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <h1 className='font-bold text-md text-white mt-2'>Email</h1>
            <p className='cursor-pointer hover:underline text-sm font-light hover:text-amber-300 mt-2'>siddhantjain6810@gmail.com</p>
          </div>
          <div className={`transform transition-transform duration-1000 mt-2 lg:mt-0 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <h1 className='font-bold text-md text-white mt-2'>Connect With Me</h1>
            <div className='flex gap-x-4 lg:gap-x-2 items-center lg:justify-between mt-2'>
              <div className='github'>
                <Link href={'https://github.com/Siddhant-00'} target='_blank' className='text-sm font-light hover:text-amber-300 hover:underline'>Github</Link>
              </div>
              <div className='LinkedIn'>
                <Link href={'https://www.linkedin.com/in/siddhant-jain-a5159425b/'} target='_blank' className='text-sm font-light hover:text-amber-300 hover:underline'>LinkedIn</Link>
              </div>
              <div className='X'>
                <Link href={'https://x.com/_siddhant_00'} target='_blank' className='text-sm font-light hover:text-amber-300 hover:underline'>X</Link>
              </div>
            </div>
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

