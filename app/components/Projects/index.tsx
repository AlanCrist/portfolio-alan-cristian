"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Project } from "../../types";
import PhoneDemo from "./PhoneDemo";

const projects: Project[] = [
  {
    title: "Real Balance",
    description:
      "Aplicativo de gestão financeira pessoal com controle de contas, cartões de crédito, metas e insights. Feito com React, TypeScript e Zustand.",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    github: "https://github.com/AlanCrist/real-balance-front",
    image: "/project-real-balance.png",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_REAL_BALANCE,
  },
  {
    title: "TarefasFun",
    description:
      "App gamificado de tarefas domésticas para famílias. Sistema de pontos, ranking, recompensas e grupos colaborativos.",
    tech: ["React", "Node.js", "i18n", "Tailwind CSS"],
    github: "https://github.com/AlanCrist/task-fun-front",
    image: "/project-tarefas-fun.png",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_TAREFAS_FUN,
  },
  {
    title: "ONG OAC Visão",
    description:
      "Site institucional para a ONG OAC Visão. Apresentação da organização, projetos sociais e informações para doadores e voluntários.",
    tech: ["React", "Tailwind CSS"],
    image: "/project-oac-visao.png",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_OAC_VISAO,
  },
  {
    title: "Streamflix",
    description:
      "Frontend de plataforma de streaming para descobrir e gerenciar conteúdos. Interface moderna com animações fluidas e navegação intuitiva.",
    tech: ["Next.js", "TypeScript", "Zustand", "Framer Motion"],
    github: "https://github.com/AlanCrist/streamflix-now-front",
    image: "/project-streamflix.png",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_STREAMFLIX,
  },
];

const ProjectsSection = () => {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  return (
    <>
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
              A selection of projects showcasing full-stack development skills
              and modern technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                layoutId={`project-card-${index}`}
                className="card-base overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Project screenshot */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: "var(--accent-gradient)" }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/10 text-8xl font-bold font-heading">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
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
                  <div className="flex gap-4 items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm transition-colors"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "var(--accent-light)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "var(--text-muted)")
                        }
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <button
                        onClick={() => setActiveDemo(index)}
                        className="flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full transition-all"
                        style={{
                          background: "var(--accent-gradient)",
                          color: "#fff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.85";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "1";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <FaPlay size={10} /> Usar Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Demo Modal */}
      {activeDemo !== null && projects[activeDemo]?.demoUrl && (
        <PhoneDemo
          isOpen={true}
          onClose={() => setActiveDemo(null)}
          demoUrl={projects[activeDemo].demoUrl!}
          title={projects[activeDemo].title}
          layoutId={`project-card-${activeDemo}`}
        />
      )}
    </>
  );
};

export default ProjectsSection;
