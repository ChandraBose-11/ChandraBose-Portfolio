import { TypeAnimation } from "react-type-animation";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Resume from "../assets/Resume.pdf";

// ⭐ motion added
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 md:py-15"
    >
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-center space-y-7 text-center md:text-left px-2 md:px-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            I’m <span className="text-[#0c6775] dark:text-[#03dac6]">Chandra Bose</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="text-2xl md:text-3xl font-bold flex gap-2 leading-snug"
          >
            <TypeAnimation
              sequence={[
                "Welcome to my page :)",
                2000,
                "I’m a Full stack Developer...",
                2000,
                "I’m a Web Developer...",
                2000,
                "Hire Me !!!",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg md:text-xl font-medium leading-relaxed max-w-[620px]"
          >
            I'm a passionate, dedicated, and creative individual who thrives on
            pushing boundaries and learning new technologies. Enthusiastic
            Entry-Level MERN Stack Developer adept in Express.js, React,
            Node.js, and MongoDB, committed to driving success through
            innovation and teamwork.
          </motion.p>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-8 text-lg md:text-xl font-semibold"
          >
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
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-[#fe5617] px-6 py-3 rounded-2xl font-bold shadow-md hover:scale-105 transition"
          >
            <a href={Resume} target="_blank">Download CV</a>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end items-center"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="w-[75%] md:w-[80%] max-w-[400px] h-auto rounded-[50px] shadow-xl"
            src="/project-images/ChandraBose.png"
            alt="Profile"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
