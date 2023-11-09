import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Icarus
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/notice">
                    Notice
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/event">
                    Event
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item" />
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/work">
                    Work with us
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark bg-gradient mx-1" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <NavLink to={"/login"} className="btn btn-dark bg-gradient mx-1">
              <i className="fa-solid fa-right-to-bracket"></i>
            </NavLink>
            <NavLink to={"/signup"} className="btn btn-dark bg-gradient">
              <i className="fa-sharp fa-solid fa-user-plus"></i>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );

}


export default NavBar