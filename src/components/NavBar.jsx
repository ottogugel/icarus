import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function NavBar() {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  }

  const dynamicMenu = () => {
    if (state) { // user is already logged in
      return [
        <li key="990" className="nav-item">
          <NavLink className="nav-link" to="/myposts">
            My Posts
          </NavLink>
        </li>,
        <li key="989" className="nav-item">
          <NavLink className="nav-link" to="/create">
            Create
          </NavLink>
        </li>,
      ];
    }
  }

  return (
    <div>
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
              <li key="988" className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News
                </NavLink>
                <ul className="dropdown-menu">
                  <li key="987">
                    <NavLink className="dropdown-item" to="/notice">
                      Notice
                    </NavLink>
                  </li>
                  <li key="986">
                    <NavLink className="dropdown-item" to="/event">
                      Event
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li key="985" className="nav-item" />
              <li key="984" className="nav-item">
                <NavLink className="nav-link" to="/posts">
                  Posts
                </NavLink>
              </li>
              <li key="982" className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li key="981" className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </NavLink>
                <ul className="dropdown-menu">
                  <li key="980">
                    <NavLink className="dropdown-item" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li key="979">
                    <NavLink className="dropdown-item" to="/work">
                      Work with us
                    </NavLink>
                  </li>
                </ul>
              </li>
              {dynamicMenu()}
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
              {state ? (
                <button
                  onClick={(event) => logout(event)}
                  className="btn btn-danger bg-gradient mx-1"
                  type="submit"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              ) : (
                <>
                  <NavLink
                    to={"/login"}
                    className="btn btn-primary bg-gradient mx-1"
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </NavLink>
                  <NavLink to={"/signup"} className="btn btn-dark bg-gradient">
                    <i className="fa-sharp fa-solid fa-user-plus"></i>
                  </NavLink>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );

}


export default NavBar