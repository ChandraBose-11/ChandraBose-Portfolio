import React from "react";
import educationData from "../ProjectData/educationData";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      className="py-12 px-6 bg-white dark:bg-gray-900 text-gray-900"
      id="education"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-center text-[#fe5617] mb-12 flex justify-center items-center gap-3"
        >
          <FaGraduationCap className="text-5xl" />
          <i>Education</i>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side – Education List */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="bg-white border border-gray-200 dark:bg-slate-800 shadow-slate-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
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
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side – Image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden md:block"
          >
            <img
              src="/project-images/Education.png"
              alt="Education Illustration"
              className="w-full h-auto"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
