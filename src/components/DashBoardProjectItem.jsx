export default function ProjectItem(props) {
  return (
    <>
      <div className="projectItem">
        <h5 id="name">
          <i className="fa-regular fa-circle-user"></i> {props.name}
          {"    "}
          <span id="username">@{props.username}</span>
        </h5>

        <h3>{props.data.projectName}</h3>
        <p>{props.data.projectDescription}</p>
        <p>
          <strong>Github Link</strong>{" "}
          <a href={props.data.projectLinks}>{props.data.projectLinks}</a>
        </p>
        <p>
          <strong>team Size : </strong> {props.data.countOfMember}
        </p>
      </div>
    </>
  );
}
