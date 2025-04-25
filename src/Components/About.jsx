import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNetlify,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRender,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { Card } from "flowbite-react";
const About = () => {
  return (
    <div
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xlbg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Chandra Bose</span>, a
          MERN Stack developer with a degree in B.tech Petroleum Engineering
          from Vels Institute of Science ,Technology & Advanced Studies (VISTAS)
          Bachelor of Technology. I specialize in HTML, CSS, Tailwind,
          Bootstrap, JavaScript, React, Redux, MongoDB, Node.js, Express.js, and
          Git. My journey in tech started during college, where I developed a
          strong interest in web development. I’m dedicated to building dynamic
          and scalable web applications and am always eager to learn and adapt.
          My goal is to contribute to innovative projects and drive progress in
          the field of web development with my comprehensive skill set.
        </p>

        {/* Skills Section */}

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          {/* Frontend */}
          <h2 className="text-2xl font-bold text-[#fe5617] text-center pb-2">
            Front-End
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center p-2 ">
            <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold text-black dark:text-white">
                HTML5
              </span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiBootstrap
                size={40}
                className="text-[#563d7c] dark:text-blue-600"
              />
              <span className="font-bold">Bootstrap</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
          </div>
          {/* Backend*/}
          <h2 className="text-2xl font-bold text-[#fe5617] text-center mt-1">
            Back-End
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiExpress size={40} className="text-[#000000] " />
              <span className="font-bold">Express.js</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiMysql size={40} className="text-[#000000] dark:text-white" />
              <span className="font-bold">MySQL</span>
            </div>
          </div>
          {/* Tools */}
          <h2 className="text-2xl font-bold text-[#fe5617] text-center mt-1">
            Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <FaGithub size={40} className="text-black dark:text-white" />
              <span className="font-bold">GitHub</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiPostman size={40} className="text-[#ef5b25]" />
              <span className="font-bold">Postman</span>
            </div>

           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <IoLogoVercel size={40} className="text-[#000] dark:text-white" />
              <span className="font-bold">Vercel</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
           <div className="flex flex-col items-center space-y-2 border-2 border-slate-800 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3">
              <SiRender size={40} className="text-[#000] dark:text-white" />
              <span className="font-bold">Render</span>
            </div>
          </div>
          {/* Skill Icons */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
