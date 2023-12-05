import { useEffect } from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Main from "./Main";

export default function Dashboard() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Aside />
        <Main />
      </div>
    </>
  );
}
