import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center "
    >
      <div className="w-[90%] md:w-[80%] mx-auto py-16 space-y-12">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#fe5617] flex items-center justify-center gap-2"
        >
          <FaEnvelope /> <i>Get in Touch</i>
        </motion.h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center ">

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full p-8 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 shadow-xl border border-white/20 space-y-6  shadow-slate-100  hover:shadow-xl "
          >
            <div className="space-y-4 text-lg font-semibold">

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-red-600" size={22} />
                <span>Chennai</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600" size={22} />
                <span>9952978290</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-600" size={22} />
                <span>Chandrubose46@gmail.com</span>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-bold text-center mb-3">Follow Me</h2>
              <div className="flex justify-center gap-6 text-3xl">
                <a
                  href="https://github.com/ChandraBose-11"
                  target="_blank"
                  className="hover:text-[#fe5617] dark:text-white"
                >
                  <FaGithub />
                </a>

                <a
                  href="http://www.linkedin.com/in/Chandrabose11"
                  target="_blank"
                  className="text-[#0077B5]"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:Chandrubose46@gmail.com"
                  className="text-[#c71610]"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full p-8 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 shadow-xl border border-white/20 space-y-6  shadow-slate-100  hover:shadow-xl " 
          >
            <h2 className="text-2xl font-bold text-[#fe5617] text-center">
              Send a Message
            </h2>

            {/* FLOATING LABEL INPUT */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-transparent dark:bg-transparent dark:text-white focus:border-[#fe5617] outline-none"
              />
              <label className={`absolute left-3 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.name ? " -top-3 bg-white dark:bg-gray-900 px-1 text-sm" : ""
              }`}>
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-transparent dark:bg-transparent dark:text-white focus:border-[#fe5617] outline-none"
              />
              <label className={`absolute left-3 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.email ? " -top-3 bg-white dark:bg-gray-900 px-1 text-sm" : ""
              }`}>
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 h-32 border rounded-md bg-transparent dark:bg-transparent dark:text-white focus:border-[#fe5617] outline-none"
              />
              <label className={`absolute left-3 top-3 text-gray-500 transition-all pointer-events-none ${
                formData.message ? " -top-3 bg-white dark:bg-gray-900 px-1 text-sm" : ""
              }`}>
                Your Message
              </label>
            </div>

            {/* GRADIENT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#fe5617] to-[#ff3c00] hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success === true && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-500 text-center">Failed to send message. Try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
