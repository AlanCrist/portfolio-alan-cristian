"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => (
  <section id="contact" className="bg-indigo-950 text-white py-20 px-10">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-center text-indigo-200 mb-12 max-w-xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out
        through any of the channels below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.a
          href="mailto:alancristian14lima@gmail.com"
          className="flex flex-col items-center p-8 bg-indigo-900/50 rounded-xl hover:bg-indigo-900 transition-colors"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <FaEnvelope className="text-4xl mb-4 text-indigo-300" />
          <h3 className="font-bold mb-1">Email</h3>
          <p className="text-indigo-300 text-sm text-center">
            alancristian14lima@gmail.com
          </p>
        </motion.a>
        <motion.a
          href="https://github.com/AlanCrist"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-8 bg-indigo-900/50 rounded-xl hover:bg-indigo-900 transition-colors"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <FaGithub className="text-4xl mb-4 text-indigo-300" />
          <h3 className="font-bold mb-1">GitHub</h3>
          <p className="text-indigo-300 text-sm">@AlanCrist</p>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/alancrist"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-8 bg-indigo-900/50 rounded-xl hover:bg-indigo-900 transition-colors"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <FaLinkedin className="text-4xl mb-4 text-indigo-300" />
          <h3 className="font-bold mb-1">LinkedIn</h3>
          <p className="text-indigo-300 text-sm">in/alancrist</p>
        </motion.a>
      </div>
      <motion.div
        className="flex items-center justify-center gap-2 mt-12 text-indigo-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <FaMapMarkerAlt />
        <span>Brazil</span>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
