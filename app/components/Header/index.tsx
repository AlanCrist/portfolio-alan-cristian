// Header.tsx
import { FC } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header: FC<HeaderProps> = ({ open, setOpen }) => {
  return (
    <header className="flex items-center justify-between w-full py-5 px-10 bg-indigo-950 shadow-lg fixed top-0 left-0 z-10">
      <h1 className="font-serif text-2xl font-bold text-white">A L N. D E V</h1>
      <nav className="hidden md:flex space-x-10">
        <a href="#about" className="font-serif text-white uppercase">
          About
        </a>
        <a href="#projects" className="font-serif text-white uppercase">
          Projects
        </a>
        <a href="#contact" className="font-serif text-white uppercase">
          Contact
        </a>
      </nav>
      <button onClick={() => setOpen(!open)} className="md:hidden text-white">
        {open ? (
          <AiOutlineClose className="h-6 w-6" />
        ) : (
          <AiOutlineMenu className="h-6 w-6" />
        )}
      </button>
      {open && (
        <nav
          className={`absolute top-0 left-0 w-64 h-screen bg-gray-800 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out md:hidden`}
        >
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-white uppercase"
          >
            Sobre
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="text-white uppercase"
          >
            Projetos
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-white uppercase"
          >
            Contato
          </a>
          <div className="flex mt-10 space-x-5">
            <a
              href="mailto:seuemail@example.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://github.com/seuusername"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/seuusername"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://twitter.com/seuusername"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="h-6 w-6 text-white" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
