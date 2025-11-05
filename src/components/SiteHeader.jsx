//src/components/SiteFooter.jsx

import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <h1>Lotempio Lab</h1>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={isOpen ? "open" : ""}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/research" onClick={() => setIsOpen(false)}>Research</Link>
        <Link to="/members" onClick={() => setIsOpen(false)}>Lab Members</Link>
        <Link to="/investigator" onClick={() => setIsOpen(false)}>Princepal Investigator</Link>
        <Link to="/publications" onClick={() => setIsOpen(false)}>Publications</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </Header>
  );
}
