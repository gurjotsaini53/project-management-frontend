import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Main from "./Main";
import Form from "./Form";
import axios from "axios";
export default function MyProjects() {
  // const [isAddProjectOpen, SetAddProjectVisiblity] = useState(true);
  let username;
  username = localStorage.getItem("name");

  async function getData() {
    let data = await axios.get("http://localhost:8000/myprojects");
    return data;
  }

  const [Visiblity, SetVisiblity] = useState("none");
  const formStyle = {
    position: "absolute",
    top: "20px",
    marginTop: "57px",
    marginLeft: "20%",
    marginRight: "50%",
    padding: "50px",
    borderRadius: "22px",
    display: Visiblity,
    backgroundColor: "#0a58ca",
    width: "60vw",
    height: "85vh",
    borderRadius: "5px",
    zIndez: "50px",
  };

  let form = document.getElementById("Form");
  function addProject() {
    SetVisiblity("block");
  }

  return (
    <>
      <Navbar username={username} />

      <div className="dashboard-container">
        <Aside />
        <Main />

        <Form style={formStyle} />

        <button
          type="button"
          id="add-btn"
          className="btn btn-primary"
          onClick={addProject}
        >
          Add Project
        </button>
      </div>
    </>
  );
}
