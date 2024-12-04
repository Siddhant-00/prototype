import React from "react";

const Edu = [
  {
    time: "2019 - 2020",
    heading: "10th Grade",
    para: "Jawahar Navodaya Vidhyalaya, Jabalpur",
  },
  {
    time: "2021 - 2022",
    heading: "12th Grade",
    para: "Jawahar Navodaya Vidhyalaya, Jabalpur",
  },
  {
    time: "2022 - 2027",
    heading: "Graduation/Masters",
    para: "International Institute of Professional Studies, DAVV, Indore",
  },
];

const Skill = [
  "C/C++",
  "Java",
  "Python",
  "Data Analysis & Statistics",
  "MySql/MongoDB (DBMS)",
];

const CoCir = [
  "Google Cloud Study Jam Program, 2023, Certificate Holder, VAC IOT Course",
  "Sports (Cricket)/Fitness Enthusiast",
];

const Lang = [
  "English - Fluent",
  "Hindi - Native",
  "Understanding in French",
];

function ResumeBlock() {
  return (
    <div className="w-[90%] mx-auto py-12 bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg shadow-xl mt-8 mb-8">
      <div className="w-[88%] mx-auto">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text text-gray-700">
            My Resume
          </h1>
          <p className="text-lg mt-4 text-gray-700 font-medium">
            A glimpse into my journey
          </p>
        </header>

        {/* Education Section */}
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

        {/* Skills Section */}
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

        {/* Co-Curriculars Section */}
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

        {/* Languages Section */}
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
