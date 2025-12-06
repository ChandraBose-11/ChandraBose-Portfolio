import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import SingleProject from "./Components/SingleProject"; // NEW

const App = () => {
  return (
    <Router>
      <div className="bg-[#0e0c1e]">
        <Header />

        <Routes>
          {/* Your ORIGINAL Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Education />
                <Project />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* NEW Single Project Page */}
          <Route path="/project/:id" element={<SingleProject />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
