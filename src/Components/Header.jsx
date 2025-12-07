import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${section}`);
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-[90%] mx-auto py-5 px-4 flex items-center justify-between font-inter">

        {/* LOGO */}
        <h1 className="text-[2.2rem] font-extrabold tracking-wide cursor-pointer transition hover:text-[#fe5617] text-gray-900 dark:text-[#fe5617]">
          Portfolio
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-12 text-[16px] font-semibold text-gray-800 dark:text-gray-200">
          <li
            onClick={() => handleScroll("home")}
            className="cursor-pointer hover:text-[#fe5617] transition"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("about")}
            className="cursor-pointer hover:text-[#fe5617] transition"
          >
            About
          </li>
          <li
            onClick={() => handleScroll("project")}
            className="cursor-pointer hover:text-[#fe5617] transition"
          >
            Projects
          </li>
          <li
            onClick={() => handleScroll("contact")}
            className="cursor-pointer hover:text-[#fe5617] transition"
          >
            Contact
          </li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden lg:flex items-center gap-6 pl-4">
          <a
            href="https://github.com/ChandraBose-11"
            target="_blank"
            className="hover:text-[#fe5617] dark:text-white"
          >
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/Chandrabose11" target="_blank">
            <FaLinkedin size={26} className="text-[#0077B5]" />
          </a>
          <a href="mailto:Chandrubose46@gmail.com" target="_blank">
            <FaEnvelope size={26} className="text-[#c24731]" />
          </a>
        </div>

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#fe5617]"
        >
          {isMenuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 dark:bg-gray-800 py-7 px-7 shadow-md border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col gap-7 text-[18px] font-semibold text-gray-900 dark:text-gray-200">

            <li
              onClick={() => handleScroll("home")}
              className="cursor-pointer hover:text-[#fe5617]"
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("about")}
              className="cursor-pointer hover:text-[#fe5617]"
            >
              About
            </li>
            <li
              onClick={() => handleScroll("project")}
              className="cursor-pointer hover:text-[#fe5617]"
            >
              Projects
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="cursor-pointer hover:text-[#fe5617]"
            >
              Contact
            </li>

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex gap-7 pt-4 items-center">
              <a href="https://github.com/ChandraBose-11" target="_blank">
                <FaGithub size={26} />
              </a>
              <a href="https://www.linkedin.com/in/Chandrabose11" target="_blank">
                <FaLinkedin size={26} />
              </a>
              <a href="mailto:Chandrubose46@gmail.com" target="_blank">
                <FaEnvelope size={26} />
              </a>
            </div>

            <div className="pt-4">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
