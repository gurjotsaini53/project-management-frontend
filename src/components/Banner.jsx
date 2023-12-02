import softImg from "../img/softImg.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-left">
          <h1>#1 Project Management software tool used by agile teams</h1>

          <h4>
            Trusted by 100K+ teams that plan, track, release, and manage
            world-class software.
          </h4>

          <img src={softImg} alt="" id="banner-left-img" />

          <h4>INCLUDED IN YOUR FREE PLAN: Forever free for up to 10 users</h4>
        </div>
        <div className="banner-right">
          <SignIn />
          {/* <SignUp /> */}
        </div>
      </div>
    </>
  );
}
