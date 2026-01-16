import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Research from "./pages/Research";
import LabMembers from "./pages/LabMembers";
import SiteFooter from "./components/SiteFooter";
import Investigator from "./pages/Investigator";
import Publications from "./pages/Publications";
import Symposia from "./pages/Symposia";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Consortia from "./pages/Consortia";

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
  // ✅ ADD THIS (only once)
  useEffect(() => {
    document.dispatchEvent(new Event("prerender:ready"));
  }, []);

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
          <Route path="/symposia" element={<Symposia />} />
          <Route path="/media" element={<Media />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consortia" element={<Consortia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </Router>
  );
}

export default App;
