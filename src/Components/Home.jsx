import { TypeAnimation } from "react-type-animation";
import { FaPhoneAlt, FaEnvelope, FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Resume from "../assets/Resume.pdf"
const Home = () => {
  return (
    <div id="home" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#214f66]">Chandra Bose</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <TypeAnimation
              sequence={[
                "Welcome to my page :)",
                2000,
                "I’m a Full stack Developer...",
                2000,
                "I’m a Web Developer...",
                2000,
                // "Hire Me !!!  ",
                // 2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xlbg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium">
            I'm a passionate, dedicated, and creative individual who thrives on
            pushing boundaries and learning new technologies. Enthusiastic
            Entry-Level MERN Stack Developer adept in Express.js, React,
            Node.js, and MongoDB, committed to driving success through
            innovation and teamwork.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#ce3939]" size={20} />
              <span>Chennai</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#27a34e]" size={20} />
              <span>9952978290</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#c24731]" size={20} />
              <span>Chandrubose46@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="hover:bg-[#59B2F4] bg-[#fe5617] px-5 py-2 rounded-2xl font-bold ">
            <a href={Resume} target="_blank">Resume </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w=[80%] lg:w-[80%] rounded-[50px]"
            src="/ChandraBose.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
