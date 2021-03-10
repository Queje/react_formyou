import "./Navbar.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/Authentication/authMiddleware";

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
              <Link className="nav-link" to="/login">
                Log in
              </Link>
              <Link className="nav-link" to="/register">
                Sign up
              </Link>
            </>
          )}
          {currentUser && (
            <>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <button className="nav-link" onClick={logout}>
                Se déconnecter
              </button>
            </>
          )}
          {currentUser && currentUser.role === "admin" && (
            <>
              <Link className="nav-link" to="/admin">
                Dashboard Admin
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
