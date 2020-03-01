import React, { useState } from "react";
import NavbarContainer from "../NavbarContainer";
import { Link } from "../../util/router.js";
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import "./styles.scss";


function NavBar(props) {
  const auth = true;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <Image media={props.fields.logo} className="image" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
              <Link className="navbar-item" to="/">
              Home
              </Link>
            {!auth.user && (
              <Link className="navbar-item" to="/signup">
                Join
              </Link>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default NavBar;