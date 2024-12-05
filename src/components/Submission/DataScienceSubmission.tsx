import React from "react";

const DataScienceSubmission = () => {
  // Array of questions and answers with YouTube links
  const submissions = [
    {
      question: "Basics of Coding R/Python",
      answer: "https://youtu.be/SoLba5bU0UE?feature=shared",
    },
    {
      question: "Data Preparation",
      answer: "https://youtu.be/G7lMyj3R2KM?feature=shared",
    },
    {
      question: "Exploratory Data Analysis",
      answer: "https://youtu.be/vENP6-sZofk?feature=shared",
    },
    {
      question: "Data Preparation Phase to Model the Data",
      answer: "https://youtu.be/K_4GwrIJUU4?feature=shared",
    },
    {
      question: "Model Evaluation",
      answer: "https://youtu.be/kcmzRVtTVlo?feature=shared",
    },
    {
      question: "Naive Bayes classification",
      answer: "https://youtu.be/diEkHORhoaY?feature=shared",
    },
    {
      question: "Neural Networks",
      answer: "https://youtu.be/OGoSJs8rLEI?feature=shared",
    },
    {
      question: "Clustering",
      answer: "https://youtu.be/Hvnt58zMs6U?feature=shared",
    },
    {
      question: "Regression Modeling",
      answer: "https://youtu.be/iu_vQVz8BmU?feature=shared",
    },
    {
      question: "Dimension Reduction",
      answer: "https://www.youtube.com/watch?v=KMpOJQ7s5D0",
    },
    {
      question: "Logistic Regression Modeling",
      answer: "https://www.youtube.com/watch?v=ZH8PCT6TgoA",
    },
    {
      question: "Assosciation Rules",
      answer: "https://www.youtube.com/watch?v=1PYcW-7fPSE",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl text-headcolor font-bold text-center underline mb-10">
        Data Science Submission
      </h1>
      <div className="space-y-8">
        {submissions.map((submission, index) => (
          <div key={index} className="space-y-4">
            {/* Question */}
            <h2 className="text-2xl font-semibold text-slate-700">
              <span className="text-gray-700 text-xl">Question {index + 1}:</span>  {submission.question}
            </h2>
            {/* Answer */}
            <p className="text-gray-600">
              Answer:{" "}
              <a
                href={submission.answer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                {submission.answer}
              </a>
            </p>
            {/* Horizontal Rule */}
            <hr className="border-slate-300 shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScienceSubmission;
