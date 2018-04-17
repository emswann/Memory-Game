import React from "react";
import Score from "../Score";
import "./NavBar.css";

import logo from "../../logo.svg";

const NavBar = props => (
  <nav className="navbar navbar-dark bg-primary text-center">
    <div className="col-md-4">
      <a className="navbar-brand" href="/">
        <h2 className="navbar-text font-weight-bold text-white">
          <span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
          Memory Game
        </h2>
      </a>
    </div>
    <div className="col-md-4">
      <h3 className="navbar-text" style={props.messageColor}>
        {props.message}
      </h3>
    </div>
    <div className="col-md-4">
      <h3 className="navbar-text text-white">
        <Score
          score={props.score}
          topScore={props.topScore}
        />
      </h3>
    </div>
  </nav>
);

export default NavBar;