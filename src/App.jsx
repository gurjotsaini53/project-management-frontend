import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Dashboard from "./components/Dashboard";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/discover" element={<Discover />}></Route>
          <Route path="/dashboard/myProjects" element={<MyProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
