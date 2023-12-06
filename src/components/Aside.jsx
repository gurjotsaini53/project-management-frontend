import SignOutBtn from "./SignOutBtn";
import DiscoverMore from "./DiscoverMore";
import MyProjectsBtn from "./MyProjectsBtn";

export default function Aside() {
  return (
    <>
      <div className="aside-container">
        <DiscoverMore />
        <MyProjectsBtn />
        <SignOutBtn />
      </div>
    </>
  );
}
