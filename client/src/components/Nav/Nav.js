import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand text-light">
        Reading List
      </a>
      <ul className="navbar-nav flex-row ml-md-auto links">
        <li className="nav-item active">
          <Link to="/search" className="nav-link d-inline-flex">Search<span className="border-right mx-5"></span></Link>
        </li>
        <li className="nav-item active">
          <Link to="saved" className="nav-link d-inline-flex">Saved</Link>
        </li>
        </ul>
    </nav>
  );
}

export default Nav;
