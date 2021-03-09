import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/authentication/authMiddleware";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };
  return (
    <div className="navbar navbar-expand-lg">
      <nav>
        <div className="navbar-nav d-lg-flex align-items-center">
          <Link className="nav-link" to="/">
            <h1 className="navbartitle">FormYou</h1>
          </Link>
        
        {!currentUser && (
          <>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </>
        )}
        {currentUser && (
          <>
            <Link className="nav-link" to="/profile">Profile</Link>
            <button className="nav-link" onClick={logout}>Se déconnecter</button>
          </>
        )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
