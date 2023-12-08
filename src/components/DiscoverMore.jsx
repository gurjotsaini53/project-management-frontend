import { faColonSign, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DiscoverMore() {
  const Navigate = useNavigate();
  function NavigateToDiscover() {
    Navigate("/dashboard/discover");
  }

  return (
    <>
      <div className="aside-FeedBtn" onClick={NavigateToDiscover}>
        Discover Projects
      </div>
    </>
  );
}
