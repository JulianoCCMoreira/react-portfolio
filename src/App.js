import React from "react";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Specialization from "./components/specializations/Specialization";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="heroContainer">
        <Hero />
      </div>

      <Specialization />
      <Experience />
    </div>
  );
}

export default App;
