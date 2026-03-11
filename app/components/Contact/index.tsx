"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactCards = [
  {
    href: "mailto:alancristian14lima@gmail.com",
    icon: FaEnvelope,
    title: "Email",
    label: "alancristian14lima@gmail.com",
    external: false,
  },
  {
    href: "https://github.com/AlanCrist",
    icon: FaGithub,
    title: "GitHub",
    label: "@AlanCrist",
    external: true,
  },
  {
    href: "https://linkedin.com/in/alancrist",
    icon: FaLinkedin,
    title: "LinkedIn",
    label: "in/alancrist",
    external: true,
  },
];

const ContactSection = () => (
  <section
    id="contact"
    className="section-padding"
    style={{ background: "var(--bg-secondary)" }}
  >
    <div className="container mx-auto max-w-4xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-heading text-sm uppercase tracking-widest mb-3"
          style={{ color: "var(--accent-light)" }}
        >
          Contact
        </h2>
        <h3
          className="font-heading text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Get In <span className="gradient-text">Touch</span>
        </h3>
        <p
          className="max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out
          through any of the channels below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((card, i) => (
          <motion.a
            key={card.title}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
            className="card-base flex flex-col items-center p-8 text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300"
              style={{
                background: "var(--tag-bg)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <card.icon
                className="text-2xl"
                style={{ color: "var(--accent-light)" }}
              />
            </div>
            <h4
              className="font-heading font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {card.title}
            </h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {card.label}
            </p>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="flex items-center justify-center gap-2 mt-12"
        style={{ color: "var(--text-muted)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <FaMapMarkerAlt />
        <span className="text-sm">Brazil</span>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
