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
    <nav className="navbar static-top py-2">
      <div className="navbar nav-items mr-auto">
        <Link to="/">
          <h2 className="navbartitle">FormYou</h2>
        </Link>
      </div>

      {!currentUser && (
        <>
          <Link className="nav-link mr-3" to="/register">
            Sign up
          </Link>
          <Link className="nav-link btn btn-primary" to="/login">
            Log in
          </Link>
        </>
      )}

      {currentUser && currentUser.role === "admin" && (
        <>
          <Link className="nav-link" to="/admin">
            Dashboard Admin
          </Link>
        </>
      )}

      {currentUser && (
        <>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <button className="nav-link btn btn-danger" onClick={logout}>
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
