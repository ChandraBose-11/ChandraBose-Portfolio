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
  SiInsomnia,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

// ⭐ ADDED
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#fe5617] flex items-center justify-center"
        >
          <FaUser className="mr-3" />
          <i>About Me</i>
        </motion.h1>

        {/* About Me Section */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg md:text-xlbg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center leading-relaxed"
        >
          I’m{" "}
          <span className="font-bold text-[#fe5617]">
            <i>Chandra Bose</i>
          </span>
          , a MERN Stack developer with a degree in B.tech Petroleum Engineering
          from Vels Institute of Science ,Technology & Advanced Studies (VISTAS)
          Bachelor of Technology. I specialize in HTML, CSS, Tailwind,
          Bootstrap, JavaScript, React, Redux, MongoDB, Node.js, Express.js, and
          Git. My journey in tech started during college, where I developed a
          strong interest in web development. I’m dedicated to building dynamic
          and scalable web applications and am always eager to learn and adapt.
          My goal is to contribute to innovative projects and drive progress in
          the field of web development with my comprehensive skill set.
        </motion.p>

        {/* Skills Section */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold text-center text-[#fe5617] mb-12 flex justify-center items-center gap-3"
          >
            <FaTools /> <i>My Skills</i>
          </motion.h2>

          {/* Frontend */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-[#fe5617] text-center pb-2"
          >
            Front-End
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center p-2 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3  hover:shadow-xl transition duration-300"
            >
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold text-black dark:text-white">
                HTML5
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </motion.div>
          </div>

          {/* Backend */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-[#fe5617] text-center pb-2"
          >
            Back-End
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <SiExpress size={40} className="text-[#000000]" />
              <span className="font-bold">Express.js</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 border-3 hover:shadow-xl transition duration-300"
            >
              <SiMysql size={40} className="text-[#000000] dark:text-white" />
              <span className="font-bold">MySQL</span>
            </motion.div>
          </div>

          {/* Tools */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-[#fe5617] text-center pb-2"
          >
            Tools
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <FaGithub size={40} className="text-black dark:text-white" />
              <span className="font-bold">GitHub</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <SiPostman size={40} className="text-[#ef5b25]" />
              <span className="font-bold">Postman</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <SiInsomnia size={40} className="text-[#5800cf]" />
              <span className="font-bold">Insomnia</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <IoLogoVercel size={40} className="text-[#000] dark:text-white" />
              <span className="font-bold">Vercel</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-2xl p-4 shadow-md bg-white dark:bg-slate-800 shadow-slate-100 hover:shadow-xl transition duration-300"
            >
              <SiRender size={40} className="text-[#000] dark:text-white" />
              <span className="font-bold">Render</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
