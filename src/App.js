import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home/home";
import Services from "./pages/Services/services";
import Resume from "./pages/Resume/Resume";
import Work from "./pages/Work/work";
import ContactMe from "./pages/ContactMe/contactme";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
