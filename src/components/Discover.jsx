import { useEffect } from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Main from "./Main";
import axios from "axios";
export default function Discover() {
  let username;
  username = localStorage.getItem("name");
  useEffect(() => {
    // let data = getData();
    // console.log(data);
  }, []);

  async function getData() {
    let data = await axios.get("http://localhost:8000/dashboard/discover");
    return data;
  }

  return (
    <>
      <Navbar username={username} />

      <div className="dashboard-container">
        <Aside />
        <Main />
      </div>
    </>
  );
}
