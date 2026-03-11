"use client";

import { motion } from "framer-motion";
import { Article } from "../../types";
import { FaExternalLinkAlt, FaLightbulb, FaClock } from "react-icons/fa";

interface ProgrammingTipsSectionProps {
  articles: Article[];
}

const ProgrammingTipsSection: React.FC<ProgrammingTipsSectionProps> = ({
  articles,
}) => {
  if (!articles.length) return null;

  return (
    <section
      id="tips"
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
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaLightbulb style={{ color: "var(--tag-tip-text)" }} />
            <h2
              className="font-heading text-sm uppercase tracking-widest"
              style={{ color: "var(--tag-tip-text)" }}
            >
              Level Up
            </h2>
          </div>
          <h3
            className="font-heading text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Programming <span className="gradient-text">Tips</span>
          </h3>
          <p
            className="max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Curated tutorials and tips to level up your coding skills. Fresh
            content updated daily.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base overflow-hidden block group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {article.cover_image && (
                <div className="overflow-hidden">
                  <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs mb-3">
                  <FaClock style={{ color: "var(--text-muted)" }} />
                  <span style={{ color: "var(--text-muted)" }}>
                    {new Date(article.published_at).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </span>
                  <span
                    className="ml-auto flex items-center gap-1"
                    style={{ color: "var(--accent-light)" }}
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Read
                  </span>
                </div>
                <h4
                  className="font-heading text-lg font-bold mb-2 line-clamp-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {article.title}
                </h4>
                <p
                  className="text-sm line-clamp-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {article.tag_list.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "var(--tag-tip-bg)",
                        color: "var(--tag-tip-text)",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingTipsSection;
