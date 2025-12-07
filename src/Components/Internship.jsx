import React from "react";
import InternshipData from "../ProjectData/InternshipData";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Internship = () => {
  return (
    <section
      className="py-24 px-8 bg-white dark:bg-gray-900"
      id="internship"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl font-bold text-center text-[#fe5617] flex justify-center items-center gap-4"
        >
          <FaBriefcase className="text-6xl" />
          <span className="italic">Internship</span>
        </motion.h2>

        {/* GRID WITH MATCHED HEIGHT */}
        <div className="grid md:grid-cols-2 gap-16 items-stretch h-full">

          {/* LEFT SIDE – FULL HEIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full flex flex-col"
          >
            {InternshipData.map((intern, index) => (
              <div
                key={index}
                className="
                  bg-white dark:bg-slate-800 
                  border border-gray-200 dark:border-gray-700 
                  p-8 rounded-2xl shadow-lg 
                  transition duration-300 
                  h-full flex flex-col
                   shadow-slate-100  hover:shadow-xl 
                "
              >
                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0c6775] dark:text-[#03dac6] mb-3">
                  {intern.title}
                </h3>

                {/* COMPANY & DURATION */}
                <p className="text-gray-900 dark:text-white text-lg font-medium">
                  Company: {intern.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Duration: {intern.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {intern.description}
                </p>

                {/* RESPONSIBILITIES */}
                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-[#fe5617] mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                    {intern.responsibilities.map((task, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#fe5617] font-bold">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT SIDE — YOUR IMAGE DESIGN, FULL HEIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden md:flex h-full justify-center items-center"
          >
            <div className="hidden md:block w-[85%] h-[85%] flex justify-center items-center">
              <img
                src="/project-images/Internship.png"
                alt="Internship Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Internship;


