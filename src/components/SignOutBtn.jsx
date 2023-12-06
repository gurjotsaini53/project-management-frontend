import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function SignOutBtn() {
  const Navigate = useNavigate();

  function NavigateToHome() {
    localStorage.removeItem("uname");
    Navigate("/");
  }
  return (
    <>
      <div className="aside-signOutBtn" onClick={NavigateToHome}>
        Sign Out
      </div>
    </>
  );
}
