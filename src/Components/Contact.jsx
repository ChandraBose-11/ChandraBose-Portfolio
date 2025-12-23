import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
    setSuccess(null);

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
    } catch {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="w-[90%] md:w-[80%] mx-auto py-16 space-y-14">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl space-y-6"
          >
            <div className="space-y-4 text-lg font-semibold">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-red-600" />
                Chennai
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600" />
                9952978290
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-600" />
                Chandrubose46@gmail.com
              </div>
            </div>

            <h3 className="text-xl font-bold text-center mt-6">Follow Me</h3>
            <div className="flex justify-center gap-6 text-3xl">
              <a href="https://github.com/ChandraBose-11" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/Chandrabose11"
                target="_blank"
                rel="noreferrer"
                className="text-[#0077B5]"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:Chandrubose46@gmail.com" className="text-[#c71610]">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl space-y-6"
          >
            <h3 className="text-2xl font-bold text-center text-[#fe5617]">
              Send a Message
            </h3>

            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-transparent outline-none focus:border-[#fe5617]"
              />
              <label
                className={`pointer-events-none absolute left-3 bg-white dark:bg-gray-800 px-1 text-gray-500 transition-all
                ${formData.name
                  ? "-top-2 text-sm"
                  : "top-1/2 -translate-y-1/2 text-base"}`}
              >
                Your Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-transparent outline-none focus:border-[#fe5617]"
              />
              <label
                className={`pointer-events-none absolute left-3 bg-white dark:bg-gray-800 px-1 text-gray-500 transition-all
                ${formData.email
                  ? "-top-2 text-sm"
                  : "top-1/2 -translate-y-1/2 text-base"}`}
              >
                Your Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-3 border rounded-md bg-transparent outline-none focus:border-[#fe5617]"
              />
              <label
                className={`pointer-events-none absolute left-3 bg-white dark:bg-gray-800 px-1 text-gray-500 transition-all
                ${formData.message
                  ? "-top-2 text-sm"
                  : "top-6 text-base"}`}
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#fe5617] to-[#ff3c00]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success === true && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-600 text-center">
                Failed to send message.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
