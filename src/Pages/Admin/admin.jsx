import React from "react";
import Sidebar from "./Sidebar/sidebar";
import ManageUsers from "./ManageUsers/manageUsers";
import ManageCourses from "./ManageCourses/manageCourses";
import ManagePromotions from "./ManagePromotions/managePromotions";
import "./admin.scss";
import AdminRoute from "../../Components/AdminRoute";
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
