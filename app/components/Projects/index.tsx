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
    live: "#",
    image: "/project1.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable e-commerce platform with shopping cart, payment integration, and admin dashboard. Features server-side rendering for optimal SEO.",
    tech: ["React", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com/AlanCrist",
    live: "#",
    image: "/project2.png",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by modern AI APIs with conversation history, context awareness, and a responsive interface.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    github: "https://github.com/AlanCrist",
    live: "#",
    image: "/project3.jpg",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="bg-gray-100 py-20 px-10">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-4 text-indigo-950">
        Projects
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A selection of projects I&apos;ve built, showcasing full-stack development
        skills and modern technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="h-48 bg-indigo-900 flex items-center justify-center">
              <span className="text-white text-6xl font-bold opacity-20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-950 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full"
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
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-700 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-700 transition-colors"
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
