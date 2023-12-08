import axios from "axios";
import { useEffect, useState } from "react";

export default function Form(props) {
  console.log(props.formData.data);

  const [projectName, setProjectName] = useState(
    props.formData.data.projectName
  );

  let _ProjectId = props.formData.data._id;

  console.log(_ProjectId);
  const [projectId, setProjectId] = useState(props.formData.data.projectId);
  const [projectDescription, setProjectDescription] = useState(
    props.formData.data.projectDescription
  );
  const [countOfMember, setCountofMember] = useState(
    props.formData.data.countOfMember
  );
  const [projectLinks, setProjectLinks] = useState(
    props.formData.data.projectLinks
  );

  let username = localStorage.getItem("uname");
  let form = document.getElementById("Form");
  function onCancle() {
    form.style.display = "none";
    location.reload();
  }

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };
  const handleProjectIdChange = (event) => {
    setProjectId(event.target.value);
  };
  const handleProjectDescChange = (event) => {
    setProjectDescription(event.target.value);
  };
  const handleProjectCountMemChange = (event) => {
    setCountofMember(event.target.value);
  };
  const handleProjectLinkChange = (event) => {
    setProjectLinks(event.target.value);
  };

  let updatedProject = {
    projectId,
    projectName,
    projectDescription,
    username,
    countOfMember,
    projectLinks,
  };
  async function onSubmitData() {
    let response = await axios.post("http://localhost:8000/update", {
      username,
      _ProjectId,
      updatedProject,
    });
    if (response.status == 200) {
      window.alert("Project Updated");
      onCancle();
    } else {
      window.alert("Failed to Update Project");
    }
    //console.log(username, _ProjectId, updatedProject);
  }

  function onCancel() {
    document.getElementById("Form").style.display = "none";
    location.reload();
  }
  return (
    <>
      <div id="Form" style={props.style}>
        <div id="cancel" onClick={onCancel}>
          <div>
            <i className="fa-solid fa-xmark fa-xl"></i>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Project Name :</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            placeholder="Project-1"
            value={projectName}
            onChange={handleProjectNameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Project ID</label>
          <input
            className="form-control"
            id="projectId"
            type="text"
            placeholder="Unique Integer"
            value={projectId}
            disabled
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Project Description</label>
          <textarea
            className="form-control"
            id="projectDes"
            type="text"
            placeholder="Your ProjectDesciption here "
            value={projectDescription}
            onChange={handleProjectDescChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Count Of Members</label>
          <input
            className="form-control"
            id="memcou"
            type="number"
            value={countOfMember}
            onChange={handleProjectCountMemChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Project Link</label>
          <input
            className="form-control"
            id="projectlink"
            type="text"
            placeholder="Give your project's link"
            value={projectLinks}
            onChange={handleProjectLinkChange}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={onSubmitData}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
