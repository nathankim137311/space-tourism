import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
