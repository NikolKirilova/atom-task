import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { topBarLinks, topMenuLinks } from "../../utils/links";
import { useSidebarContext } from "../../context/sidebar_context";

const Header = () => {
  const { openSidebar } = useSidebarContext();
  let activeClassName = "nav-active";
  let menuLinks = "nav-link";
  return (
    <div>
      <header className="App-header">
        <div className="header-wrapper">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
          <div className="top-bar-links">
            {topBarLinks.map((link) => {
              return (
                <Link to={link.path} key={link.id} className="App-link">
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
      <nav className="top-menu">
        <ul className="nav-links">
          {topMenuLinks.map((link) => {
            return (
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  isActive ? activeClassName : menuLinks
                }
                end
                to={link.path}
              >
                {link.name}
              </NavLink>
            );
          })}
        </ul>
        <div>
          <button type="button" className="donation-btn">
            donation
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
