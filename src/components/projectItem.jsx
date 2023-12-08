import axios from "axios";
import { useState } from "react";
import UpdateForm from "./UpdateForm";
export default function ProjectItem(props) {
  // console.log(props);
  let username = localStorage.getItem("uname");
  let name = localStorage.getItem("name");

  const [isUpdating, setUpdating] = useState(false);
  const [Visiblity, SetVisiblity] = useState("none");

  function updateProject() {
    setUpdating(!isUpdating);
  }
  let teamSize = props.data.countOfMember;

  let projectName = props.data.projectName;
  let projectId = props.data._id;
  async function deleteProject() {
    console.log("deleted called");

    let x = window.confirm("Äre you sure ? You want to Delete the Project");
    if (x === true) {
      let response = await axios.post("http://localhost:8000/delete", {
        username,
        projectId,
      });
      location.reload();
    } else {
      location.reload();
    }

    console.log(response);
  }
  const formStyle = {
    position: "absolute",
    top: "20px",
    marginTop: "57px",
    marginLeft: "2%",
    marginRight: "50%",
    padding: "50px",
    borderRadius: "22px",
    backgroundColor: "#0a58ca",
    width: "60vw",
    height: "85vh",
    borderRadius: "5px",
    zIndez: "50px",
  };
  return (
    <>
      <div className="projectItem">
        <h5 id="name">
          <i className="fa-regular fa-circle-user"></i> {name}
          {"    "}
          <span id="username">@{username}</span>
        </h5>

        <h3>{props.data.projectName}</h3>
        <p>{props.data.projectDescription}</p>
        <p>
          <strong>Github Link</strong>{" "}
          <a href={props.data.projectLinks}>{props.data.projectLinks}</a>
        </p>
        <p>
          <strong>team Size : </strong> {teamSize}
        </p>
        <div id="project-controls" onClick={updateProject}>
          <div id="edit">
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </div>
          <div id="trash" onClick={deleteProject}>
            <i className="fa-solid fa-trash fa-xl"></i>
          </div>
        </div>
      </div>

      {isUpdating ? (
        <UpdateForm style={formStyle} formData={props} />
      ) : (
        <div></div>
      )}
    </>
  );
}
