import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import Navbar from "components/Navbar";

const App = () => {
  return (
    <container className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </container>
  );
};

export default App;
