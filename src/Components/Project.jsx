import { FaGithub } from "react-icons/fa";
import ProjectData from "../ProjectData/ProjectData";
import { MdWork } from "react-icons/md";
const Project = () => {
  return (
    <div
      id="project"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center"
    >
      <div className="max-w-[90%] md:max-w-[90%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617] flex items-center justify-center">
          <MdWork className="mr-3" /> {/* Icon with margin-right */}
          <i>My Projects</i>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {/* Project Card Example */}
          {ProjectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#F2EFE5] dark:bg-gray-900 text-gray-900  dark:text-white p-6 rounded-2xl shadow-lg flex flex-col items-center dark:shadow-slate-100 border-3 "
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-[150px] object-cover"
              />

              <h1 className="text-[#fe5617] font-extrabold text-[20px] text-center mb-2">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-2 justify-center mt-2 ">
                {project.tech &&
                  project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-[15px] font-semibold text-sky-700 dark:text-amber-300"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <p className="bg-[#F2EFE5] dark:bg-gray-900 text-gray-900 dark:text-white text-[18px] mt-5 text-center">
                {project.description}
              </p>
              <div className="flex justify-between gap-4 mt-6 text-sm text-red-500 dark:text-white">
                <a
                  href={project.github}
                  className="flex items-center gap-2 font-medium bg-[#F2EFE5] dark:bg-gray-900 text-gray-900 dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" /> Source Code
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
