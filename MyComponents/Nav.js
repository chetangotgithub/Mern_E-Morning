import React from "react";
import Cobox from "../images/COBOX.gif";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Nav() {
  const a = localStorage.getItem("token");
  const history = useHistory();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ margin: "0px", padding: "0px" }}
          >
            <img src={Cobox} alt="" style={{ width: "44px", margin: "0px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i class="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/News"
                >
                  <i class="far fa-newspaper"></i> News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Weather"
                >
                  <i class="fas fa-cloud-sun-rain"></i> Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Notes"
                >
                  <i class="fas fa-sticky-note"></i> Notes
                </Link>
              </li>
            </ul>
            {a ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  let a = localStorage.removeItem("token");
                  alert("logout Successfully");
                  history.push("/");
                }}
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to="/SignIn"
                  className="btn btn-primary mx-2"
                  role="button"
                  aria-pressed="true"
                >
                  <i class="fas fa-sign-in-alt"></i> Sign In
                </Link>

                <Link
                  to="/SignUp"
                  className="btn btn-secondary mx-2"
                  role="button"
                  aria-pressed="true"
                >
                  <i class="fas fa-user-plus"></i> Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
