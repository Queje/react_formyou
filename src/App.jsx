import "style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/Authentication/authMiddleware.js";
import Cookies from "js-cookie";
import Home from "pages/Home/Home.jsx";
import Login from "pages/Login/Login.jsx";
import Register from "pages/Register/Register.jsx";
import Profile from "pages/Profile/Profile.jsx";
import Navbar from "components/Layout/Navbar/Navbar.jsx";
import Footer from "components/Layout/Footer/Footer";
import FlashMessage from "components/Layout/FlashMessage.jsx";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import AdminRoute from "components/AdminRoute";
import Course from "pages/Course/Course";
import Admin from "pages/Admin/Admin";
import Promotion from "pages/Promotion/Promotion";

const App = () => {
  const [loadReady, setLoadReady] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const displayFlash = useSelector((state) => state.flash.display);
  const dispatch = useDispatch();

  const autoLogin = async () => {
    const token = Cookies.get("token");
    if (!currentUser && token) {
      dispatch(fetchCurrentUser(token));
    }
    setLoadReady(true);
  };
  useEffect(() => {
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  return (
    <>
      <main>
        <Router>
          <Navbar />
          {displayFlash && <FlashMessage />}
          {loadReady && (
            <Switch>
              <PublicRoute
                restricted={false}
                currentUser={currentUser}
                component={Home}
                path="/"
                exact
              />
              <PublicRoute
                restricted={true}
                currentUser={currentUser}
                component={Login}
                path="/login"
                exact
              />
              <PublicRoute
                restricted={true}
                currentUser={currentUser}
                component={Register}
                path="/register"
                exact
              />
              <PrivateRoute
                currentUser={currentUser}
                component={Profile}
                path="/profile"
                exact
              />
              <PrivateRoute
                currentUser={currentUser}
                component={Course}
                path="/courses/:courseId"
              />
              <PrivateRoute
                currentUser={currentUser}
                component={Promotion}
                path="/promotions/:id"
              />
              <AdminRoute currentUser={currentUser} component={Admin} />
            </Switch>
          )}
        </Router>
      </main>
      <Footer />
    </>
  );
};

export default App;
