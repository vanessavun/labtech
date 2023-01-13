import React, { useContext } from "react";
import "./navbar.styles.css";
import { UserContext } from "../../context/UserContext";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase";

function Navbar() {
  const { currentUser, displayName } = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1682/1682102.png"
            width="30"
            height="30"
            alt="Laboratory icon created by Freepik - Flaticon"
          />
          <Link to="/" className="mx-1 navbar-brand">
            Biotech Lab
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to="/" className="mx-2 nav-link">
                  Kanban Board
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item ps-2">
                {currentUser && displayName ? (
                  <div className="d-flex justify-items-center">
                    <p className="px-2 m-auto">Welcome, {displayName}!</p>
                    <button
                      className="btn btn-warning btn-sm"
                      type="button"
                      onClick={signOutUser}
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-warning btn-sm" type="button">
                    <Link to="/auth" className="nav-link p-0">
                      Log In
                    </Link>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
