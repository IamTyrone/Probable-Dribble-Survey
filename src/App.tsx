import React from "react";
import { Routes, Route } from "react-router-dom";
import Survey from "./pages/Survey";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Survey />} />
    </Routes>
  );
}

export default App;
