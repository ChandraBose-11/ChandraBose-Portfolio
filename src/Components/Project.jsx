import { FaGithub } from "react-icons/fa";
import ProjectData from "../ProjectData/ProjectData";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center"
    >
      <div className="max-w-[100%] mx-auto font-inter space-y-16 py-24">
        
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#fe5617] flex items-center justify-center gap-4">
          <MdWork size={50} className="animate-pulse" />
          <i>My Projects</i>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 place-items-center">
          {ProjectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#F6F4EC] dark:bg-gray-800 
              w-full max-w-[360px] h-[520px]
              p-4 rounded-2xl shadow-lg flex flex-col border border-gray-200 dark:border-gray-700 
              hover:shadow-2xl hover:scale-[1.04] transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-[180px] object-cover mb-6 shadow-sm"
              />

              {/* Title */}
              <h1 className="text-[#fe5617] font-bold text-[20px] text-center mb-6">
                {project.title}
              </h1>

              {/* Description — auto grows without blank gap */}
              <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed text-center flex-grow">
                {project.description}
              </p>

              {/* Button always at bottom */}
              <div className="flex justify-center w-full mt-auto ">
                <Link
                  to={`/project/${idx}`}
                  className="text-[#fe5617] font-semibold text-lg hover:underline underline-offset-2"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
