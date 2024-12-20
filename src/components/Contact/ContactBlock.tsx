"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactBlock() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      const res = await axios.post("/api/mail", formData);

      if (res.status === 200) {
        toast.success("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }); // Reset form after success
      } else {
        toast.error("Failed to send email. Please try again.");
        console.log("API Response:", res.data);
      }
    } catch (error: any) {
      console.error("Error details:", error.response?.data || error.message);
      toast.error("Error occurred while sending the email.");
    }
  };

  return (
    <>
      <div className="min-h-[70vh] px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <h1 className="text-3xl font-sans font-bold text-gray-800 mt-10 tracking-wide">
              Ready To Connect
            </h1>
            <p className="mt-2 font-sans text-sm tracking-tight text-amber-700">
              Looking forward to hearing from you
            </p>
          </div>
          <div className="w-full max-w-lg mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="w-full p-2">
                  <label
                    className="block text-sm font-light text-amber-600"
                    htmlFor="firstName"
                  >
                    *First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 sm:text-sm p-2 text-amber-700 outline-none rounded-md shadow-md shadow-stone-400"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <label
                    className="block text-sm font-light text-amber-600"
                    htmlFor="lastName"
                  >
                    *Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-md shadow-stone-400 sm:text-sm p-2 text-amber-700 outline-none"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <label
                  className="block text-sm font-light text-amber-600"
                  htmlFor="email"
                >
                  *Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-500 shadow-md sm:text-sm p-2 text-amber-700 outline-none shadow-stone-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mt-4 p-2">
                <label
                  className="block text-sm font-light text-amber-600"
                  htmlFor="message"
                >
                  *Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md shadow-stone-400 sm:text-sm p-2 pb-5 text-amber-700 outline-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <div className="mt-8 w-full pb-8">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 text-lg shadow-amber-900 font-sans"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
        <ToastContainer />
      </div>
    </>
  );
}

export default ContactBlock;
