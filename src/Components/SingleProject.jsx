import { useParams, Link } from "react-router-dom";
import ProjectData from "../ProjectData/ProjectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const SingleProject = () => {
  const { id } = useParams();
  const project = ProjectData[id];
  const [index, setIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Project Not Found 😕
      </div>
    );
  }

  const nextSlide = () => {
    setIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white min-h-screen py-24">
      {/* MAIN WRAPPER */}
      <div className="max-w-[92%] md:max-w-6xl mx-auto space-y-24">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center text-[#fe5617] tracking-wide drop-shadow-lg"
        >
          {project.title}
        </motion.h1>

        {/* SLIDER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-gray-200 dark:border-gray-700 backdrop-blur-xl"
          style={{ boxShadow: "0 0 40px rgba(254,86,23,0.25)" }}
        >
          <img
            src={project.images[index]}
            className="w-full h-full  object-fill  rounded-[40px] bg-white dark:bg-gray-900 p-4 "
          />

          {/* SLIDER BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-3 rounded-full hover:bg-black/70 transition-all shadow-lg"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-3 rounded-full hover:bg-black/70 transition-all shadow-lg"
          >
            ❯
          </button>

          {/* DOTS */}
          <div className="absolute bottom-6 w-full flex justify-center gap-2">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === i ? "bg-[#fe5617] scale-125" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* DETAILS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] space-y-14 border border-gray-200 dark:border-gray-700"
        >
          {/* OVERVIEW */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#fe5617]">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 tracking-wide">
              {project.details}
            </p>
          </div>

          {/* FEATURES */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#fe5617]">
              Core Features
            </h2>
            <ul className="space-y-3 text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#fe5617] font-bold">•</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* FRONTEND TECH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10 bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-center text-[#fe5617]">
            Frontend Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {project.frontendTech.map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md text-sm font-semibold tracking-wide"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* BACKEND TECH */}
        {project.backendTech.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10 bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center text-[#fe5617]">
              Backend Technologies
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {project.backendTech.map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md text-sm font-semibold tracking-wide"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              className="flex items-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <FaGithub /> Frontend Repo
            </a>
          )}

          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              className="flex items-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <FaGithub /> Backend Repo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <FaGithub /> GitHub Repo
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 bg-[#fe5617] text-white py-4 px-8 rounded-xl shadow-xl hover:bg-[#e64a15] transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </motion.div>

        {/* BACK LINK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center pt-12"
        >
          <Link
            to="/"
            className="text-[#fe5617] text-lg underline hover:opacity-75"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProject;
