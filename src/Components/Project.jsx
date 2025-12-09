import { FaGithub } from "react-icons/fa";
import ProjectData from "../ProjectData/ProjectData";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen py-24"
    >
      <div className="max-w-6xl mx-auto font-inter space-y-16">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-[#fe5617] flex items-center justify-center gap-4"
        >
          <MdWork size={50} className="animate-pulse" />
          <i>My Projects</i>
        </motion.h1>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {ProjectData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#F6F4EC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700  shadow-slate-100  hover:shadow-xl  
              rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 
              p-5 flex flex-col h-[500px]"
            >
              {/* Image */}
              <div className="w-full h-[190px] mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-full object-cover shadow-sm"
                />
              </div>

              {/* Title */}
              <h1 className="text-[#fe5617] font-bold text-xl text-center mb-3">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm text-center flex-grow leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Link
                  to={`/project/${idx}`}
                  className="bg-[#fe5617] text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-[#e84f13] transition-all"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
