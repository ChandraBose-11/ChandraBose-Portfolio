import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700">

      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center py-10 space-y-6">

        <h2 className="text-2xl font-bold text-[#fe5617] tracking-wide">
          Chandra Bose
        </h2>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/ChandraBose-11"
            target="_blank"
            className="hover:scale-110 transition-all hover:text-[#fe5617]"
          >
            <FaGithub />
          </a>

          <a
            href="http://www.linkedin.com/in/Chandrabose11"
            target="_blank"
            className="hover:scale-110 transition-all text-[#0077B5]"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/919952978290"
            target="_blank"
            className="hover:scale-110 transition-all text-green-500"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto" />

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Chandra Bose. All rights reserved.
        </p>

        <p className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="#"
            className="font-semibold text-[#fe5617] hover:underline"
          >
            Chandra Bose
          </a>
        </p>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#fe5617] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
