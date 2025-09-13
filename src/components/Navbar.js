
// REDUNDANT FILE

import React from "react";
import moon from "./moon.png";
import sun from "./sun.png"

function Navbar({ mode,toggle}) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input
          type="text"
          placeholder="Enter location..."
          className="search-bar"
        />
        <button className="search-btn">Search</button>

        <label >
          <button onClick={toggle} className="search-btn2"><img  id="abc" src= {mode==="dark"?moon:sun}alt="" height={"40px"}width={"40px"}/></button>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
