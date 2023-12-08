import Navbar from "./Navbar";
import BannerSignIn from "./BannerSignIn";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <BannerSignIn />
      <Banner2 />
      {/* <Banner3 /> */}
    </>
  );
}
