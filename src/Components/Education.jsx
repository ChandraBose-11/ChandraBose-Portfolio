import React from "react";
import educationData from "../ProjectData/educationData";
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
  return (
    <section
      className="py-12 px-6 bg-white dark:bg-gray-900 text-gray-900"
      id="education"
    >
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#fe5617] mb-12 flex justify-center items-center gap-3">
          <FaGraduationCap className="text-5xl" /> 
          <i>Education</i>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Education List */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white  border border-gray-200 dark:bg-slate-800 shadow-slate-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#0c6775] dark:text-[#03dac6]">
                  {edu.course}
                </h3>
                <p className="text-black dark:text-white mt-2 text-lg">
                  {edu.institution}
                </p>
                <p className="text-black dark:text-white">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Image (Hidden on small screens) */}
          <div className="hidden md:block">
            <img
              src="Education.png"
              alt="Education Illustration"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
