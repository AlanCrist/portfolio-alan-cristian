"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../../types";

const projects: Project[] = [
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with authentication, real-time updates, and a clean UI. Built with Next.js, Node.js, and PostgreSQL.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/AlanCrist",
    image: "/project1.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable e-commerce platform with shopping cart, payment integration, and admin dashboard. Features server-side rendering for optimal SEO.",
    tech: ["React", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com/AlanCrist",
    image: "/project2.png",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by modern AI APIs with conversation history, context awareness, and a responsive interface.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    github: "https://github.com/AlanCrist",
    image: "/project3.jpg",
  },
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="section-padding"
    style={{ background: "var(--bg-primary)" }}
  >
    <div className="container mx-auto max-w-6xl">
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
          Portfolio
        </h2>
        <h3
          className="font-heading text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Featured <span className="gradient-text">Projects</span>
        </h3>
        <p
          className="max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          A selection of projects showcasing full-stack development skills and
          modern technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card-base overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            {/* Number header with gradient */}
            <div
              className="h-48 flex items-center justify-center relative overflow-hidden"
              style={{ background: "var(--accent-gradient)" }}
            >
              <span className="text-white/10 text-8xl font-bold font-heading">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Animated grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="p-6">
              <h4
                className="font-heading text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h4>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "var(--tag-bg)",
                      color: "var(--tag-text)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
