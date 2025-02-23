
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext.js";
import Home from "./Pages/Home";

export default function App() {
  const [dark, setDark] = useState(false); // Fixed useState initialization

  return (
    <ThemeContext.Provider value={{ dark, setDark }}> {/* Provided setDark for toggling */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeContext.Provider>
  );
}
