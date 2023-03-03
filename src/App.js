import React from "react";
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
    </div>
  );
}

export default App;
