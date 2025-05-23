import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter">
        {/* Logo */}
        <div>
          <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] dark:text-[#fe5617]  ">
            Portfolio
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" transition-all duration-500 ease-in text-[#fe5617] "
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-[#F2EFE5]  dark:bg-gray-900 text-white-900 dark:text-whitep-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-7 text-[14px] font-semibold">
            <Link to="home" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                Home
              </li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                About
              </li>
            </Link>
            <Link to="project" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                Project
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
                Contact
              </li>
            </Link>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="hidden lg:flex w-[100px] items-center justify-between lg:gap-5">
          <a
            href="https://github.com/ChandraBose-11"
            className="hover:text-[#fe5617]"
            target="_blank"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="http://www.linkedin.com/in/Chandrabose11"
            target="_blank"
          >
            <FaLinkedin size={29} className="text-[#0077B5]" />
          </a>
          <a href="mailto:Chandrubose46@gmail.com" target="_blank">
            <FaEnvelope size={29} className="text-[#c71610]" />
          </a>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
