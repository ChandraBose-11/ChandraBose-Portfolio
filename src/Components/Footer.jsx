import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Chandra Bose. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by
          <a href="#" className="underline hover:text-[#ffffff]">
            Chandra Bose
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
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
          <a
            href="https://wa.me/919952978290"
            target="_blank"
            className="hover:text-[#17fe23]"
          >
            <FaWhatsapp size={29} className="text-green-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
