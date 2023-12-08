import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function myProjectsBtn() {
  const Navigate = useNavigate();

  function NavigateToMyProjects() {
    Navigate("/dashboard/myProjects");
  }
  return (
    <>
      <div className="aside-FeedBtn" onClick={NavigateToMyProjects}
      >
        My Projects
      </div>
    </>
  );
}
