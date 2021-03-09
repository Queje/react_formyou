import React from "react";
import Sidebar from "./Sidebar";
import DashboardUsers from "./DashboardUsers";
import "./admin.scss";
import AdminRoute from "components/AdminRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="Admin">
      <Sidebar />
      <DashboardUsers />
      {/* <Router>
        <Switch>
          <AdminRoute
            restricted={false}
            currentUser={currentUser}
            component={DashboardUsers}
            path="/admin/users"
            exact
          />
        </Switch>
      </Router> */}
    </div>
  );
};

export default Admin;
