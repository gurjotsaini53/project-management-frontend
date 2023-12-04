import logo from "../img/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            <a href="" id="title">
              {" "}
              Project Management System
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
