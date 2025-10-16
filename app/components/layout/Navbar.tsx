"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", hash: "#about" },
  { label: "Services", hash: "#services" },
  { label: "Case Studies", hash: "#case-studies" },
  { label: "Tools", hash: "#tools" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={(e) => handleClick(e, "#top")}>
          SpeedExpert
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.hash}>
              <a href={l.hash} onClick={(e) => handleClick(e, l.hash)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="cta-button"
          onClick={(e) => handleClick(e, "#contact")}
        >
          Free Audit
        </a>

        {/* Mobile burger (hidden by default) */}
        <button
          className="md:hidden ml-4"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="nav-links flex flex-col md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.hash}>
              <a href={l.hash} onClick={(e) => handleClick(e, l.hash)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
