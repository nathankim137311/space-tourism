import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
      </Routes>
    </>
  );
}

export default App;
