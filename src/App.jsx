import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <Banner2 />
      {/* <Banner3 /> */}
    </>
  );
}

export default App;
