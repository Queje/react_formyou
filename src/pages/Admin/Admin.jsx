import React from "react";
import Sidebar from "./Sidebar";
import ManageUsers from "./ManageUsers/ManageUsers";
import ManageCourses from "./ManageCourses/ManageCourses";
import "./Admin.scss";
import AdminRoute from "components/AdminRoute";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="Admin">
      <Sidebar />
      {/* <ManageUsers /> */}
      {/* <ManageCourses /> */}

      <Switch>
        <AdminRoute
          currentUser={currentUser}
          component={ManageUsers}
          path="/admin/users"
        />
        <AdminRoute
          currentUser={currentUser}
          component={ManageCourses}
          path="/admin/courses"
        />
      </Switch>
    </div>
  );
};

export default Admin;
