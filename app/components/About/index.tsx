"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../assets/profile.jpg";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
];

const AboutSection = () => (
  <section
    id="about"
    className="section-padding"
    style={{ background: "var(--bg-secondary)" }}
  >
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="flex flex-col lg:flex-row gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Image */}
        <motion.div
          className="relative flex-shrink-0"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <Image
              className="rounded-2xl object-cover"
              src={profilePic}
              alt="Alan Cristian"
              fill
              style={{
                boxShadow: "var(--shadow-lg)",
                border: "2px solid var(--border)",
              }}
            />
            {/* Decorative border */}
            <motion.div
              className="absolute -inset-3 rounded-2xl"
              style={{
                border: "2px solid var(--accent)",
                opacity: 0.3,
              }}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Corner accent */}
            <div
              className="absolute -bottom-2 -right-2 w-20 h-20 rounded-br-2xl"
              style={{
                background: "var(--accent-gradient)",
                opacity: 0.2,
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          }}
        >
          <h2
            className="font-heading text-sm uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-light)" }}
          >
            About Me
          </h2>
          <h3
            className="font-heading text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Building digital
            <br />
            <span className="gradient-text">experiences</span>
          </h3>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            I am a Full Stack developer with experience in building and designing
            websites and web applications. I specialize in JavaScript and have
            professional experience working with React and Node.js. I also have
            experience with serverless architecture and CMS development.
          </p>

          {/* Skills grid */}
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="card-base px-4 py-2 text-sm font-heading"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "var(--accent)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full font-heading text-sm font-semibold text-white"
            style={{ background: "var(--accent-gradient)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--accent-glow)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
