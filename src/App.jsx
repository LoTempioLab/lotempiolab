import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Research from "./pages/Research";
import LabMembers from "./pages/LabMembers";
import SiteFooter from "./components/SiteFooter";
import Investigator from "./pages/Investigator";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router >
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<LabMembers />} />
          <Route path="/investigator" element={<Investigator />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter/>
    </Router>
  );
}

export default App;
