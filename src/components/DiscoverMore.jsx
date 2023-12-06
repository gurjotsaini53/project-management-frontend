import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function DiscoverMore() {
  const Navigate = useNavigate();

  function NavigateToDiscover() {
    Navigate("/dashboard/discover");
  }
  return (
    <>
      <div className="aside-FeedBtn" onClick={NavigateToDiscover}>
        Discover More
      </div>
    </>
  );
}
