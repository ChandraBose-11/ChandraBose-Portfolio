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
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/chandra-bose-b838142a1/"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/immucoder/?__pwa=1"
            className="hover:text-[#fe5617]"
          >
            <FaWhatsapp size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
