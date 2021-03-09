import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <NavLink className="nav-link" to="/admin/users">
        Manage Users
      </NavLink>
      <p>Manage courses</p>
      <p>Manage promotions</p>
    </div>
  );
};

export default Sidebar;
