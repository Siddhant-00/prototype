// import React from 'react'
// const Edu = [
//   {
//     "time": "2019 - 2020",
//     "heading": "10th Grade",
//     "para": "Shri Cloth Market Vaishnav Bal Mandir Girls Higher Secondary School, Indore"
//   },
//   {
//     "time": "2021 - 2022",
//     "heading": "12th Grade",
//     "para": "he New Era Public School, Indore"
//   },
//   {
//     "time": "2022 - 2027",
//     "heading": "Graduation",
//     "para": " International Institute of Professional Studies, DAVV, Indore"
//   },
// ]

// const Skill = [
//   'C/C++',
//   'Java',
//   'Python',
//   "Frontend [React.js/ Next.js/ Tailwind]",
//   'MySql/MongoDB'
// ]

// const CoCir = [
//   ' Google Cloud Study Jam Program, 2023, Certificate Holder]',
//   'Blog writing',
//   'Sports (Handball, Softball)/Fitness Enthusiast'
// ]

// const Lang = [
//   "English - Fluent",
//   "Hindi - Native",
//   "Understanding in French, Marathi"
// ]

// function ResumeBlock() {
//   return (
//     <>
//       <div className='w-[90%] mx-auto min-h-[90vh]'>
//         <div className='mt-8 font-sans'>
//           <div className='border pb-4'>
//             <h1 className='text-3xl font-bold lg:ml-44 text-amber-700 font-sans underline'>Resume</h1>
//           </div>

//           <div className='flex justify-around  mt-3'>
//             <div>
//               <h1 className='text-xl font-bold'>Education</h1>
//             </div>
//             <div>
//               {Edu.map((feat, index) => (
//                 <div key={index} className='flex gap-x-6 pb-4'>
//                   <div className='font-light text-amber-700 text-lg'>
//                     {feat.time}
//                   </div>
//                   <div className='flex flex-col'>
//                     <div><h2 className='font-bold text-lg'>{feat.heading}</h2></div>
//                     <div className='mt-2'><p className='text-sm font-light'>{feat.para}</p></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='border border-b border-gray-300' />
//           <div className='flex justify-around mt-6 pb-5'>
//             <div>
//               <h1 className='text-xl font-bold'>Skills & Expertise</h1>
//             </div>

//             <div>
//               {Skill.map((feat, index) => (
//                 <div key={index}>
//                   <ul className='list-disc'>
//                     <li className='font-light text-sm'>{feat}</li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='border border-b border-gray-300' />

//           <div className='border border-b border-gray-300' />
//           <div className='flex justify-around mt-6 pb-5'>
//             <div>
//               <h1 className='text-xl font-bold'>Co-Curricular&apos;s</h1>
//             </div>

//             <div>
//               {CoCir.map((feat, index) => (
//                 <div key={index}>
//                   <ul className='list-disc'>
//                     <li className='font-light text-sm'>{feat}</li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='border border-b border-gray-300' />

//           <div className='flex justify-around mt-6 pb-5'>
//             <div>
//               <h1 className='text-xl font-bold'>Languages</h1>
//             </div>

//             <div>
//               {Lang.map((feat, index) => (
//                 <div key={index}>
//                   <ul className='list-disc'>
//                     <li className='font-light text-sm'>{feat}</li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='border border-b border-gray-300' />

//         </div>
//       </div>
//     </>
//   )
// }

// export default ResumeBlock



import React from 'react';

const Edu = [
  {
    time: "2019 - 2020",
    heading: "10th Grade",
    para: "Shri Cloth Market Vaishnav Bal Mandir Girls Higher Secondary School, Indore"
  },
  {
    time: "2021 - 2022",
    heading: "12th Grade",
    para: "The New Era Public School, Indore"
  },
  {
    time: "2022 - 2027",
    heading: "Graduation",
    para: "International Institute of Professional Studies, DAVV, Indore"
  },
];

const Skill = [
  'C/C++',
  'Java',
  'Python',
  "Frontend [React.js/ Next.js/ Tailwind]",
  'MySql/MongoDB'
];

const CoCir = [
  'Google Cloud Study Jam Program, 2023, Certificate Holder',
  'Blog writing',
  'Sports (Handball, Softball)/Fitness Enthusiast'
];

const Lang = [
  "English - Fluent",
  "Hindi - Native",
  "Understanding in French, Marathi"
];

function ResumeBlock() {
  return (
    <div className='w-[90%] mx-auto min-h-[90vh]'>
      <div className='mt-8 font-sans w-[88%] mx-auto'>
        <div className='pb-4'>
          <h1 className='text-4xl font-bold text-amber-700 font-sans underline text-center lg:text-left'>Resume</h1>
        </div>

        <div className='mt-6'>
          <h2 className='text-xl font-bold mb-4 text-center lg:text-left'>Education</h2>
          {Edu.map((feat, index) => (
            <div key={index} className='flex flex-col md:flex-row gap-4 mb-6 text-left lg:text-center lg:justify-center'>
              <div className='font-light text-amber-700 text-lg md:w-1/4'>
                {feat.time}
              </div>
              <div className='flex flex-col md:w-3/4'>
                <h3 className='font-bold text-lg'>{feat.heading}</h3>
                <p className='mt-2 text-sm font-light'>{feat.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='border-b border-gray-300 mb-6'></div>

        <div className='mt-6'>
          <h2 className='text-xl font-bold mb-4 text-center lg:text-left'>Skills & Expertise</h2>
          <div className='flex flex-col md:flex-row gap-4 text-left lg:text-center lg:justify-center'>
            <div className='md:w-1/4 font-light text-lg text-amber-700'>Skills</div>
            <div className='md:w-3/4'>
              <ul className='ml-4 space-y-2'>
                {Skill.map((feat, index) => (
                  <li key={index} className='font-light text-sm'>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-300 mb-6 mt-6'></div>

        <div className='mt-6'>
          <h2 className='text-xl font-bold mb-4 text-center lg:text-left'>Co-Curricular&apos;s</h2>
          <div className='flex flex-col md:flex-row gap-4 text-left lg:text-center lg:justify-center'>
            <div className='md:w-1/4 font-light text-lg text-amber-700'>Activities</div>
            <div className='md:w-3/4'>
              <ul className=' ml-4 space-y-2'>
                {CoCir.map((feat, index) => (
                  <li key={index} className='font-light text-sm'>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-300 mb-6 mt-6'></div>

        <div className='mt-6 pb-8'>
          <h2 className='text-xl font-bold mb-4 text-left'>Languages</h2>
          <div className='flex flex-col md:flex-row gap-4 text-left lg:text-center lg:justify-center  justify-between'>
            <div className='md:w-1/4 font-light text-lg text-amber-700'>Languages</div>
            <div className='md:w-3/4 '>
              <ul className=' ml-4 space-y-2 '>
                {Lang.map((feat, index) => (
                  <li key={index} className='font-light text-sm '>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumeBlock;
