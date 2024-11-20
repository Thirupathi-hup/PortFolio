import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Projects from "./components/Projects/Projects.js";
import ContactMe from "./components/ContactMe/ContactMe.js";
import Skills from "./components/Skills/Skills.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import "./App.css";
import Certificates from "./components/Certificates/Certificates.js";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/certificates" element={<Certificates />} />
      {/* Fallback route for undefined paths */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
