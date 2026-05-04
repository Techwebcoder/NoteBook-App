import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Navbar mode:", props.mode);

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged out successfully", "success");
    navigate("/login");
  };

  let modeButton;

  if (props.mode === "light") {
    modeButton = (
      <span key="moon">
        <i className="fa-solid fa-moon me-2"></i>
        Dark
      </span>
    );
  } else {
    modeButton = (
      <span key="sun">
        <i className="fa-solid fa-sun me-2"></i>
        Light
      </span>
    );
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active fw-bold" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active fw-bold" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <button
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
            onClick={props.toggleMode}
          >
            {modeButton}
          </button>

          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup">
                Signup
              </Link>
            </div>
          ) : (
            <button className="btn btn-danger mx-1" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
