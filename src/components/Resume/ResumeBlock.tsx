// import React from 'react';

// const Edu = [
//   {
//     time: "2019 - 2020",
//     heading: "10th Grade",
//     para: "Shri Cloth Market Vaishnav Bal Mandir Girls Higher Secondary School, Indore"
//   },
//   {
//     time: "2021 - 2022",
//     heading: "12th Grade",
//     para: "The New Era Public School, Indore"
//   },
//   {
//     time: "2022 - 2027",
//     heading: "Graduation",
//     para: "International Institute of Professional Studies, DAVV, Indore"
//   },
// ];

// const Skill = [
//   'C/C++',
//   'Java',
//   'Python',
//   "Frontend [React.js/ Next.js/ Tailwind]",
//   'MySql/MongoDB'
// ];

// const CoCir = [
//   'Google Cloud Study Jam Program, 2023, Certificate Holder',
//   'Blog writing',
//   'Sports (Handball, Softball)/Fitness Enthusiast'
// ];

// const Lang = [
//   "English - Fluent",
//   "Hindi - Native",
//   "Understanding in French, Marathi"
// ];

// function ResumeBlock() {
//   return (
//     <div className='w-[90%] mx-auto min-h-[90vh]'>
//       <div className='mt-8 font-sans w-[88%] mx-auto'>
//         <div className='pb-4'>
//           <h1 className='text-4xl font-bold text-amber-700 font-sans underline text-center lg:text-left'>Resume</h1>
//         </div>

//         <div className='mt-6'>
//           <h2 className='text-xl font-bold mb-4 text-center lg:text-left'>Education</h2>
//           {Edu.map((feat, index) => (
//             <div key={index} className='flex flex-col md:flex-row gap-4 mb-6 text-left lg:text-center lg:justify-center'>
//               <div className='font-light text-amber-700 text-lg md:w-1/4'>
//                 {feat.time}
//               </div>
//               <div className='flex flex-col md:w-3/4'>
//                 <h3 className='font-bold text-lg'>{feat.heading}</h3>
//                 <p className='mt-2 text-sm font-light'>{feat.para}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className='border-b border-gray-300 mb-6'></div>

//         <div className='mt-6'>
//           <h2 className='text-xl font-bold mb-4 text-center lg:text-left'>Skills & Expertise</h2>
//           <div className='flex flex-col md:flex-row gap-4 text-left lg:text-center lg:justify-center'>
//             <div className='md:w-1/4 font-light text-lg text-amber-700'>Skills</div>
//             <div className='md:w-3/4'>
//               <ul className='ml-4 space-y-2'>
//                 {Skill.map((feat, index) => (
//                   <li key={index} className='font-light text-sm'>{feat}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className='border-b border-gray-300 mb-6 mt-6'></div>

//         <div className='mt-6'>
//           <h2 className='text-xl font-bold mb-4 text-center lg:text-left'>Co-Curricular&apos;s</h2>
//           <div className='flex flex-col md:flex-row gap-4 text-left lg:text-center lg:justify-center'>
//             <div className='md:w-1/4 font-light text-lg text-amber-700'>Activities</div>
//             <div className='md:w-3/4'>
//               <ul className=' ml-4 space-y-2'>
//                 {CoCir.map((feat, index) => (
//                   <li key={index} className='font-light text-sm'>{feat}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className='border-b border-gray-300 mb-6 mt-6'></div>

//         <div className='mt-6 pb-8'>
//           <h2 className='text-xl font-bold mb-4 text-left'>Languages</h2>
//           <div className='flex flex-col md:flex-row gap-4 text-left lg:text-center lg:justify-center  justify-between'>
//             <div className='md:w-1/4 font-light text-lg text-amber-700'>Languages</div>
//             <div className='md:w-3/4 '>
//               <ul className=' ml-4 space-y-2 '>
//                 {Lang.map((feat, index) => (
//                   <li key={index} className='font-light text-sm '>{feat}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ResumeBlock;


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
    <div className="w-[90%] mx-auto py-12 bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg shadow-xl mt-8 mb-8">
      <div className="w-[88%] mx-auto">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text text-gray-700 ">
            My Resume
          </h1>
          <p className="text-lg mt-4 text-gray-700 font-medium">
            A glimpse into my journey
          </p>
        </header>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-purple-400 inline-block mb-6">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Edu.map((feat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-purple-600 font-medium text-lg">{feat.time}</div>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">{feat.heading}</h3>
                <p className="mt-2 text-gray-600 text-sm">{feat.para}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-400 inline-block mb-6">
            Skills & Expertise
          </h2>
          <ul className="flex flex-wrap gap-4">
            {Skill.map((feat, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full font-medium shadow-sm hover:shadow-md transition"
              >
                {feat}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-purple-400 inline-block mb-6">
            Co-Curriculars
          </h2>
          <ul className="space-y-3">
            {CoCir.map((feat, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="text-purple-600 font-bold">•</span>
                <p className="text-gray-700 font-medium">{feat}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-400 inline-block mb-6">
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {Lang.map((feat, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {feat}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResumeBlock;

