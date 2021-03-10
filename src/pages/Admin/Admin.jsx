import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ManageUsers from "./ManageUsers/ManageUsers";
import ManageCourses from "./ManageCourses/ManageCourses";
import ManagePromotions from "./ManagePromotions/ManagePromotions";
import "./Admin.scss";
import AdminRoute from "components/AdminRoute";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="Admin">
      <Sidebar />
      <Switch>
        <AdminRoute
          currentUser={currentUser}
          component={ManageUsers}
          path="/admin"
          exact
        />
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
        <AdminRoute
          currentUser={currentUser}
          component={ManagePromotions}
          path="/admin/promotions"
        />
      </Switch>
    </div>
  );
};

export default Admin;
