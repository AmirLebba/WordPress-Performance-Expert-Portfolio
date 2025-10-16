"use client";

export default function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          SpeedExpert
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#case-studies">Case Studies</a>
          </li>
          <li>
            <a href="#tools">Tools</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="cta-button">
          Free Audit
        </a>
      </div>
    </header>
  );
}
