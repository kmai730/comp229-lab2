import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Services from "./pages/services";
import Contact from "./pages/contact";

export default function App() {
  return (
    <>
      <Navbar/>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Kevin Hien Luong Mai</footer>
    </>
  );
}
