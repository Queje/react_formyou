import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import Cookies from "js-cookie";
import Home from "pages/Home";
import Login from "pages/login";
import Register from "pages/register";
import Profile from "pages/Profile";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import FlashMessage from "components/layout/FlashMessage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

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
          </Switch>
        )}
        <Footer />
      </Router>
    </section>
  );
};

export default App;
