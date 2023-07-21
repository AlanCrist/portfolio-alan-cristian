import { motion } from "framer-motion";
import { Article } from "../../types";

interface NewsSectionProps {
  news: Article[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  return (
    <section className="bg-gray-100 py-20 text-indigo-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Latest Tech News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p>{article.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
