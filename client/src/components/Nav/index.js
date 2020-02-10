import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="/">
        Sketchy Books
      </a>
      <div className="navbar-nav mr-auto">
        <a className="nav-link" href="/Search">Search</a>
        <a className="nav-link" href="/Saved">Saved</a>
      </div>
    </nav>
  );
}

export default Nav;
