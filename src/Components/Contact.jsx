import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

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
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617] flex items-center justify-center">
      <FaEnvelope className="mr-3" /> {/* Icon with margin-right */}
      <i>Get in touch</i>
    </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[150px] justify-center">
          <div className="flex flex-col space-y-5 text-lg md:text-xl font-semibold">
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
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-xl font-bold">Follow on</h2>
              <div className="flex gap-4">
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
                  href="mailto:Chandrubose46@gmail.com"
                  className="hover:text-[#fe5617]"
                >
                  <FaEnvelope size={29} className="text-[#c71610]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full max-w-md "
          >
            <h2 className="text-2xl font-bold text-[#fe5617] text-center">
              Send a Message
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 dark:text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 dark:text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 h-32  dark:text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-[#fe5617] text-white py-3 rounded-md font-semibold hover:bg-[#d44810] disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-500 text-center">
                Failed to send the message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
