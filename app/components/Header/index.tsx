"use client";

import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="glass fixed top-0 left-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <a
          href="#hero"
          className="font-heading text-xl font-bold tracking-wider"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="gradient-text">ALN</span>
          <span style={{ color: "var(--text-muted)" }}>.DEV</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-wider transition-colors duration-300 hover:opacity-100"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent-light)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            style={{ color: "var(--text-primary)" }}
          >
            {open ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden absolute top-0 left-0 w-72 h-screen flex flex-col p-8 pt-20 gap-6"
            style={{ background: "var(--bg-secondary)", borderRight: "1px solid var(--border)" }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5"
              style={{ color: "var(--text-primary)" }}
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-lg uppercase tracking-wider transition-colors"
                style={{ color: "var(--text-primary)" }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                {link.label}
              </motion.a>
            ))}

            <div
              className="flex mt-auto gap-5 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a
                href="mailto:alancristian14lima@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail
                  className="h-5 w-5"
                  style={{ color: "var(--text-secondary)" }}
                />
              </a>
              <a
                href="https://github.com/AlanCrist"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub
                  className="h-5 w-5"
                  style={{ color: "var(--text-secondary)" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/alancrist"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  className="h-5 w-5"
                  style={{ color: "var(--text-secondary)" }}
                />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
