// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const project = [
//   {
//     'photo': "/Images/pro.png",
//     'date': "March 2024",
//     'heading': "Lamastar Lodge",
//     'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
//     'proLink': '/'
//   },
//   {
//     'photo': "/Images/pro.png",
//     'date': "March 2024",
//     'heading': "Lamastar Lodge",
//     'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
//     'proLink': '/'
//   },
//   {
//     'photo': "/Images/pro.png",
//     'date': "March 2024",
//     'heading': "Lamastar Lodge",
//     'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
//     'proLink': '/'
//   },
//   {
//     'photo': "/Images/pro.png",
//     'date': "March 2024",
//     'heading': "Lamastar Lodge",
//     'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
//     'proLink': '/'
//   },
//   {
//     'photo': "/Images/pro.png",
//     'date': "March 2024",
//     'heading': "Lamastar Lodge",
//     'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
//     'proLink': '/'
//   },
//   {
//     'photo': "/Images/pro.png",
//     'date': "March 2024",
//     'heading': "Lamastar Lodge",
//     'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
//     'proLink': '/'
//   },
// ]

// function ProjectBlock() {

//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleMouseEnter = (index: any) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };

//   return (
//     <>
//       <div className='w-[90%] mx-auto min-h-[90vh] '>
//         <div className='mt-10'>
//           <div className='p-2 pb-3 '>
//             <h1 className='text-5xl font-sans font-bold underline text-amber-700'>Projects</h1>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-y-12 font-sans">
//             {project.map((feat, index) => (
//               <div 
//                 key={index} 
//                 className='relative w-[80%] border-4 border-amber-600 mt-4 rounded-lg'
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className="relative  overflow-hidden">
//                   <Image src={feat.photo}  width={3322 } height={178} alt='pic' objectFit='cover' className='rounded-md'/>

//                   <div className={`absolute inset-0 bg-amber-600 bg-opacity-70 p-4 text-black transition-transform duration-300 ease-in-out ${hoverIndex === index ? 'transform translate-y-0' : 'transform translate-y-full'} flex flex-col justify-center items-center gap-y-1`}>
//                     <div className="font-extrabold text-2xl text-center">{feat.heading}</div>
//                     <div className="mt-2 text-center font-bold tracking-tight text-[0.975rem]">{feat.aboutPro}</div>
//                     <div className='text-center w-[50%] mx-auto border-2 border-black mt-2 rounded-2xl'>
//                     <Link href={feat.proLink} target='_blank' className="mt-2 inline-block font-bold tracking-wider text-center pb-2">Website</Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 ">
//                   <div className="bg-amber-600 hover:bg-amber-700 shadow-amber-900 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold">
//                     {feat.date}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ProjectBlock

'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const project = [
  {
    'photo': "/Images/pro.png",
    'date': "March 2024",
    'heading': "Lamastar Lodge",
    'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
    'proLink': '/'
  },
  {
    'photo': "/Images/pro.png",
    'date': "March 2024",
    'heading': "Lamastar Lodge",
    'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
    'proLink': '/'
  },
  {
    'photo': "/Images/pro.png",
    'date': "March 2024",
    'heading': "Lamastar Lodge",
    'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
    'proLink': '/'
  },
  {
    'photo': "/Images/pro.png",
    'date': "March 2024",
    'heading': "Lamastar Lodge",
    'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
    'proLink': '/'
  },
  {
    'photo': "/Images/pro.png",
    'date': "March 2024",
    'heading': "Lamastar Lodge",
    'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
    'proLink': '/'
  },
  {
    'photo': "/Images/pro.png",
    'date': "March 2024",
    'heading': "Lamastar Lodge",
    'aboutPro': "A static site, made in Astro, for a holiday lodge in Devon",
    'proLink': '/'
  },
]

function ProjectBlock() {

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <>
      <div className='w-[90%] mx-auto min-h-[90vh] pb-16'>
        <div className='mt-10'>
          <div className='  p-2 pb-3 '>
            <h1 className='text-4xl font-sans font-bold underline text-amber-700 lg:pl-9'>Projects</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-y-12 font-sans">
            {project.map((feat, index) => (
              <div
                key={index}
                className='relative lg:w-[80%] mx-auto w-full border-4 border-amber-600 mt-4 rounded-lg'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative overflow-hidden">
                  <Image src={feat.photo} width={3322} height={178} alt='pic'  style={{ objectFit: 'cover' }} className='rounded-md' />

                  <div className={`absolute inset-0 bg-amber-600 bg-opacity-70 p-4 text-black transition-transform duration-300 ease-in-out ${hoverIndex === index ? 'transform translate-y-0' : 'transform translate-y-full'} flex flex-col justify-center items-center gap-y-1`}>
                    <div className="font-extrabold text-2xl text-center">{feat.heading}</div>
                    <div className="mt-2 text-center font-bold tracking-tight text-[0.975rem]">{feat.aboutPro}</div>
                    <div className='text-center w-[50%] mx-auto border-2 border-black mt-2 rounded-2xl'>
                      <Link href={feat.proLink} target='_blank' className="mt-2 inline-block font-bold tracking-wider text-center pb-2">Website</Link>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 ">
                  <div className="bg-amber-600 hover:bg-amber-700 shadow-amber-900 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold">
                    {feat.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectBlock

