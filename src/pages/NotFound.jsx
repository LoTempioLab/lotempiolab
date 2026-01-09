// src/pages/NotFound.jsx

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "3rem" }}>404</h1>
      <h2>Page not found</h2>

      <p style={{ margin: "1.5rem 0", maxWidth: 500, marginInline: "auto" }}>
        The page you’re looking for doesn’t exist or may have moved.
      </p>

      <Link to="/" style={{ color: "#255799", fontWeight: 500 }}>
        ← Return to Home
      </Link>
    </div>
  );
}
