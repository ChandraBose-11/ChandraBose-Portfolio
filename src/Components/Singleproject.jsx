import React from "react";
import { useParams, Link } from "react-router-dom";
import ProjectData from "../ProjectData/ProjectData";

const SingleProject = () => {
  const { id } = useParams();
  const project = ProjectData[id];

  if (!project) {
    return (
      <div className="text-center text-red-500 text-xl mt-20">
        Project not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-5">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/"
          className="mb-6 inline-block text-[#fe5617] underline font-semibold"
        >
          ← Back to Projects
        </Link>

        <div className="w-full h-[300px] rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold text-[#fe5617] mb-4">
          {project.title}
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        <h2 className="mt-8 text-2xl font-bold">Tech Stack:</h2>
        <div className="flex flex-wrap mt-3 gap-2">
          {project.tech?.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 dark:text-amber-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-black transition"
          >
            View GitHub
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#fe5617] px-4 py-2 rounded-lg font-semibold hover:bg-[#ff4600] transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
