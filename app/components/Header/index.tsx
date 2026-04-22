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
  { href: "#about",     label: "About",     color: "#06b6d4" },
  { href: "#projects",  label: "Projects",  color: "#a78bfa" },
  { href: "#tech-news", label: "Tech News", color: "#f472b6" },
  { href: "#tips",      label: "Tips",      color: "#34d399" },
  { href: "#contact",   label: "Contact",   color: "#fb923c" },
];

const socialLinks = [
  { href: "mailto:alancristian14lima@gmail.com", icon: AiOutlineMail,  color: "#f472b6", label: "Email"    },
  { href: "https://github.com/AlanCrist",        icon: AiFillGithub,   color: "#a78bfa", label: "GitHub"   },
  { href: "https://linkedin.com/in/alancrist",   icon: AiFillLinkedin, color: "#06b6d4", label: "LinkedIn" },
];

const Header: FC<HeaderProps> = ({ open, setOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: "rgba(10, 10, 26, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated rainbow bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #06b6d4, #f472b6, #34d399, #fb923c, #7c3aed)",
          backgroundSize: "300% 100%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "300% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1">
          <motion.span
            className="font-heading text-xl font-black tracking-widest"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #06b6d4, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 8px rgba(124,58,237,0.7))",
            }}
            whileHover={{ filter: "drop-shadow(0 0 16px rgba(6,182,212,0.9))" }}
          >
            ALN
          </motion.span>
          <span
            className="font-heading text-xl font-black tracking-widest"
            style={{ color: "rgba(160,160,204,0.5)" }}
          >
            .DEV
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="font-heading text-xs font-semibold uppercase tracking-widest relative"
              initial="rest"
              whileHover="hover"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px block"
                style={{ background: link.color, transformOrigin: "left" }}
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.22 }}
              />
            </motion.a>
          ))}

          {/* Social icons */}
          <div
            className="flex items-center gap-3 pl-5"
            style={{ borderLeft: "1px solid var(--border)" }}
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{ color: "var(--text-muted)" }}
                whileHover={{ color: s.color, scale: 1.25 }}
                transition={{ duration: 0.15 }}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            whileHover={{
              color: "#06b6d4",
              borderColor: "#06b6d4",
              boxShadow: "0 0 14px rgba(6,182,212,0.4)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
          </motion.button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            whileHover={{ color: "#06b6d4", borderColor: "#06b6d4" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
          </motion.button>
          <motion.button
            onClick={() => setOpen(!open)}
            style={{ color: "var(--text-primary)" }}
            whileHover={{ color: "#a78bfa" }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden fixed inset-0 flex flex-col p-8 pt-24 gap-7"
            style={{
              background: "rgba(10, 10, 26, 0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
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
                className="font-heading text-2xl font-bold uppercase tracking-widest flex items-center gap-3"
                style={{ color: "var(--text-secondary)" }}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                whileHover={{ x: 10 }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: link.color, boxShadow: `0 0 8px ${link.color}` }}
                />
                {link.label}
              </motion.a>
            ))}

            <div
              className="flex mt-auto gap-6 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {socialLinks.map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{ color: "var(--text-muted)" }}
                  whileHover={{ color: s.color, scale: 1.2 }}
                >
                  <s.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
