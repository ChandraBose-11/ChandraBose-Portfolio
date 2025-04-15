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
  SiPostman,
  SiRender,
  SiMysql,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { Card } from "flowbite-react";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
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
        <h2 className="text-2xl font-bold text-[#fe5617] text-center">
          My Skills
        </h2>
        <div className="space-y-8">
          {/*Front-end Skills*/}
          <Card className="border-4 rounded-lg">
            <h2 className="text-2xl font-bold text-[#fe5617] text-center mb-1 underline">
              Front-End
            </h2>
            <div className="grid grid-cols-3  md:grid-cols-3 gap-6 text-center shadow-xl/20 m-1 p-2">
              {/* Skill Icons */}
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <FaHtml5 size={40} className="text-[#e34c26]" />
                  <span className="font-bold">HTML5</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <FaCss3Alt size={40} className="text-[#264de4]" />
                  <span className="font-bold">CSS3</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl">
                <div className="flex flex-col items-center space-y-2">
                  <FaJsSquare size={40} className="text-[#f7df1e]" />
                  <span className="font-bold">JavaScript</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiBootstrap size={40} className="text-[#563d7c]" />
                  <span className="font-bold">Bootstrap</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiTailwindcss size={40} className="text-[#38bdf8]" />
                  <span className="font-bold">Tailwind CSS</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <FaReact size={40} className="text-[#61dbfb]" />
                  <span className="font-bold">React.js</span>
                </div>
              </Card>
            </div>
          </Card>
          {/*Back-End */}
          <Card className="border-4 rounded-lg">
            <h2 className="text-2xl font-bold text-[#fe5617] text-center mb-1 underline">
              Backend-End
            </h2>
            <div className="grid grid-cols-3  md:grid-cols-3 gap-6 text-center shadow-xl/20 m-1 p-2">
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <FaNode size={40} className="text-[#68a063]" />
                  <span className="font-bold">Node.js</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                {" "}
                <div className="flex flex-col items-center space-y-2">
                  <SiExpress size={40} className="text-[#000000]" />
                  <span className="font-bold">Express.js</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiMongodb size={40} className="text-[#47a248]" />
                  <span className="font-bold">MongoDB</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiMysql size={40} className="text-[#000000]" />
                  <span className="font-bold">MySQL</span>
                </div>
              </Card>

              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiPostman size={40} className="text-[#ef5b25]" />
                  <span className="font-bold">Postman</span>
                </div>
              </Card>
            </div>
          </Card>
          {/*Tools*/}
          <Card className="border-4 rounded-lg">
            <h2 className="text-2xl font-bold text-[#fe5617] text-center mb-1 underline">
              Tools
            </h2>
            <div className="grid grid-cols-3  md:grid-cols-3 gap-6 text-center shadow-xl/20 m-1 p-2">
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <FaGitAlt size={40} className="text-[#f05032]" />
                  <span className="font-bold">Git</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <FaGithub size={40} className="text-black" />
                  <span className="font-bold">GitHub</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <DiVisualstudio size={40} className="text-[#0078d7]" />
                  <span className="font-bold">VS Code</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <IoLogoVercel size={40} className="text-[#000]" />
                  <span className="font-bold">Vercel</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiNetlify size={40} className="text-[#00d1b2]" />
                  <span className="font-bold">Netlify</span>
                </div>
              </Card>
              <Card className="border-2 rounded-lg shadow-xl ">
                <div className="flex flex-col items-center space-y-2">
                  <SiRender size={40} className="text-[#000]" />
                  <span className="font-bold">Render</span>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
