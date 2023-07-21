import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../assets/profile.jpg";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const AboutSection = () => (
  <section id="about" className="relative bg-indigo-950 text-white py-20 px-10">
    <motion.div
      className="container mx-auto max-w-7xl"
      initial="exit"
      animate="enter"
      variants={variants}
    >
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-1/2 px-4 mb-10 lg:mb-0">
          <motion.div
            className="h-64 w-64 relative mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="rounded-full shadow-lg"
              src={profilePic}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="lg:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-5">Alan Cristian</h2>
          <p className="text-lg leading-relaxed mb-5">
            I am a Full Stack developer with experience in building and
            designing websites and web applications. I specialize in JavaScript
            and have professional experience working with React and Node.js. I
            also have experience with serverless architecture and CMS
            development.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-indigo-950 px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
