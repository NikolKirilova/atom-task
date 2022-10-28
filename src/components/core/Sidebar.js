import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebar_context";
import { FaTimes } from "react-icons/fa";
import { topMenuLinks } from "../../utils/links";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {topMenuLinks.map(({ id, name, path }) => {
            return (
              <li key={id}>
                <Link to={path} onClick={closeSidebar}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
