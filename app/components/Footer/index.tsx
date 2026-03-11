"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => (
  <footer
    className="py-8 px-6"
    style={{
      background: "var(--bg-primary)",
      borderTop: "1px solid var(--border)",
    }}
  >
    <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
      <p
        className="text-sm flex items-center gap-1"
        style={{ color: "var(--text-muted)" }}
      >
        &copy; {new Date().getFullYear()} Alan Cristian. Built with{" "}
        <FaHeart className="text-xs" style={{ color: "var(--accent)" }} />
      </p>
      <div className="flex gap-4">
        {[
          {
            href: "mailto:alancristian14lima@gmail.com",
            icon: FaEnvelope,
            label: "Email",
          },
          {
            href: "https://github.com/AlanCrist",
            icon: FaGithub,
            label: "GitHub",
          },
          {
            href: "https://linkedin.com/in/alancrist",
            icon: FaLinkedin,
            label: "LinkedIn",
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
            aria-label={link.label}
          >
            <link.icon className="text-xl" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
