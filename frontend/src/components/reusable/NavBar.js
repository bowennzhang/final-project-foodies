import { NavLink } from "react-router-dom";

import LoginButton from "../userLogin/LoginButton";
import LogoutButton from "../userLogin/LogoutButton";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-links">
        <p className="nav-logo">Foodies</p>
      </NavLink>
      <div>
        <NavLink to="/" activeClassName="active" className="nav-links">
          <span className="options">Home</span>
        </NavLink>

        <NavLink to="/search" activeClassName="active" className="nav-links">
          <span className="options">Search</span>
        </NavLink>

        <NavLink to="/profile" activeClassName="active" className="nav-links">
          <span className="options">Profile</span>
        </NavLink>
      </div>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default NavBar;
