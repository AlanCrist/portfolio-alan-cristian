import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-indigo-950 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Alan Cristian
        </p>
        <div className="space-x-4">
          <a
            href="mailto:alancristian14lima@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="inline-block text-2xl hover:text-indigo-300 transition-colors duration-200" />
          </a>
          <a
            href="https://github.com/alancrist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block text-2xl hover:text-indigo-300 transition-colors duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/alancrist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="inline-block text-2xl hover:text-indigo-300 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
