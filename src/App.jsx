import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner />
    </>
  );
}

export default App;
