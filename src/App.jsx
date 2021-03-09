import "./style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import AdminRoute from "components/AdminRoute";
import FlashMessage from "components/layouts/FlashMessage";
import Cookies from "js-cookie";
import Home from "pages/Home";
import Profile from "pages/Profile/Profile";
import Login from "pages/Login";
import Register from "pages/Register";
import Admin from "pages/Admin/Admin";
import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";


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
    <section className="App">
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
            <AdminRoute
              currentUser={currentUser}
              component={Admin}
              path="/admin"
            />
          </Switch>
        )}
        <Footer />
      </Router>
    </section>
  );
};

export default App;
