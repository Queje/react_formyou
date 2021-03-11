import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ManageUsers from "./ManageUsers/ManageUsers";
import ManageAllUsers from "./ManageAllUsers/ManageAllUsers"
import ManageCourses from "./ManageCourses/ManageCourses";
import ManagePromotions from "./ManagePromotions/ManagePromotions";
import "./Admin.scss";
import AdminRoute from "components/AdminRoute";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ManageClassrooms from "./ManageClassrooms/ManageClassrooms";

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
          component={ManageAllUsers}
          path="/admin/allusers"
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
        <AdminRoute
          currentUser={currentUser}
          component={ManageClassrooms}
          path="/admin/classrooms"
        />
      </Switch>
    </div>
  );
};

export default Admin;
