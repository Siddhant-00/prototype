'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className=''>
        <div className='min-h-[11vh] p-3 border relative bg-[url("https://static.wixstatic.com/media/e4f166_77aba0bb771148d490d97b40c244bf8af000.jpg")] bg-cover bg-center max-w-full'>
          <div className={`relative w-[80%] mx-auto z-10 text-xl text-gray-800 flex justify-between items-center mt-5 lg:mt-4  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

            <div className={`transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
              <Link href='/'>
                <p className='User-name font-sans font-bold text-2xl text-gray-800 hover:text-amber-800 cursor-pointer'>Siddhant Jain</p>
              </Link>
            </div>
            <div className='block md:hidden'>
              <button onClick={toggleSidebar} className="text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className={`hidden md:flex Features text-sm transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
              <Link href={'/resume'}>
                <span className="inline-block px-2.5 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Resume
                </span>
              </Link>
              <span className='border-r-2 border-gray-600'></span>
              <Link href={'/projects'}>
                <span className="inline-block px-2.5 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Project
                </span>
              </Link>
              <span className='border-r-2 border-gray-600'></span>
              <Link href={'/contact'}>
                <span className="inline-block px-2.5 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Contact
                </span>
              </Link>
              <span className='border-r-2 border-gray-600'></span>
              <Link href={'/submission'}>
                <span className="inline-block text-blue-600 px-2.5 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Data Science Submission
                </span>
              </Link>
              
            </div>
          </div>
        </div>

        {/* Sidebar for small screens */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={closeSidebar}></div>
        <div className={`fixed top-0 right-0 w-64 h-full bg-white z-30 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
          <div className='p-4'>
            <button onClick={closeSidebar} className="text-gray-800 focus:outline-none mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className='Features text-sm flex flex-col'>
              <Link href={'/resume'}>
                <span onClick={closeSidebar} className="block px-2.5 py-2 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Resume
                </span>
              </Link>
              <span className='border-b-2 border-gray-600'></span>
              <Link href={'/projects'}>
                <span onClick={closeSidebar} className="block px-2.5 py-2 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Project
                </span>
              </Link>
              <span className='border-b-2 border-gray-600'></span>
              <Link href={'/contact'}>
                <span onClick={closeSidebar} className="block px-2.5 py-2 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Contact
                </span>
              </Link>
              <span className='border-b-2 border-gray-600'></span>
              <Link href={'/submission'}>
                <span onClick={closeSidebar} className="block text-blue-600 px-2.5 py-2 duration-400 ease-in-out hover:cursor-pointer hover:text-amber-800 transition-all hover:ease-in">
                  Data Science Submission
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
