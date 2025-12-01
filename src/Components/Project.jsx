import { FaGithub } from "react-icons/fa";
import ProjectData from "../ProjectData/ProjectData";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen py-16"
    >
      <div className="max-w-[90%] mx-auto font-inter space-y-12">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#fe5617] flex items-center justify-center gap-3">
          <MdWork className="text-5xl" />
          <span>My Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-full h-[170px] mb-4 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h1 className="text-[#fe5617] font-bold text-[22px] text-center mb-3">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2 justify-center my-3">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 dark:text-amber-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-center text-[16px] leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                {project.description.slice(0, 100)}...
              </p>

              {/* Read More */}
              <div className="flex justify-center mt-4">
                <Link
                  to={`/project/${idx}`}
                  className="text-white bg-[#fe5617] px-4 py-2 rounded-lg font-semibold hover:bg-[#ff4600] transition"
                >
                  Read More
                </Link>
              </div>

              <div className="flex justify-between items-center mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 dark:text-white font-medium hover:text-[#fe5617] transition"
                >
                  <FaGithub className="text-2xl" />
                  Source Code
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fe5617] font-bold text-lg hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
