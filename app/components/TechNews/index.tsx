"use client";

import { motion } from "framer-motion";
import { Article } from "../../types";
import { FaExternalLinkAlt, FaClock } from "react-icons/fa";

interface TechNewsSectionProps {
  articles: Article[];
}

const TechNewsSection: React.FC<TechNewsSectionProps> = ({ articles }) => {
  if (!articles.length) return null;

  return (
    <section id="tech-news" className="bg-white py-20 px-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-indigo-950">
          Latest Tech News
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay up to date with the latest technology trends and developments.
          Updated daily from the dev community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {article.cover_image && (
                <img
                  src={article.cover_image}
                  alt={article.title}
                  className="w-full h-44 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <FaClock />
                  <span>
                    {new Date(article.published_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-indigo-600">
                    <FaExternalLinkAlt className="text-[10px]" /> Read
                  </span>
                </div>
                <h3 className="text-lg font-bold text-indigo-950 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {article.tag_list.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full"
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

export default TechNewsSection;
