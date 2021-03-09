import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Switch } from "react-router-dom";
import AdminRoute from "components/AdminRoute";
import DashboardUsers from "./DashboardUsers";
import { useSelector } from "react-redux";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="Admin">
      <Sidebar />
      <DashboardUsers />
    </div>
  );
};

export default Admin;
