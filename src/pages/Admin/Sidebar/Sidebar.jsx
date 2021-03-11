import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <NavLink className="nav-link" to="/admin/users">
        Manage Approvals
      </NavLink>
      <NavLink className="nav-link" to="/admin/allusers">
        Manage All Users
      </NavLink>
      <NavLink className="nav-link" to="/admin/courses">
        Manage Courses
      </NavLink>
      <NavLink className="nav-link" to="/admin/promotions">
        Manage Promotions
      </NavLink>
      <NavLink className="nav-link" to="/admin/classrooms">
        Manage Classrooms
        </NavLink>
      <NavLink className="nav-link" to="/admin/categories">
        Manage Categories
      </NavLink>
    </div>
  );
};

export default Sidebar;
