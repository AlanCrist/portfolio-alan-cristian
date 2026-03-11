// Header.tsx
"use client";

import { FC } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-news", label: "Tech News" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
];

const Header: FC<HeaderProps> = ({ open, setOpen }) => {
  return (
    <header className="flex items-center justify-between w-full py-5 px-10 bg-indigo-950 shadow-lg fixed top-0 left-0 z-10">
      <a href="#hero" className="font-serif text-2xl font-bold text-white">
        A L N. D E V
      </a>
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-serif text-white uppercase text-sm hover:text-indigo-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button onClick={() => setOpen(!open)} className="md:hidden text-white">
        {open ? (
          <AiOutlineClose className="h-6 w-6" />
        ) : (
          <AiOutlineMenu className="h-6 w-6" />
        )}
      </button>
      {open && (
        <nav className="absolute top-0 left-0 w-64 h-screen bg-gray-800 transform translate-x-0 transition-transform duration-200 ease-in-out md:hidden flex flex-col p-8 pt-20 space-y-6">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <AiOutlineClose className="h-6 w-6" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white uppercase text-lg hover:text-indigo-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex mt-10 space-x-5 pt-6 border-t border-gray-700">
            <a
              href="mailto:alancristian14lima@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="h-6 w-6 text-white hover:text-indigo-300" />
            </a>
            <a
              href="https://github.com/AlanCrist"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="h-6 w-6 text-white hover:text-indigo-300" />
            </a>
            <a
              href="https://linkedin.com/in/alancrist"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="h-6 w-6 text-white hover:text-indigo-300" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
