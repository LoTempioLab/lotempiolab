// src/App.jsx

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Research from "./pages/Research";
import LabMembers from "./pages/LabMembers";
import SiteFooter from "./components/SiteFooter";
import Investigator from "./pages/Investigator";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * Handles GitHub Pages direct-link redirects
 */
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate(redirect);
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectHandler />

      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<LabMembers />} />
          <Route path="/investigator" element={<Investigator />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        

          {/* SPA 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </Router>
  );
}

export default App;
