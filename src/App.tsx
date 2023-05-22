import React from "react";
import "./App.css";
import About from "./Components/About/About";
import { Outlet, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects/Project";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Outlet />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
